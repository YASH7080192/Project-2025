import React, { useEffect, useState } from "react";
import axios from "axios";

const EngineerDashboard = () => {
  const [hiringUsers, setHiringUsers] = useState([]);
  const engineerData = JSON.parse(localStorage.getItem("engineerData"));
  const engineerId = engineerData?.id;

  useEffect(() => {
    const fetchHiringUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:3033/api/jobs/${engineerId}/hiring-users`);
        setHiringUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch hiring users:", error);
      }
    };

    if (engineerId) {
      fetchHiringUsers();
    }
  }, [engineerId]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Welcome, {engineerData?.name}
        </h2>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Clients Who Hired You:</h3>
          {hiringUsers.length > 0 ? (
            <ul className="space-y-4">
              {hiringUsers.map((user) => (
                <li key={user._id} className="border p-4 rounded shadow-sm">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <p><strong>Gender:</strong> {user.gender}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No one has hired you yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboard;
