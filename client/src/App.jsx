import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import WhatsAppPopup from "./components/WhatsAppPopup.jsx";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Customize from "./pages/Customize.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState({ items: [] });

  // On mount, check for token in localStorage and fetch user data if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Optional: decode token if needed or call /auth/me endpoint
        // For now we just set a dummy user
        setCurrentUser({ name: "User", token });
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

        {/* Cart drawer always receives user & cart */}
        <CartDrawer user={currentUser} cart={cart} setCart={setCart} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={
                <Gallery user={currentUser} cart={cart} setCart={setCart} />
              }
            />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/customize" element={<Customize />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppPopup />
      </div>
    </Router>
  );
}
