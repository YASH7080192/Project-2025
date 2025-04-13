// routes/hire.routes.js
import express from "express";
import Job from "../Models/job.model.js";
import User from "../Models/User.js";

const router = express.Router();

// POST /api/hire
router.post("/", async (req, res) => {
  const { engineerId, userId } = req.body;

  try {
    const job = await Job.findById(engineerId);
    if (!job) return res.status(404).json({ message: "Engineer not found" });

    // Prevent duplicate hiring
    if (job.hiredBy.includes(userId)) {
      return res.status(400).json({ message: "Engineer already hired by this user." });
    }

    job.hiredBy.push(userId);
    await job.save();

    res.status(200).json({ message: "Engineer hired successfully" });
  } catch (err) {
    console.error("Hire Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
