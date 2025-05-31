import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import UploadForm from './UploadForm';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5050/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts || []))
      .catch(() => alert('Error fetching posts'));
  }, []);

  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleEdit = (post) => {
    setPostToEdit(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUploadComplete = (updatedPost) => {
    if (postToEdit) {
      setPosts(posts.map(post => (post._id === updatedPost._id ? updatedPost : post)));
      setPostToEdit(null);
    } else {
      setPosts([updatedPost, ...posts]);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <UploadForm postToEdit={postToEdit} onUploadComplete={handleUploadComplete} />
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map(post => (
          <PostCard
            key={post._id}
            post={post}
            onDelete={handleDeletePost}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}
