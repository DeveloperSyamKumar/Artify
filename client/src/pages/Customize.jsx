import React, { useState } from "react";
import { api } from "../api";

export default function Customize() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [details, setDetails] = useState("");
  const [referenceImageUrl, setReferenceImageUrl] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // 🔑 get JWT from localStorage

    if (!token) {
      alert("Please login first!");
      return;
    }

    try {
      await api.post(
        "/custom",
        { name, phone, whatsapp, details, referenceImageUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ send token to backend
          },
        }
      );

      alert("Request submitted! We will contact you on WhatsApp.");
      setName("");
      setPhone("");
      setWhatsapp("");
      setDetails("");
      setReferenceImageUrl("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please login again.");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 space-y-3"
    >
      <h1 className="text-2xl font-bold mb-2">Customize Your Order</h1>

      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="WhatsApp Number"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <textarea
        className="w-full border rounded-lg px-3 py-2"
        rows="4"
        placeholder="Describe your custom art (size, colors, pattern)..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Reference Image URL (optional)"
        value={referenceImageUrl}
        onChange={(e) => setReferenceImageUrl(e.target.value)}
      />

      <button className="w-full bg-indigo-600 text-white rounded-lg py-2">
        Submit Request
      </button>

      <a
        className="block text-center border rounded-lg py-2"
        href={`https://wa.me/${
          whatsapp || "916300000000"
        }?text=${encodeURIComponent(
          "Hi! I have submitted a custom order request: " + details
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ping us on WhatsApp
      </a>
    </form>
  );
}
