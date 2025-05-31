import { useState } from "react";
import axios from "axios";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      const res = await axios.post("http://localhost:3000/api/register", {
        username,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert("Registration failed");
    }
  }

  async function handleLogin() {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  }

  return (
    <div className="p-4 border rounded m-4">
      <h2 className="text-xl font-bold mb-2">Auth Form</h2>
      <input
        className="border p-2 m-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 m-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button className="bg-green-500 text-white p-2 m-2" onClick={handleRegister}>
          Register
        </button>
        <button className="bg-blue-500 text-white p-2 m-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
