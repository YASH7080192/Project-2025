import express from "express";
import Job from "../Models/job.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// POST route to create new engineer job
router.post("/register", async (req, res) => {
  try {
    const { name, state, email, mobile, resume, bio, password } = req.body;
    console.log("Dtails found : ", { name, state, email, mobile, resume, bio, password })
    const engineer = new Job({ name, state, email, mobile, resume, bio, password });
    await engineer.save();
    console.log(engineer)
    res.status(201).json({ message: "Engineer registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to register engineer." });
  }
});

// GET engineers by state
router.get("/state/:state", async (req, res) => {
  try {
    const state = req.params.state;
    const engineers = await Job.find({ state });
    res.status(200).json({ engineers });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch engineers." });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("User found : ", { email, password })
  try {
    const engineer = await Job.findOne({ email });
    if (!engineer) return res.status(400).json({ message: "Engineer not found" });

    // Check password
    const isMatch = await engineer.isPasswordCorrect(password);
    console.log(isMatch)
    if (!isMatch) {
      console.log("error in finding pass");
      return res.status(400).json({ message: "Invalid Email or Password!" })
    };

    // Generate JWT Token
    const token = jwt.sign({ id: engineer._id }, "kakjncoijdPFkOOOONboioo", { expiresIn: "1h" });
    console.log(token)
    res.status(200).json({ message: "Login Successful", token, engineer: { id: engineer._id, name: engineer.name, email: engineer.email } });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

router.get("/:id/hiring-users", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("hiredBy");
    if (!job) return res.status(404).json({ message: "Engineer not found" });

    res.json(job.hiredBy); // all users who hired this engineer
  } catch (err) {
    res.status(500).json({ message: "Error fetching hiring users", error: err.message });
  }
});
export default router;
