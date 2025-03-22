export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {/* Company Name & Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">HiringEngineers</h2>
            <p className="mt-2 text-gray-300 max-w-xs">
              Get the best engineers for your company. Quality work, guaranteed.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Social Media (Placeholder) */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">🔵 Facebook</a>
              <a href="#" className="hover:text-gray-400">🟢 LinkedIn</a>
              <a href="#" className="hover:text-gray-400">🔴 YouTube</a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} HiringEngineers. All Rights Reserved.
        </div>
      </footer>
    );
  }
  