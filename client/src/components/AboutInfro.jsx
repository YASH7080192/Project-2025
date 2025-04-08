import React from "react";

function AboutInfro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold">Home Engineer Hiring Platform</span> – your one-stop destination to find skilled engineers for your dream house.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We aim to connect homeowners with qualified engineers across the country, ensuring quality construction, innovative designs, and hassle-free hiring. Our platform is built with simplicity and trust at its core.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're building a new home or renovating, we are here to help you find the perfect expert for the job. Thank you for trusting us.
        </p>
      </div>
    </div>
  );
}

export default AboutInfro;
