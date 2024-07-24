import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { ScaleLoader } from "react-spinners";

function AllPosts() {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([]);

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

export default AllPosts;
