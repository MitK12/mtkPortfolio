import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Home />
      <About />
      <Projects />
      <Contact />
      */}
    </div>
  );
};

export default App;
