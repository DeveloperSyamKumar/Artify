import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [me, setMe] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // ✅ Fetch merged user object from backend
        const { data } = await api.get("/auth/me");
        console.log("✅ /auth/me response:", data);
        setMe(data);

        // ✅ Fetch orders
        const res = await api.get("/orders");
        console.log("📦 Orders:", res.data);
        setOrders(res.data);
      } catch (e) {
        console.error("❌ Error fetching profile or orders:", e);
        navigate("/login"); // redirect if not authenticated
      }
    })();
  }, [navigate]);

  if (!me) {
    return <p className="p-4">Loading profile...</p>;
  }

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
        <img
          src={
            me.image ||
            "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-business-user-profile-vector-png-image_1541960.jpg"
          }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />

        <div className="space-y-2">
          <div>
            <span className="font-semibold">Full Name: </span>
            {me.name}
          </div>
          <div>
            <span className="font-semibold">Email: </span>
            {me.email}
          </div>
          <div>
            <span className="font-semibold">Phone: </span>
            {me.phone || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Location: </span>
            {me.location || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Shipping Address: </span>
            {me.shippingAddress || "N/A"}
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div>
        <h2 className="text-xl font-semibold mb-3">My Orders</h2>
        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o._id} className="bg-white rounded-xl shadow p-4">
              <div className="font-medium">Order #{o._id.slice(-6)}</div>
              <div className="text-sm text-gray-600">
                Total: ₹{o.total} • {new Date(o.createdAt).toLocaleString()}
              </div>

              <div className="mt-2 text-sm space-y-1">
                {o.items.map((i) => (
                  <div key={i._id}>
                    {i.qty} × {i.product?.title} (₹{i.price})
                  </div>
                ))}
              </div>

              <div className="mt-3 text-yellow-500">
                <span className="font-semibold">Rating: </span>
                {o.rating ? (
                  "⭐".repeat(o.rating)
                ) : (
                  <span className="text-gray-500">Not rated</span>
                )}
              </div>
            </div>
          ))}

          {orders.length === 0 && (
            <p className="text-sm text-gray-600">No orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
