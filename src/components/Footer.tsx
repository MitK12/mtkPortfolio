import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

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
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MitK12"
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
              </a>
              <a
                href="https://linkedin.com/in/mitiku-kassaw-21m16"
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
              </a>
              <a
                href="https://twitter.com/mitiku_kas"
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
              </a>
              <a
                href="https://facebook.com/Mitiku.Ethiopic"
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
              </a>
              <a
                href="https://t.me/MKETHIO"
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
              </a>
              <a
                href="mailto:kassawmitiku@gmail.com"
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
              </a>
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
