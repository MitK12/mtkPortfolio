import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mitiku</h3>
            <p className="text-gray-400 mb-4">
              MERN Stack Developer passionate about building innovative web
              solutions.
            </p>
            <p className="text-sm font-bold text-gray-500">
              © {new Date().getFullYear()} Mitiku Kassaw. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              <NavLink
                to="https://github.com/MitK12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="h-14 w-14 text-[#d8eb08] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaGithub />
                </svg>
              </NavLink>
              <NavLink
                to="https://linkedin.com/in/mitiku-kassaw-21m16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-14 w-14 text-[#0076B5]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaLinkedin />
                </svg>
              </NavLink>
              <NavLink
                to="https://twitter.com/mitiku_kas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-14 w-14 text-[#1DA1F2] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaTwitter />
                </svg>
              </NavLink>
              <NavLink
                to="https://facebook.com/Mitiku.Ethiopic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-14 w-14 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaFacebook />
                </svg>
              </NavLink>
              <NavLink
                to="https://t.me/MKETHIO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg
                  className="h-14 w-14 text-[#1697d7]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaTelegram />
                </svg>
              </NavLink>
              <NavLink
                to="mailto:kassawmitiku@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg
                  className="h-14 w-14 text-[#D44638]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaEnvelope />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            aria-label="Back to Top"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
