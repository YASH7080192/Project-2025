// server/models/job.model.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password:{
    type:String, 
    required:true
  },

  hiredBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
}, { timestamps: true });

// 🔹 Hash password before saving
jobSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip hashing if password is not modified

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔹 Method to compare password for login
jobSchema.methods.isPasswordCorrect = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Job = mongoose.model("Job", jobSchema);
export default Job;
