// server/routes/custom.js
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, design, color } = req.body;

    if (!name || !design) {
      return res.status(400).json({ error: "Name and design are required" });
    }

    // Example: save to DB (replace with your model)
    // const custom = new CustomModel({ name, design, color });
    // await custom.save();

    res.status(201).json({ message: "Custom order created successfully" });
  } catch (err) {
    console.error("❌ Error in /api/custom:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default router;
