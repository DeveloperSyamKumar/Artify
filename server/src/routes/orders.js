import express from "express";
import Order from "../models/Order.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();

// Place order
router.post("/", auth, async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user.id,
      items,
      totalPrice,
      status: "Pending",
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate(
      "items.product"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
