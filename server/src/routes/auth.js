import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
import Profile from "../models/Profile.js";
import { auth } from "../middleware/auth.js";

dotenv.config();
const router = express.Router();

/**
 * @route   POST /auth/register
 * @desc    Register a new user
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);

    // save user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   POST /auth/login
 * @desc    Login user & return JWT
 */
// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

/**
 * @route   GET /auth/profile
 * @desc    Get basic user info (protected)
 */
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /auth/me
 * @desc    Get user + profile info (protected)
 */
// server/src/routes/auth.js
router.get("/me", auth, async (req, res) => {
  try {
    // get user (without password)
    const user = await User.findById(req.user.id).select("name email");
    if (!user) return res.status(404).json({ message: "User not found" });

    // get profile
    const profile = await Profile.findOne({ user: req.user.id }).select(
      "image location phone shippingAddress"
    );

    // merge both into one object
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      image: profile?.image || null,
      phone: profile?.phone || null,
      location: profile?.location || null,
      shippingAddress: profile?.shippingAddress || null,
    });
  } catch (err) {
    console.error("Error in /me:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
