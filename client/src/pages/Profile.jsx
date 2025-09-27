import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [me, setMe] = useState(null);
  const [orders, setOrders] = useState([]);
<<<<<<< HEAD
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
=======
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
<<<<<<< HEAD
        // ✅ Fetch merged user object
        const { data } = await api.get("/auth/me");
        setMe(data);
        setForm(data); // initialize form with user data

        // ✅ Fetch orders
        const res = await api.get("/orders");
        setOrders(res.data);
      } catch (e) {
        console.error("❌ Error fetching profile or orders:", e);
        navigate("/login");
=======
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
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
      }
    })();
  }, [navigate]);

<<<<<<< HEAD
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { data } = await api.put("/auth/me", {
        phone: form.phone,
        image: form.image,
        location: form.location,
        shippingAddress: form.shippingAddress,
      });
      setMe(data);
      setEditing(false);
    } catch (err) {
      console.error("❌ Error updating profile:", err);
    }
  };

=======
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
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

<<<<<<< HEAD
        <div className="space-y-2 w-full">
          {!editing ? (
            <>
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

              <button
                onClick={() => setEditing(true)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="font-semibold">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                  className="ml-2 border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="font-semibold">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={form.image || ""}
                  onChange={handleChange}
                  className="ml-2 border rounded px-2 py-1 w-72"
                />
              </div>
              <div>
                <label className="font-semibold">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={form.location || ""}
                  onChange={handleChange}
                  className="ml-2 border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="font-semibold">Shipping Address:</label>
                <input
                  type="text"
                  name="shippingAddress"
                  value={form.shippingAddress || ""}
                  onChange={handleChange}
                  className="ml-2 border rounded px-2 py-1 w-72"
                />
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
=======
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
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
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
