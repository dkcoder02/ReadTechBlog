import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="w-auto rounded-md border">
      <img
        src={appwriteService.getFilePreview(featuredImage)}
        alt={title}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <Link to={`/post/${$id}`}>
          <button
            type="button"
            className="mt-4 rounded-sm bg-orange-500 px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
