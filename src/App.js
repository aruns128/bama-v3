import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ConditionsWeTreat from "./components/ConditionsWeTreat";
import WhyUs from "./components/WhyUs";
import Blog from "./components/Blog";
import LocateUs from "./components/Locations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { FaInstagram, FaStethoscope, FaFacebook } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why_us" element={<WhyUs />} />
            <Route path="/condition_we_treat" element={<ConditionsWeTreat />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/locations" element={<LocateUs />} />

            {/* ID-based routing */}
            <Route path="/blogs/:id" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-500 text-white text-center py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center px-4">
            {/* Footer Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4 space-y-2 lg:space-y-0 mb-4 lg:mb-0 items-center font-semibold">
              <NavLink to="/" className="text-xs py-2 px-4">
                Home
              </NavLink>
              <NavLink to="/why_us" className="text-xs py-2 px-4">
                Why us
              </NavLink>
              <NavLink to="/condition_we_treat" className="text-xs py-2 px-4">
                Condition we treat
              </NavLink>
              <NavLink to="/about" className="text-xs py-2 px-4">
                About
              </NavLink>
              <NavLink to="/blogs" className="text-xs py-2 px-4">
                Blogs
              </NavLink>
              <NavLink to="/locations" className="text-xs py-2 px-4">
                Locations
              </NavLink>
            </div>

            {/* Copyright Information */}
            <p className="text-xs mb-4 lg:mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.drbamaspinecare.com/"
                className="text-white text-decoration-none"
              >
                drbamaspinecare.com
              </a>{" "}
              All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-4">
              <p className="text-xs">Follow Us</p>
              <a
                href="https://www.facebook.com/100087110217227/videos/healthy-spine-healthy-life/844309806698757/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0866FF] hover:text-blue-500 mx-2"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.practo.com/ernakulam/clinic/dr-bama-spine-care-ponnurunni/services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28328c] hover:text-[#3f4bba] mx-2"
              >
                <FaStethoscope className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/dr.bama_spine_care/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-900 hover:text-pink-400 mx-2"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
