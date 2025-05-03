import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  return (
    <div>
      <h1>Messages from Backend:</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
