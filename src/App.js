import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ConditionsWeTreat from "./components/ConditionsWeTreat";
import WhyUs from "./components/WhyUs";
import Blog from "./components/Blog";
import LocateUs from "./components/LocateUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why_us" element={<WhyUs />} />
        <Route path="/condition_we_treat" element={<ConditionsWeTreat />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/locate" element={<LocateUs />} />
      </Routes>
    </Router>
  );
}

export default App;
