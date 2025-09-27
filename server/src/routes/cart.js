import express from "express";
import Cart from "../models/Cart.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Get user's cart
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add to cart
router.post("/", auth, async (req, res) => {
  try {
    const { productId, qty } = req.body; // ✅ use qty not quantity
    if (!productId || !qty || qty < 1) {
      return res.status(400).json({ message: "Invalid product or qty" });
    }

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const existingItem = cart.items.find((i) => i.product.toString() === productId);
    if (existingItem) {
      existingItem.qty += qty; // ✅ update qty
    } else {
      cart.items.push({ product: productId, qty });
    }

    await cart.save();
    const populated = await cart.populate("items.product");
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update qty for a product
router.put("/update", auth, async (req, res) => {
  try {
    const { productId, qty } = req.body;
    if (!productId || !qty || qty < 1) {
      return res.status(400).json({ message: "Invalid product or qty" });
    }

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find((i) => i.product.toString() === productId);
    if (!item) return res.status(404).json({ message: "Item not found in cart" });

    item.qty = qty; // ✅ overwrite instead of adding
    await cart.save();

    const populated = await cart.populate("items.product");
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove from cart
router.delete("/:productId", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((i) => i.product.toString() !== req.params.productId);
    await cart.save();

    const populated = await cart.populate("items.product");
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
