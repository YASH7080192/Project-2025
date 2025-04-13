import React, { useState } from "react";

function CustomerRequirementForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Customer Data:", formData);

    // ✅ Yahan baad me POST API call lagayenge
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Customer Requirement Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Describe your requirement..."
            rows={4}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerRequirementForm;
