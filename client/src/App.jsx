import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import EngineerAuth from "./pages/EngineerJobForm";
import UserDashboard from "./pages/userDashboard";
import HiredEngineers from "./pages/hiredEngineer";
import EngineerDashboard from "./pages/enginneerDashboard";

// Inside Routes


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/engineer-job-form" element={<EngineerAuth />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/hired-engineers" element={<HiredEngineers />} />
        <Route path="/engineer-dashboard" element={<EngineerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
