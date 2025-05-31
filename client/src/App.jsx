import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import AuthForm from "./components/AuthForm";


export default function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  const fetchPosts = async () => {
    const res = await fetch("https://YOUR_BRUNO_URL/posts");
    const data = await res.json();
    setPosts(data);
  };

  // Delete post handler
  const deletePost = async (id) => {
    const res = await fetch(`https://YOUR_BRUNO_URL/posts/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("Post deleted successfully");
      fetchPosts(); // refresh posts after delete
    } else {
      alert("Failed to delete post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <AuthForm />
      <h1>Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onDelete={deletePost} />
      ))}
    </div>
  );
}
