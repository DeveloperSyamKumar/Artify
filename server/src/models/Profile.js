// server/src/models/Profile.js
import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
});

export default mongoose.model("Profile", ProfileSchema);
