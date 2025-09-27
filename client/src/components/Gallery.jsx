import React, { useState } from "react";
import { api } from "../api";

const images = [
  { id: 1, src: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1755878402/222_qd8s2m.jpg", title: "Artwork 1", price: 1200 },
  { id: 2, src: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1755878402/222_qd8s2m.jpg", title: "Artwork 2", price: 1500 },
  { id: 3, src: "https://picsum.photos/600/400?random=3", title: "Artwork 3", price: 800 },
  { id: 4, src: "https://picsum.photos/600/400?random=4", title: "Artwork 4", price: 950 },
  { id: 5, src: "https://picsum.photos/600/400?random=5", title: "Artwork 5", price: 1100 },
  { id: 6, src: "https://picsum.photos/600/400?random=6", title: "Artwork 6", price: 1300 },
];

const Gallery = ({ user, cart, setCart }) => {
  const [loadingIds, setLoadingIds] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = async (product) => {
    if (!user) return showToast("You must be logged in!", "error");

    const token = localStorage.getItem("token");
    if (!token) return showToast("You must be logged in!", "error");

    try {
      setLoadingIds((prev) => [...prev, product.id]);
      const { data } = await api.post(
        "/cart",
        { productId: product.id, qty: 1 },
        { headers: { Authorization: `Bearer ${token}` } } // ✅ pass token
      );
      setCart(data || { items: [] });
      showToast(`${product.title} added to cart!`);
    } catch (err) {
      console.error("Add to cart error:", err);
      if (err.response?.status === 401) showToast("Unauthorized! Please log in.", "error");
      else showToast(err.response?.data?.message || "Failed to add item to cart", "error");
    } finally {
      setLoadingIds((prev) => prev.filter((id) => id !== product.id));
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Art Gallery</h2>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-16 right-5 px-4 py-3 rounded-lg shadow-lg text-white font-medium transition-all ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((art) => (
          <div key={art.id} className="rounded-2xl overflow-hidden shadow-lg flex flex-col">
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{art.title}</h3>
              <p className="text-gray-700">₹{art.price}</p>
              <button
                onClick={() => handleAddToCart(art)}
                disabled={loadingIds.includes(art.id)}
                className={`w-full py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  loadingIds.includes(art.id)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {loadingIds.includes(art.id) ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
