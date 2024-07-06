import Post from "./Post";
import { useEffect, useState } from "react";
import { getPosts } from "../api/api";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    }).catch((error) => {
      toast.error("Error loading posts", error.message);
    });
  }, []);
  useAuth();

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default Posts;
