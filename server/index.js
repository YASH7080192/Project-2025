import express  from "express"
import mongoose  from "mongoose"
import cors from "cors"
import userRoutes  from "./routes/auth.routes.js"

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // "Credential" should be "credentials"
  })
);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://ldhar3359:yashwant123@cluster0.au1ua.mongodb.net/homeEngineer"
  )
  .then(() => {
    console.log(`✅ MongoDB Connected on host: ${mongoose.connection.host}`);
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// API Route
app.get("/", (req, res) => res.send("🚀 Express + MongoDB API is Running!"));

// Use Routes
app.use("/api/users", userRoutes);

// Start Server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
