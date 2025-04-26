import { useState } from "react";
import { loginUser } from "../api"; // 
import { useNavigate } from "react-router-dom"; 

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      setMessage(response.data.message);
      console.log("🔐 Token:", response.data.token);
      localStorage.setItem("token", response.data.token); 
      localStorage.setItem("userId", response.data.user.id);
      setTimeout(() => {
        navigate("/dashboard");  
      }, 1000); 
      
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Login
        </h2>

        {message && (
          <p className="text-center mb-2 text-red-500 font-medium">{message}</p>
        )}

        <div className="grid grid-cols-1 gap-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
