import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    qty: Number,
    price: Number
  }],
  total: Number,
  status: { type: String, enum: ["created", "paid", "shipped"], default: "created" },
  shippingAddress: String
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
