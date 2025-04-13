import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EngineerAuth = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    email: "",
    mobile: "",
    resume: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (
      (name === "confirmPassword" && value !== formData.password) ||
      (name === "password" && formData.confirmPassword && value !== formData.confirmPassword)
    ) {
      setPasswordError("❌ Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("❌ Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3033/api/jobs/register", formData);
      alert("✅ Registered successfully!");
      setIsRegistered(true);
    } catch (error) {
      alert("❌ " + (error.response?.data?.message || "Registration failed."));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3033/api/jobs/login", {
        email: loginEmail,
        password: loginPassword,
      });

      alert("✅ Login successful!");
      localStorage.setItem("engineerToken", res.data.token);
      localStorage.setItem("engineerData", JSON.stringify(res.data.engineer));
      navigate("/engineer-dashboard");
    } catch (error) {
      alert("❌ " + (error.response?.data?.message || "Login failed."));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Engineer Portal</h1>
        <div className="flex justify-center mb-4 space-x-4">
          <button
            className={`px-4 py-2 rounded ${!isRegistered ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setIsRegistered(false)}
          >
            Register
          </button>
          <button
            className={`px-4 py-2 rounded ${isRegistered ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setIsRegistered(true)}
          >
            Login
          </button>
        </div>

        {!isRegistered ? (
          <form className="bg-white p-6 rounded-xl shadow space-y-4" onSubmit={handleRegister}>
            <input name="name" value={formData.name} placeholder="Full Name" required className="w-full p-2 border rounded" onChange={handleChange} />
            <input name="state" value={formData.state} placeholder="State" required className="w-full p-2 border rounded" onChange={handleChange} />
            <input name="email" value={formData.email} placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
            <input name="mobile" value={formData.mobile} placeholder="Mobile Number" required className="w-full p-2 border rounded" onChange={handleChange} />
            <input name="resume" value={formData.resume} placeholder="Resume Link" className="w-full p-2 border rounded" onChange={handleChange} />
            <textarea name="bio" value={formData.bio} placeholder="Your Bio" rows="3" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
            <input type="password" name="password" value={formData.password} placeholder="Password" autoComplete="new-password" required className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm Password" autoComplete="new-password" required className="w-full p-2 border rounded" onChange={handleChange} />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</button>
          </form>
        ) : (
          <form className="bg-white p-6 rounded-xl shadow space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              className="w-full p-2 border rounded"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EngineerAuth;
