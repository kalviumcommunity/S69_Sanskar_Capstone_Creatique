import React from "react";

export default function PostCard({ post, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}
