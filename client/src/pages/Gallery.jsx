import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to cart!");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart`,
        { productId: product._id, qty: 1 }, // include quantity if required by backend
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        alert("✅ Added to cart!");
      } else {
        alert("❌ Failed to add to cart");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("❌ Error adding to cart");
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
          <p className="text-gray-500">{p.category}</p>
          <p className="text-gray-600">{p.description}</p>
          <p className="text-gray-800 font-medium mt-1">₹{p.price}</p>
          <button
            onClick={() => handleAddToCart(p)}
            className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
