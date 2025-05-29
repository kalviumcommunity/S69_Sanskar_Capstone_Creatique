import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5050;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Routes
app.post('/posts', (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log('Received post:', { title, content, image });

  res.status(201).json({
    message: 'Post received',
    post: { title, content, image },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
