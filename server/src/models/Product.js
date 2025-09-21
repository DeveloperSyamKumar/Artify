// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   category: { type: String, enum: ["Lippan", "mandala"], required: true },
//   description: String,
//   price: { type: Number, required: true },
//   imageUrl: { type: String, required: true }
// }, { timestamps: true });

// export default mongoose.model("Product", productSchema);


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },  
  // 👈 no enum restriction
  description: String,
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
