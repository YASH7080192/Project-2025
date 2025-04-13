import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import hireRoutes from "./routes/hire.routes.js";


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect("mongodb+srv://ldhar3359:yashwant123@cluster0.au1ua.mongodb.net/homeEngineer")
  .then(() => {
    console.log(`✅ MongoDB Connected on host: ${mongoose.connection.host}`);
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => res.send("🚀 Express + MongoDB API is Running!"));

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/hire", hireRoutes);


const PORT = process.env.PORT || 3033;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
