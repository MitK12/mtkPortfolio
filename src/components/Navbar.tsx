import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import profileLogo from "../assets/mtkprofile.png";
import CVfile from "../assets/mitiku-kassaw-CV.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-gray-700 text-green-400"
        : "hover:bg-gray-700 hover:text-green-400"
    }`;

  const Icon = ({ mode }: { mode: boolean }) =>
    mode ? (
      <svg
        className="w-6 h-6 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ) : (
      <svg
        className="w-6 h-6 text-blue-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    );

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={profileLogo}
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-green-500"
          />
          <div>
            <NavLink to="/" className="text-lg font-bold hover:text-green-400">
              Mitiku Kassaw
            </NavLink>
            <p className="text-sm text-green-500">Full-Stack Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <NavLink key={i} to={path} className={linkClass}>
              {["Home", "About", "Projects", "Contact"][i]}
            </NavLink>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded hover:bg-gray-700"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <Icon mode={dark} />
          </button>

          <a
            href={CVfile}
            download="MitikuKassaw_CV.pdf"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-md shadow transition flex items-center justify-center"
          >
            <FaDownload className="text-white text-lg" />
            <span className="text-2xl px-4">CV</span>
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 hover:bg-gray-700 rounded"
          aria-label="Toggle menu"
          title="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-900 px-3 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-x-auto">
            {["/", "/about", "/projects", "/contact"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {["Home", "About", "Projects", "Contact"][i]}
              </NavLink>
            ))}
          </div>

          {/* Right-side icons: Dark mode + Download */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded hover:bg-gray-700"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              <Icon mode={dark} />
            </button>
            <a
              href={CVfile}
              download="MitikuKassaw_CV.pdf"
              className="bg-green-600 hover:bg-green-700 p-2 rounded-md shadow transition flex items-center justify-center"
            >
              <FaDownload className="text-white text-lg" />
              <span className="text-2xl px-4">CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
