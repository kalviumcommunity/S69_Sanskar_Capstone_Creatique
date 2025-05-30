import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

const posts = [];  // Store posts in-memory

app.post('/posts', (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    image
  };

  posts.push(newPost);

  console.log('Received post:', newPost);

  res.status(201).json({ message: 'Post received', post: newPost });
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;

  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts[index] = {
      ...posts[index],
      title: title || posts[index].title,
      content: content || posts[index].content,
      image: image || posts[index].image
    };
    return res.json(posts[index]);
  } else {
    return res.status(404).json({ error: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
