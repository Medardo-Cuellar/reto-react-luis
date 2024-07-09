import Post from "./Post";
import PostPicture from "@/assets/post1.jpg";
import { useState, useEffect } from "react";
import { getPosts } from "@/api/api";

function Content() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((postes) => {
        setPosts(postes);
      })
      .catch((error) => {
        console.error("[getPosts error]", error);
      });
  }, []);

  return (
    <section className="col-start-2 col-end-3 row-start-2 row-end-3">
      {console.log(posts)}
    </section>
  );
}

export default Content;
