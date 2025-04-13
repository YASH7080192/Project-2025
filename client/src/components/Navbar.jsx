import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">HiringEngineers</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
          <li><Link to="/signin" className="text-white hover:text-gray-200">Login</Link></li>
          <li><Link to="/signup" className="text-white hover:text-gray-200">Register</Link></li>
          <li><Link to="/engineer-job-form" className="text-white hover:text-gray-200">Engineers</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 mt-2 p-4 space-y-2">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
          <li><Link to="/signin" className="text-white hover:text-gray-200">Login</Link></li>
          <li><Link to="/signup" className="text-white hover:text-gray-200">Register</Link></li>
          <li><Link to="/engineer-job-form" className="text-white hover:text-gray-200">Engineers</Link></li>
        </ul>
      )}
    </nav>
  );
}
