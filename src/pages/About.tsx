import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
  FaGit,
  FaClock,
  FaUsers,
  FaComment,
  FaLightbulb,
  FaBookOpen,
  FaSearch,
  FaPaintBrush,
  FaBootstrap,
  FaBrain,
  FaBriefcase,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

import profile from "../assets/profile.png";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Learn more about my journey as a MERN Stack Developer.
          </p>
        </section>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Profile Image Placeholder */}
            <div className="shrink-0">
              <img
                src={profile}
                alt="coding Profile image"
                className="w-55 h-55 rounded-full object-cover shadow-lg"
              />
              <div className="flex items-center">
                <span
                  className="mr-4 ml-6 text-blue-600 text-4xl group"
                  aria-label="Freelance available"
                >
                  <FaBriefcase className="group-hover:scale-110 transition-transform duration-200" />
                </span>
                <div>
                  <p className=" text-green-600">Freelance</p>
                  <p className="text-gray-600">Available</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Hello, I'm Mitiku Kassaw
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                I'm a passionate MERN Stack Developer with 2+ years of
                experience building dynamic web applications. My expertise lies
                in creating scalable, efficient solutions using MongoDB for data
                management, Express.js and Node.js for robust backends, and
                React for intuitive user interfaces.
              </p>
              <p className="text-lg leading-relaxed">
                I love tackling complex problems, collaborating on innovative
                projects, and staying up-to-date with the latest technologies.
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source, or enjoying outdoor adventures.
              </p>
            </div>
          </div>
        </section>

        {/* Experience/Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Experience & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Professional Experience
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="text-blue-600">
                    Full-Stack Developer
                  </strong>{" "}
                  at Warka Technologies (2025–Present) – Developed MERN-based
                  apps, optimized performance, and led team collaborations.
                </li>
                <li>
                  <strong className="text-blue-600">Junior Developer</strong> at
                  Startup Digital Creations (2024–2025) – Built RESTful APIs
                  with Node.js and integrated React frontends.
                </li>
                <li>
                  <strong className="text-blue-600">Freelance Projects</strong>{" "}
                  – Created custom web solutions for clients, focusing on
                  MongoDB data modeling and Express.js routing.
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <FaHtml5 className="h-15 w-15 text-orange-600 mt-1" />
                <FaCss3Alt className="h-15 w-15 text-blue-600 mt-1" />
                <SiTailwindcss className="h-15 w-15 text-teal-400 mt-1" />
                <FaBootstrap className="h-15 w-15 text-purple-400 mt-1" />
                <FaJsSquare className="h-15 w-15 text-yellow-500 mt-1" />
                <FaReact className="h-15 w-15 text-blue-400 mt-1" />
                <FaNode className="h-15 w-15 text-green-600 mt-1" />
                <SiExpress className="h-15 w-15 text-blue-800 mt-1" />
                <FaDatabase className="h-15 w-15 text-green-800 mt-1" />
                <FaGit className="h-15 w-15 text-red-600 mt-1" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <FaComment className="h-15 w-15 text-orange-600 mt-1" />
                <FaClock className="h-15 w-15 text-blue-600 mt-1" />
                <FaSearch className="h-15 w-15 text-teal-400 mt-1" />
                <FaUsers className="h-15 w-15 text-yellow-500 mt-1" />
                <FaBookOpen className="h-15 w-15 text-blue-400 mt-1" />
                <FaLightbulb className="h-15 w-15 text-green-600 mt-1" />
                <FaPaintBrush className="h-15 w-15 text-orange-600 mt-1" />
                <FaBrain className="h-15 w-15 text-blue-600 mt-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Interests & Hobbies
          </h2>
          <div className="text-center">
            <p className="text-lg leading-relaxed mb-6">
              Beyond coding, I'm an avid learner who enjoys in hiking, reading
              tech blogs, playing kirar. I believe in work-life balance and
              often draw inspiration from nature and community events.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Let's Connect
              </a>
              <a
                href="/projects"
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                See My Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
