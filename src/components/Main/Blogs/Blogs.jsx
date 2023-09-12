import { useEffect, useState } from "react";
import Post from "./Post/Post";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // console.log(posts);

  return (
    <div className="w-2/3">
      <h1 className="text-5xl font-bold text-red-600">
        Knowledge Cafe {posts.length}
      </h1>
      <div>
        {
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })
        }
      </div>
    </div>
  );
};

export default Blogs;
