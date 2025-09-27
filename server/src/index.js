import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/products.js";  //changed
import cartRoutes from "./routes/cart.js";        //changed
import orderRoutes from "./routes/orders.js";     //changed
import customRoutes from "./routes/custom.js";    //added
import cors from "cors";
import authRoutes from "../src/routes/auth.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Public Routes

app.use("/api/products", productRoutes); // anyone can see gallery
app.use("/api/auth", authRoutes);  // register/login

// Protected Routes
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/custom", customRoutes); 


// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
