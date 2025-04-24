// HiredEngineers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const HiredEngineers = ({ userId }) => {
  const [engineers, setEngineers] = useState([]);
 
  useEffect(() => {
    const fetchHiredEngineers = async () => {
      try {
        const userId = localStorage.getItem("userId");
        console.log("userId : ",userId)
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP}/api/users/${userId}/hired-engineers`);
        setEngineers(res.data.hiredEngineers);
      } catch (error) {
        console.error("Error fetching hired engineers:", error);
      }
    };

    fetchHiredEngineers();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Hired Engineers</h1>
      {engineers.length === 0 ? (
        <p className="text-gray-600">You haven’t hired any engineers yet.</p>
      ) : (
        <ul className="space-y-4">
          {engineers.map((eng) => (
            <li key={eng._id} className="p-4 border rounded-lg shadow">
              <p><strong>Name:</strong> {eng.name}</p>
              <p><strong>Email:</strong> {eng.email}</p>
              <p><strong>Mobile:</strong> {eng.mobile}</p>
              <p><strong>Bio:</strong> {eng.bio}</p>
              <p><strong>State:</strong> {eng.state}</p>
              <a
                href={eng.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Resume
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HiredEngineers;
