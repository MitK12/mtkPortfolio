import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import Services from "./Services";

const Home = () => {
  // Typewriter effect for intro
  const [typedText, setTypedText] = useState("");
  const fullText =
    "I build full-stack web applications using  MongoDB,Express.js,React, and Node.js . Passionate about creating scalable,user-friendly solutions that solve real-world problems. Let's turn ideas into code!";
  //"A passionate web developer focused on creating beautiful, functional, and responsive websites.";

  useEffect(() => {
    let i = 0; // Initialize index
    const type = () => {
      // Typing function
      setTypedText(fullText.slice(0, ++i)); // Update typed text

      if (i < fullText.length) setTimeout(type, 30); // Adjust typing speed here
    };
    type(); // Start the typing effect
    return () => setTypedText(" "); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            👋 Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Mitiku Kassaw
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">{typedText}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View My Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            My Tech Stack
          </h3>
          <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
            Proficient in the MERN stack and related technologies for building
            robust applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* MongoDB */}
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <svg
                className="h-26 w-26 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <SiMongodb />
              </svg>
              <h4 className="text-xl font-semibold">MongoDB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                NoSQL Database
              </p>
            </div>

            {/* Express.js */}
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <svg
                className="h-26 w-26 text-gray-800 dark:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <SiExpress />
              </svg>
              <h4 className="text-xl font-semibold">Express.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Backend Framework
              </p>
            </div>

            {/* React */}
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <svg
                className="h-26 w-26 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <FaReact />
              </svg>
              <h4 className="text-xl font-semibold">React</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frontend Library
              </p>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <svg
                className="h-16 w-16 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <FaNodeJs />
              </svg>
              <h4 className="text-xl font-semibold">Node.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Runtime Environment
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Other Sections */}
      <About />
      {/* <Projects /> */}
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
