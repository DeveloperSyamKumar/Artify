import mongoose from "mongoose";

const customOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  phone: String,
  whatsapp: String,
  details: String,
  referenceImageUrl: String,
  status: { type: String, enum: ["new", "contacted", "in-progress", "done"], default: "new" }
}, { timestamps: true });

export default mongoose.model("CustomOrder", customOrderSchema);
