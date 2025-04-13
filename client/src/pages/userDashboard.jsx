import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Dummy logged-in user ID (replace with real auth logic)
const userId = localStorage.getItem("userId"); // 🔁 Replace this with your actual logged-in user ID

const UserDashboard = () => {
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([
    "Uttar Pradesh", "Madhya Pradesh", "Bihar", "Delhi", "Maharashtra", "Punjab",
  ]);
  const [engineers, setEngineers] = useState([]);

  const navigate = useNavigate();

  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    try {
      const res = await axios.get(`http://localhost:3033/api/jobs/state/${state}`);
      setEngineers(res.data.engineers);
    } catch (error) {
      console.error("Failed to fetch engineers:", error);
    }
  };

  const handleHire = async (engineerId) => {
    try {
      const res = await axios.post("http://localhost:3033/api/hire", {
        engineerId,
        userId,
      });
      alert("✅ " + res.data.message);

      // Refresh engineers list
      handleStateChange({ target: { value: selectedState } });
    } catch (error) {
      const msg = error.response?.data?.message || "Hiring failed.";
      alert("❌ " + msg);
    }
  };

  const goToHiredEngineers = () => {
    navigate("/hired-engineers");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">User Dashboard</h1>
          <button
            onClick={goToHiredEngineers}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            View Hired Engineers
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="state" className="block text-lg font-semibold mb-2 text-gray-700">
            Select State:
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={handleStateChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select a State --</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Engineers in {selectedState || "Selected State"}
          </h2>
          {engineers.length === 0 ? (
            <p className="text-gray-500">No engineers available for the selected state.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineers.map((eng) => {
                const alreadyHired = eng.hiredBy.includes(userId);
                return (
                  <div
                    key={eng._id}
                    className="border border-gray-200 p-5 rounded-xl shadow-md bg-white"
                  >
                    <p><strong>Name:</strong> {eng.name}</p>
                    <p><strong>Email:</strong> {eng.email}</p>
                    <p><strong>Mobile:</strong> {eng.mobile}</p>
                    <p><strong>Bio:</strong> {eng.bio}</p>
                    <p><strong>State:</strong> {eng.state}</p>

                    {!alreadyHired ? (
                      <button
                        onClick={() => handleHire(eng._id)}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
                      >
                        Hire Engineer
                      </button>
                    ) : (
                      <p className="mt-4 text-green-600 font-semibold">Already Hired ✅</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
