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

    return () => window.removeEventListener("scroll", handleScroll);
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
          ? "bg-slate-900/80 backdrop-blur-xl shadow-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-cyan-400 cursor-pointer"
        >
          Kabelo<span className="text-white">.</span>
        </motion.a>

        {/* Desktop */}

        <ul className="hidden xl:flex items-center gap-7">

          {navLinks.map((item) => (

            <li key={item.name}>

              <Link
                to={item.to}
                spy
                smooth
                duration={500}
                offset={-80}
                activeClass="text-cyan-400"
                className="
                  relative
                  cursor-pointer
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-0.5
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </Link>

            </li>

          ))}

        </ul>

        {/* Desktop Right */}

        <div className="hidden xl:flex items-center gap-4">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              w-11
              h-11
              rounded-full
              bg-slate-800
              hover:bg-slate-700
              flex
              items-center
              justify-center
              transition
            "
          >
            {theme === "dark"
              ? <FaSun className="text-yellow-400" />
              : <FaMoon className="text-cyan-400" />}
          </button>

          <a
            href="/resume/Kabelo_Makgae_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              py-2.5
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              font-semibold
              transition
            "
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          aria-label="Open menu"
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
            xl:hidden
            w-11
            h-11
            rounded-xl
            bg-slate-800
            flex
            items-center
            justify-center
            text-xl
          "
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              xl:hidden
              bg-slate-900
              border-t
              border-slate-800
              shadow-2xl
            "
          >

            <ul className="py-2">

              {navLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileMenu(false)}
                    className="
                      block
                      px-8
                      py-4
                      text-lg
                      hover:bg-slate-800
                      hover:text-cyan-400
                      transition
                      cursor-pointer
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

            <div className="px-8 pb-8 pt-3 space-y-4">

              <button
                onClick={toggleTheme}
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-3
                  py-3
                  rounded-xl
                  bg-slate-800
                  hover:bg-slate-700
                  transition
                "
              >
                {theme === "dark" ? (
                  <>
                    <FaSun />
                    Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon />
                    Dark Mode
                  </>
                )}
              </button>

              <a
                href="/resume/Kabelo_Makgae_Resume.pdf"
                download
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-3
                  py-3
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-600
                  font-semibold
                  transition
                "
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}