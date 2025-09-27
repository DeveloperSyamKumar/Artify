// server/src/models/Profile.js
import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
<<<<<<< HEAD
  image: { type: String },
  location: { type: String, required: true },
  phone: { type: Number },
=======
  image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: Number, required: true },
>>>>>>> 1e262422c859067a08ffb20913a59eb05b54a0e6
  shippingAddress: { type: String, required: true },
});

export default mongoose.model("Profile", ProfileSchema);
