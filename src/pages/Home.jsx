import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { ScaleLoader } from "react-spinners";

function Home() {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([]);
  const isAuth = localStorage.getItem("is_login");

  const handleBlogPosts = async () => {
    try {
      setIsFetching(true);
      const posts = await appwriteService.getPosts();
      if (posts) setPosts(posts.documents);
    } catch (error) {
      // console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    handleBlogPosts();
  }, []);

  if (isAuth == "false" || undefined || null) {
    return (
      <div className="w-full py-8 mb-40 mt-40 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-3xl text-red-600 font-bold hover:text-orange-500">
                Please Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return isFetching ? (
    <div className="w-full mb-48 mt-48 py-8 text-center">
      <Container>
        <ScaleLoader color="#f97316" height="45" margin="3" />
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
