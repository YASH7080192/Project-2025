import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import this
import { registerUser } from "../api"; // Import API function

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
  });

  const [message, setMessage] = useState(""); // State for success/error messages
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setMessage(response.data.message); // Show success message
      setFormData({ name: "", email: "", password: "", gender: "", address: "" }); // Clear form
      setTimeout(() => {
        navigate("/signin"); // 👈 Navigate to login page
      }, 1000); // Optional: wait 1 sec to show success message
      
    } catch (error) {
      console.log("Registration error:", error.response?.data); 
      setMessage(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Register</h2>

        {/* Success/Error Message */}
        {message && <p className="text-center text-red-500">{message}</p>}

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name" required />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email" required />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password" required />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address" required></textarea>
          </div>
        </div>

        <button type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600 transition">
          Register
        </button>
      </form>
    </div>
  );
}
