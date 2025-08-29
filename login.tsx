// app/login.tsx

"use client";

import { useState } from "react";
import { signIn } from "./lib/auth"; // adjust path if needed

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const session = await signIn(email, password);
      setMessage(`Welcome, ${session.user?.name || "Guest"}!`);
    } catch (error) {
      console.error(error);
      setMessage("Login failed.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </label>

        <label className="block mb-6">
          <span
