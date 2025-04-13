import React, { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    requirement: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Yahan backend pe bhejna hai future me
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      requirement: '',
    });
  };

  return (
    <div className="bg-white py-10 px-4 md:px-20 shadow-md rounded-md my-10">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Looking for an Engineer?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="requirement"
          placeholder="Describe your engineering requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="w-full border p-3 rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Requirement
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
