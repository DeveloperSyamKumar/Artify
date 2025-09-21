import React, { useState, useEffect } from "react";
import CartDrawer from "../components/CartDrawer.jsx";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1755878402/222_qd8s2m.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1755878736/111_ouhaeb.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1755878401/666_lopo5l.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="space-y-12">
      {/* Hero Carousel - Full Width + Full Height */}
      <section className="relative w-screen h-[80vh] md:h-[50vh] lg:h-screen overflow-hidden bg-black">
        <img
          src={images[currentIndex]}
          alt={`slide ${currentIndex + 1}`}
          className="w-full h-full object-contain transition-all duration-700"
        />

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-4 w-4 rounded-full transition transform ${
                currentIndex === idx
                  ? "bg-white scale-110"
                  : "bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Artify Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-5 text-center">Why Artify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            Premium materials
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            Made to order
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            Pan-India shipping
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      <section className="max-w-6xl mx-auto px-4">
        <CartDrawer />
      </section>
    </div>
  );
}
