import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy data to send from the backend
const messages = [
  { id: 1, text: "Hello from backend!" },
  { id: 2, text: "You made your first GET API!" },
];

app.get("/api/messages", (req, res) => {
  res.json(messages); // Send the messages as JSON response
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
