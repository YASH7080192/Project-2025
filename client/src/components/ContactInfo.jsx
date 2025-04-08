import React from "react";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-blue-600 mb-5 text-center">
          About HiringEngineers
        </h2>

        <p className="text-gray-700 text-base mb-4 leading-relaxed text-justify">
          <strong>HiringEngineers</strong> is a platform built to connect homeowners and construction project owners with skilled engineers. Whether you're designing a house, working on a 3D model, or starting a construction project, we make it easier to find the right professionals.
        </p>

        <p className="text-gray-700 text-base mb-4 leading-relaxed text-justify">
          Engineers can easily create their profiles, showcase their past work, and reach out to potential clients. This helps both clients and engineers save time, build trust, and collaborate on successful projects.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">💡 Key Highlights:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Create engineer profiles with experience and skills</li>
            <li>Upload project images and 3D home designs</li>
            <li>Get discovered by location (city or district)</li>
            <li>Ratings and reviews to build trust</li>
          </ul>
        </div>

        <p className="text-center text-gray-600 italic">
          “We believe great engineering should be easy to find.”
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
