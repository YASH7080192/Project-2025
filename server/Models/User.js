import mongoose  from 'mongoose'
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    address:{type:String, required:true},
    
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"], }

})

// 🔹 Hash password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Skip hashing if password is not modified
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // 🔹 Method to compare password for login
  UserSchema.methods.isPasswordCorrect = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const User = mongoose.model("User",UserSchema);
export default User;