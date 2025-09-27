import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
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
    // <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //   {products.map((p , _id) => (
    //     <div key={p._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    //       <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover rounded" />
    //       <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
    //       <p className="text-gray-500">{p.category}</p>
    //       <p className="text-gray-600">{p.description}</p>
    //       <p className="text-gray-800 font-medium mt-1">₹{p.price}</p>
    //       <button
    //         onClick={() => handleAddToCart(p)}
    //         className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   ))}
    // </div>

    //     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //   {products.map((p) => (
    //     <div
    //       key={p._id}
    //       className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    //     >
    //       <div className="relative">
    //         <img
    //           src={p.imageUrl}
    //           alt={p.title}
    //           className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
    //         />
    //         <span className="absolute top-3 right-3 bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold">
    //           {p.category}
    //         </span>
    //       </div>
    //       <div className="p-4">
    //         <h2 className="text-lg font-semibold text-gray-800 truncate">{p.title}</h2>
    //         <p className="text-gray-500 text-sm mt-1 line-clamp-2">{p.description}</p>
    //         <div className="flex items-center justify-between mt-4">
    //           <span className="text-gray-900 font-bold text-lg">₹{p.price}</span>
    //           <button
    //             onClick={() => handleAddToCart(p)}
    //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
    //           >
    //             Add
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div
          key={p._id}
          className="relative bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={p.imageUrl}
              alt={p.title}
              className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-3 right-3 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {p.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="p-5">
            <h2 className="text-lg font-semibold text-black-100 truncate">
              {p.title}
            </h2>
            <p className="text-black-300 text-sm mt-2 line-clamp-2">
              {p.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-white font-bold text-lg">₹{p.price}</span>
              <button
                onClick={() => handleAddToCart(p)}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Add
              </button>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 shadow-[0_0_50px_10px_rgba(255,255,255,0.05)] pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
