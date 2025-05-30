import React, { useState, useEffect } from 'react';

export default function UploadForm({ postToEdit, onUploadComplete }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const isEdit = !!postToEdit;

  useEffect(() => {
    if (isEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setImage(postToEdit.image);
    }
  }, [postToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = isEdit ? 'PUT' : 'POST';
    const url = isEdit
      ? `http://localhost:5050/posts/${postToEdit.id}`  // <-- make sure this matches backend
      : 'http://localhost:5050/posts';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, image }),
      });

      if (!res.ok) {
        throw new Error(isEdit ? 'Failed to update post' : 'Failed to create post');
      }

      const data = await res.json();
      alert(`✅ Post ${isEdit ? 'updated' : 'created'}:\n` + JSON.stringify(data.post, null, 2));

      if (!isEdit) {
        setTitle('');
        setContent('');
        setImage('');
      }

      onUploadComplete && onUploadComplete(data.post);
    } catch (err) {
      alert('❌ ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>{isEdit ? 'Edit Post' : 'Create a Post'}</h2>

      <label>Title</label><br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br /><br />

      <label>Content</label><br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      /><br /><br />

      <label>Image URL</label><br />
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      /><br /><br />

      <button type="submit">{isEdit ? 'Update Post' : 'Submit Post'}</button>
    </form>
  );
}
