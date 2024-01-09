"use client";
import { useState } from "react";
import { login } from "@/helper/auth";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    if (username && password) {
      await login( username, password );
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (loggedIn) {
    return <p>Redirecting to dashboard...</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
        <h1 className="text-2xl font-bold mb-4">Sign in to your account</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
