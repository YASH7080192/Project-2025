import express from "express";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import Job from "../Models/job.model.js";
import mongoose from "mongoose";

const router = express.Router();

// 🔹 User Registration Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, address, gender } = req.body;
    console.log("Data receeeived : ",{ name, email, password, address, gender })

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    // Create new user
    const newUser = await User.create({ name, email, password, address, gender });

    if(!newUser){
        return res.status(500).json({message : "Server error can not register an user"})
    }

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// 🔹 User Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) return res.status(400).json({ message: "Invalid Email or Password!" });

    // Check password
    const isMatch = await user.isPasswordCorrect(password);
    console.log(isMatch)
    if (!isMatch){ 
        console.log("error in finding pass");
        return res.status(400).json({ message: "Invalid Email or Password!" })
    };

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, "kakjncoijdPFkOOOONboioo", { expiresIn: "1h" });
    console.log(token)

    res.status(200).json({ message: "Login Successful", token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// GET /api/users/:userId/hired-engineers
router.get("/:userId/hired-engineers", async (req, res) => {
  const { userId } = req.params;
  console.log("runned the file ")

  try {
    const hiredEngineers = await Job.find({
      hiredBy: new mongoose.Types.ObjectId(userId)
    });    console.log(hiredEngineers)
    res.status(200).json({ hiredEngineers });
  } catch (err) {
    console.error("Fetch Hired Engineers Error:", err);
    res.status(500).json({ message: "Failed to fetch hired engineers." });
  }
});

export default router;
