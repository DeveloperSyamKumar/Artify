import React, { useState, useEffect } from "react";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";

export default function CartDrawer() {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCart = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/cart");
      setCart(data);
    } catch (err) {
      console.error("Error loading cart:", err);
      setError("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  const checkout = async () => {
    try {
      setLoading(true);
      await api.post("/orders", { items: cart.items });
      alert("Order placed!");
      setCart({ items: [] });
      setOpen(false);
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && currentUser) loadCart();
  }, [open, currentUser]);

  // 👇 Conditional render happens *after* hooks
  if (!currentUser) {
    return (
      <button
        onClick={() => alert("Please log in to view cart")}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        🛒
      </button>
    );
  }

  return (
    <div> 
      shyam
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        🛒
      </button>

      {/* Drawer */}
      {open && (
       
          <div className="fixed top-0 right-0 w-80 h-screen bg-white shadow-lg p-4 overflow-y-auto">

          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-black float-right"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>



          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {cart.items.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul className="mb-4">
              {cart.items.map((item, i) => (
                <li key={i} className="flex justify-between py-2 border-b">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={checkout}
            disabled={loading || cart.items.length === 0}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Checkout
          </button>



        </div>
      )}
    </div>
  );
}
