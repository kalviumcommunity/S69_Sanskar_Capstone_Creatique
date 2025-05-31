// src/components/DeleteButton.jsx
import React from 'react';

const DeleteButton = ({ postId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/posts/${postId}`, {
        method: 'DELETE',
      });
      onDelete(postId); // Callback to parent
    } catch (error) {
      console.error('Failed to delete post', error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteButton;