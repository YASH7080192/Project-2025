import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js"; // ✅ NEW route import

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ MongoDB Connect
mongoose
  .connect(
    "mongodb+srv://ldhar3359:yashwant123@cluster0.au1ua.mongodb.net/homeEngineer"
  )
  .then(() => {
    console.log(`✅ MongoDB Connected on host: ${mongoose.connection.host}`);
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ API Routes
app.get("/", (req, res) => res.send("🚀 Express + MongoDB API is Running!"));

// Existing User Routes
app.use("/api/users", userRoutes);

// ✅ Job Registration Routes
app.use("/api/jobs", jobRoutes);

// ✅ Start Server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
