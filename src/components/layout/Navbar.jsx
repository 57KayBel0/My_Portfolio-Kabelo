import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [mobileMenu]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-cyan-400 cursor-pointer"
        >
          Kabelo<span className="text-white">.</span>
        </motion.a>

        {/* Desktop Navigation */}

        <ul className="hidden xl:flex items-center gap-6">

          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-cyan-400"
                className="group relative cursor-pointer text-slate-300 hover:text-cyan-400 transition"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="hidden xl:flex items-center gap-4">

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-cyan-400" />
            )}
          </button>

      <a
        href="/resume/Kabelo_Makgae_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

        </div>

        {/* Mobile Button */}

        <button
          className="xl:hidden text-2xl text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            ref={menuRef}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-slate-900 border-t border-slate-700"
          >

            <ul className="flex flex-col">

              {navLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() =>
                      setMobileMenu(false)
                    }
                    className="block px-6 py-5 hover:bg-slate-800 hover:text-cyan-400 transition cursor-pointer"
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

              <li className="flex justify-center gap-4 p-6">

                <button
                  onClick={toggleTheme}
                  className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
                >
                  {theme === "dark" ? (
                    <FaSun className="text-yellow-400" />
                  ) : (
                    <FaMoon className="text-cyan-400" />
                  )}
                </button>

              <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume/Kabelo_Makgae_Resume.pdf";
                    link.download = "Kabelo_Makgae_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-600
                    text-white
                    font-semibold
                    transition
                  "
                >
                  <FaDownload />
                  Download Resume
                </button>
              </li>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}