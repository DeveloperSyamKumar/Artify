
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get all products (public)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add product (for admin / testing)
router.post("/", async (req, res) => {
  try {
    const { title, category, description, price, imageUrl } = req.body;
    const product = await Product.create({ title, category, description, price, imageUrl });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product
router.put("/:productid", async (req, res) => {
  try {
    const { title, category, description, price, imageUrl } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.productid,
      { title, category, description, price, imageUrl },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;













