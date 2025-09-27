<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
import CartDrawer from "../components/CartDrawer.jsx";

export default function Home() {
  const images = [
<<<<<<< HEAD
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/MAIN_rns2jm.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0002_ophrkn.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0004_t0sfko.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0003_dgrnuj.jpg",
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "PEACOCK",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/IMG-20250926-WA0024_ytz4nx.jpg",
      price: 799,
      details: "Lippan Art Mud 12X12 Mirror wall decor, Hand made WallArt",
      category: "Lippan",
    },
    {
      id: 2,
      name: "Handmade WallArt",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/IMG-20250926-WA0027_mx6wv2.jpg",
      price: 600,
      details: "Lippan Art Mud 12X12 Mirror wall decor, Hand made WallArt",
      category: "Lippan",
    },
    {
      id: 3,
      name: "White OM",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/IMG-20250926-WA0026_b4rpan.jpg",
      price: 799,
      details: "Lippan Art Mud 30cmx30cm Mirror wall decor, Hand made WallArt",
      category: "Lippan",
    },
    {
      id: 4,
      name: "Ganapathi",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0025_bubame.jpg",
      price: 799,
      details: "Lippan Art Mud 30cmx30cm Mirror wall decor, Hand made WallArt",
      category: "Lippan",
    },
    {
      id: 5,
      name: "Lippan Art with Mirror",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0023_p7nhub.jpg",
      price: 899,
      details: "Wall hanging home decoration in circle 12inch White",
      category: "Lippan",
    },
    {
      id: 6,
      name: "Acrylic Unique Wants",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0021_xjtknx.jpg",
      price: 700,
      details: "Wall hanging home decoration in circle  30cm Blue-White",
      category: "Lippan",
    },
    {
      id: 7,
      name:  "Lotus And Elephant Lippan Art",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0022_qv8idz.jpg",
      price: 800,
      details: "6x4 inch lotus and Elephant Lippan",
      category: "Lippan",
    },
    {
      id: 8,
      name: "Dot Art Mandala",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0018_w9nocv.jpg",
      price: 470,
      details: "Mandala Wall Decor, black base with blue and green dots, Round Wooden Panel",
      category: "Mandala",
    },
    {
      id: 9,
      name: "Mandala Original Handmade",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0017_ykxlvn.jpg",
      price: 749,
      details: "Mandala original handmade painting with Acrylic Colours Wall hanging for living room , Wall-decor blue-yellow-white ",
      category: "Mandala",
    },
    {
      id: 10,
      name: "Brilliant Grand Central",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0016_zzelc3.jpg",
      price: 470,
      details: "Hand Painted dot Mandala Art Wall Decor, Attract Positivity, Modern Bohemian Home Decoration ",
      category: "Mandala",
    },
    {
      id: 11,
      name: "HandCrafted Dot Mandala",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0014_cetlxo.jpg",
      price: 750,
      details: "Mirror Wall Art, 10inch Round,Redand Yellow Design (12x14)inch Multicolor",
      category: "Mandala",
    },
    {
      id: 12,
      name: "Evil Eye Wall Decor",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0015_othzpv.jpg",
      price: 250,
      details: "Hand made dotted mandala , Evil Eye for Protection 20 cm ",
      category: "WallArt",
    },
    {
      id: 13,
      name: "Mandala Art Key Chains ",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0019_mecorg.jpg",
      price: 60,
      details: "Each keychain costs 60/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 14,
      name: "Key chains",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0012_elwxfj.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 15,
      name: "Key Chains",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0009_t228dq.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 16,
      name: "Key Chains",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0011_rfp8ge.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 17,
      name: "Key Chains",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0010_b9vvgj.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 18,
      name: "VINTAGE FRAMES",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0005_dkcc1h.jpg",
      price: "  N/A",
      details: "CONTACT US for prize details and customization",
      category: "Frames",
    },
    {
      id: 19,
      name: "3D MOON",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 500,
      details: "3d moon 6inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 20,
      name: "3D MOON",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 1000,
      details: "3d moon 12inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 21,
      name: "3D MOON",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 1250,
      details: "3d moon 15inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 22,
      name: "ROUND FRAME",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912402/WhatsApp_Image_2025-09-26_at_23.59.31_453b090c_ytawq1.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
    {
      id: 23,
      name: "SQUARE FRAME",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912388/WhatsApp_Image_2025-09-26_at_23.59.30_2d1e6a96_gfuosd.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
    {
      id: 24,
      name: "SQUARE FRAME",
      image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1759010363/WhatsApp_Image_2025-09-26_at_23.59.29_f3fb1a24_glh5iu_e31bec.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
    {
      id: 25,
      name: "Art Print 25",
      image: images[0],
      price: 1699,
      details: "",
      category: "Trending",
    },
  ];

  const [cart, setCart] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="space-y-12">
      <section className="relative w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide ${idx + 1}`}
              // className="w-full flex-shrink-0 object-cover h-full"
              className="w-full flex-shrink-0 h-full object-contain sm:object-cover"
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 text-white text-2xl sm:text-3xl px-2 sm:px-3 py-1 rounded-full hover:bg-black/70 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 text-white text-2xl sm:text-3xl px-2 sm:px-3 py-1 rounded-full hover:bg-black/70 transition"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
=======
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
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
<<<<<<< HEAD
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition transform ${
                currentIndex === idx
                  ? "bg-white scale-125"
=======
              className={`h-4 w-4 rounded-full transition transform ${
                currentIndex === idx
                  ? "bg-white scale-110"
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
                  : "bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Why Artify */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-5 text-center">Why THE PAINTED DREAM?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="font-bold p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            Premium materials
          </div>
          <div className="font-bold p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            Made to order
          </div>
          <div className="font-bold p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
=======
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
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
            Pan-India shipping
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Trending Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-5 text-center">Trending</h2>
        <div className="p-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {trendingProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <span className="absolute top-3 right-3 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {p.category}
              </span>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <p className="text-black-500 text-sm mb-2">{p.details}</p>
              <p className="font-semibold text-black-600 mb-4">₹{p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      <section className="max-w-6xl mx-auto px-4">
        <CartDrawer cart={cart} />
=======
      {/* Cart Drawer */}
      <section className="max-w-6xl mx-auto px-4">
        <CartDrawer />
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
      </section>
    </div>
  );
}
