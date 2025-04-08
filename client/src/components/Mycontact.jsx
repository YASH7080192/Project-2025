

import React from 'react';

export default function MyContact() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h1>

        <p className="text-gray-700 text-lg mb-4">
          We'd love to hear from you! Whether you're an engineer looking to join our platform, or a homeowner in need of professional services — we're here to help.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          You can reach out to us with any questions, suggestions, or feedback. Our team will get back to you as soon as possible.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          📧 <strong>Email:</strong> support@hiringengineers.com
        </p>

        <p className="text-gray-700 text-lg mb-4">
          📞 <strong>Phone:</strong> +91 98765 43210
        </p>

        <p className="text-gray-700 text-lg mb-4">
          📍 <strong>Address:</strong> Dev Sanskriti Campus, Haridwar, Uttarakhand, India
        </p>

        <p className="text-blue-500 italic text-center mt-8">
          “Together, we build better.”
        </p>
      </div>
    </div>
  );
}
