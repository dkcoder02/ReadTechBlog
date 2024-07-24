import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { deletePost as removePost } from "../store/postSlice";
import { ScaleLoader } from "react-spinners";

export default function Post() {
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =
    post && userData ? post.userId === userData.userData.$id : false;

  const handleReadBlogPost = async () => {
    try {
      setIsLoading(true);
      const post = await appwriteService.getPost(slug);
      if (post) setPost(post);
      else navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      handleReadBlogPost();
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
        dispatch(removePost());
      }
    });
  };

  return isLoading ? (
    <div className="w-full mb-48 mt-48 py-8 text-center">
      <Container>
        <ScaleLoader color="#f97316" height="45" margin="3" />
      </Container>
    </div>
  ) : post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-2xl overflow-hidden">
          <div className="w-full h-96">
            <img
              src={appwriteService.getFilePreview(post?.featuredImage)}
              alt={post?.title}
              className="object-cover w-full h-full"
            />
          </div>

          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-3">
              <Link to={`/edit-post/${post?.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="prose max-w-full">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
