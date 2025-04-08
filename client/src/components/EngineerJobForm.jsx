import React from "react";

function EngineerJobForm() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Engineer Job Application</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="State" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Mobile Number" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Resume Link" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Bio" className="w-full p-2 border rounded" rows="4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EngineerJobForm;
