import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      // ✅ Save token + user in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Update context
      setCurrentUser(data.user);

      // ✅ Redirect
      navigate("/");
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-sm mx-auto bg-white rounded-xl shadow p-6 mt-10"
    >
      <h1 className="text-2xl font-bold mb-3 text-center">Register</h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full border rounded-lg px-3 py-2 mb-2"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        required
        autoComplete="email" // ✅ remembers past emails
        className="w-full border rounded-lg px-3 py-2 mb-2"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        required
        autoComplete="new-password" // ✅ asks for a new password
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />
      <button className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition">
        Create Account
      </button>
    </form>
  );
}
