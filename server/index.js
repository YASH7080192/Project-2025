const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://yashvant23:yashvant23@cluster0.39clx.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => res.send("🚀 Express + MongoDB API is Running!"));


app.listen(3000, () => console.log("🚀 Server running on port 3000"));
