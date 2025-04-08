import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import EngineerJobForm from "./pages/EngineerJobForm";

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
        <Route path="/engineer-job-form" element={<EngineerJobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
