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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    console.log("=== GET /me called ===");

    // 🔹 Log authenticated user
    console.log("Authenticated user from auth middleware:", req.user);

    // 🔹 Fetch user (exclude password)
    const user = await User.findById(req.user.id).select("-password");
    console.log("Fetched user:", user);

    if (!user) return res.status(404).json({ message: "User not found" });

    // 🔹 Fetch profile
    const profile = await Profile.findOne({ user: req.user.id });
    console.log("Fetched profile:", profile);

    // 🔹 Build unified response dynamically
    const response = {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image || null,
      phone: user.phone || null,
      location: profile?.location || null,
      shippingAddress: profile?.shippingAddress || null,
    };

    res.json(response);

    console.log("Response sent:", response);
    console.log("=== GET /me finished ===");
  } catch (err) {
    console.error("Error in GET /me:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/me", auth, async (req, res) => {
  try {
    console.log("=== PUT /me called ===");

    // 🔹 Log authenticated user
    console.log("Authenticated user from auth middleware:", req.user);

    const { name, phone, image, location, shippingAddress } = req.body;
    console.log("Payload from frontend:", req.body);

    // 🔹 Build user update object dynamically
    const userUpdate = {};
    if (name !== undefined) userUpdate.name = name;
    if (phone !== undefined) userUpdate.phone = phone;
    if (image !== undefined) userUpdate.image = image;
    console.log("User update object:", userUpdate);

    // 🔹 Build profile update object dynamically
    const profileUpdate = {};
    if (location !== undefined) profileUpdate.location = location;
    if (shippingAddress !== undefined)
      profileUpdate.shippingAddress = shippingAddress;
    console.log("Profile update object:", profileUpdate);

    // 🔹 Validate authenticated user ID
    if (!req.user || !req.user.id) {
      console.error("Error: req.user.id is missing!");
      return res.status(401).json({ message: "Unauthorized: user ID missing" });
    }

    // 🔹 Log current user in DB before update
    const userBefore = await User.findById(req.user.id);
    console.log("User before update:", userBefore);

    // 🔹 Update User
    let user = null;
    if (Object.keys(userUpdate).length > 0) {
      user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: userUpdate },
        { new: true, runValidators: true }
      );
    } else {
      user = await User.findById(req.user.id);
    }

    // 🔹 Fetch user after update to confirm DB write
    const userAfter = await User.findById(req.user.id);
    console.log("User after update:", userAfter);

    if (!userAfter) return res.status(404).json({ message: "User not found" });

    // 🔹 Log current profile in DB before update
    const profileBefore = await Profile.findOne({ user: req.user.id });
    console.log("Profile before update:", profileBefore);

    // 🔹 Update or create Profile
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileUpdate, $setOnInsert: { user: req.user.id } },
      { new: true, upsert: true, runValidators: true }
    );

    // 🔹 Fetch profile after update to confirm DB write
    const profileAfter = await Profile.findOne({ user: req.user.id });
    console.log("Profile after update:", profileAfter);

    // 🔹 Build response dynamically with only updated/available fields
    const response = {
      id: userAfter._id,
      name: userAfter.name,
      email: userAfter.email,
      image: userAfter.image || null,
      phone: userAfter.phone || null,
      location: profileAfter?.location || null,
      shippingAddress: profileAfter?.shippingAddress || null,
    };

    res.json(response);

    console.log("=== PUT /me finished ===");
    console.log("Response sent:", response);
  } catch (err) {
    console.error("Error in PUT /me:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// router.get("/all", auth, role(["admin"]), async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });



export default router;
