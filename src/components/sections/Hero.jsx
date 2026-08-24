import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDownload,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

import profile from "../../data/profile";
import Button from "../ui/Button";

import profileImage from "../../assets/images/secondary photo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        overflow-hidden
        px-2
        sm:px-4
        lg:px-0
        pt-20
        lg:pt-0
      "
    >
      <div className="container mx-auto w-full">

        <div className="w-full flex justify-center items-center">

          {/* =========================================
              MAIN HERO GRID
              Keeps the desktop side-by-side layout
              on mobile as well.
          ========================================= */}

          <div
            className="
              w-full
              max-w-7xl
              grid
              grid-cols-[56%_44%]
              sm:grid-cols-[55%_45%]
              lg:grid-cols-2
              gap-2
              sm:gap-6
              lg:gap-16
              items-center
            "
          >

            {/* =========================================
                LEFT SIDE
            ========================================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
                w-full
                min-w-0
                text-left
              "
            >

              {/* Greeting */}

              <p
                className="
                  text-cyan-400
                  text-sm
                  sm:text-lg
                  lg:text-xl
                  font-medium
                  tracking-wide
                  mb-2
                  sm:mb-4
                "
              >
                👋 Hello, I'm
              </p>

              {/* Name */}

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-7xl
                  font-bold
                  leading-[1.05]
                  sm:leading-tight
                  mb-3
                  sm:mb-5
                  break-words
                "
              >
                {profile.name}
              </h1>

              {/* Animated Job Title */}

              <div className="w-full min-h-[34px] sm:min-h-[42px] lg:min-h-[55px]">

                <TypeAnimation
                  sequence={[
                    "Data Scientist",
                    2000,
                    "Machine Learning Engineer",
                    2000,
                    "Data Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "AI Developer",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="
                    block
                    text-sm
                    sm:text-xl
                    md:text-2xl
                    lg:text-4xl
                    font-semibold
                    text-cyan-400
                    mb-4
                    sm:mb-6
                    lg:mb-8
                    break-words
                  "
                />

              </div>

              {/* Availability */}

              <div
                className="
                  inline-flex
                  max-w-full
                  items-center
                  gap-1.5
                  sm:gap-2
                  bg-green-500/10
                  border
                  border-green-500/30
                  text-green-400
                  px-2.5
                  sm:px-4
                  py-1.5
                  sm:py-2
                  rounded-full
                  mb-4
                  sm:mb-6
                  lg:mb-8
                  text-[10px]
                  sm:text-sm
                  lg:text-base
                  whitespace-nowrap
                "
              >

                <span
                  className="
                    flex-shrink-0
                    w-1.5
                    h-1.5
                    sm:w-2
                    sm:h-2
                    rounded-full
                    bg-green-400
                    animate-pulse
                  "
                />

                Available for opportunities

              </div>

              {/* Tagline */}

              <p
                className="
                  text-slate-400
                  text-xs
                  sm:text-base
                  lg:text-lg
                  leading-5
                  sm:leading-7
                  lg:leading-8
                  max-w-xl
                "
              >
                {profile.tagline}
              </p>

              {/* Stats */}

              <p
                className="
                  text-slate-300
                  text-[9px]
                  sm:text-sm
                  lg:text-base
                  mt-3
                  sm:mt-4
                  leading-5
                  sm:leading-7
                "
              >
                15+ Projects
                <span className="mx-1 sm:mx-2 text-cyan-400">
                  •
                </span>

                5+ Certifications
                <span className="mx-1 sm:mx-2 text-cyan-400">
                  •
                </span>

                AI & Data Engineering
              </p>

              {/* Buttons */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  gap-2
                  sm:gap-4
                  mt-5
                  sm:mt-7
                  lg:mt-10
                "
              >

                <Button href="#projects">
                  View Projects
                </Button>

                <a
                  href="/resume/Kabelo_Makgae_Resume.pdf"
                  download="Kabelo_Makgae_Resume.pdf"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    sm:gap-2
                    px-3
                    sm:px-5
                    lg:px-6
                    py-2
                    sm:py-2.5
                    lg:py-3
                    rounded-xl
                    bg-slate-800
                    hover:bg-slate-700
                    text-white
                    text-xs
                    sm:text-sm
                    lg:text-base
                    font-semibold
                    transition
                    whitespace-nowrap
                  "
                >
                  <FaDownload />
                  Download Resume
                </a>

              </div>

              {/* Social Links */}

              <div
                className="
                  flex
                  gap-5
                  sm:gap-7
                  lg:gap-8
                  mt-7
                  sm:mt-9
                  lg:mt-12
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                "
              >

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-cyan-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-cyan-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="hover:text-cyan-400 transition"
                >
                  <FaEnvelope />
                </a>

              </div>

            </motion.div>

            {/* =========================================
                RIGHT SIDE
            ========================================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="
                w-full
                flex
                justify-center
                items-center
                lg:-mt-15
              "
            >

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
              >

                {/* =====================================
                    FLOATING TECHNOLOGY ICONS
                ===================================== */}

                {/* Python */}

                <FaPython
                  className="
                    absolute
                    -top-4
                    left-1
                    sm:-top-6
                    sm:left-4
                    lg:-top-8
                    lg:left-8
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-yellow-400
                    animate-bounce
                    z-10
                  "
                />

                {/* React */}

                <FaReact
                  className="
                    absolute
                    top-3
                    -right-2
                    sm:top-5
                    sm:-right-5
                    lg:top-8
                    lg:-right-8
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-cyan-400
                    animate-spin
                    z-10
                  "
                  style={{
                    animationDuration: "10s",
                  }}
                />

                {/* Docker */}

                <FaDocker
                  className="
                    absolute
                    bottom-6
                    -left-3
                    sm:bottom-8
                    sm:-left-5
                    lg:bottom-10
                    lg:-left-8
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-blue-500
                    animate-bounce
                    z-10
                  "
                />

                {/* AWS */}

                <FaAws
                  className="
                    absolute
                    -bottom-5
                    right-1
                    sm:-bottom-6
                    sm:right-4
                    lg:-bottom-8
                    lg:right-8
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-orange-400
                    animate-pulse
                    z-10
                  "
                />

                {/* Git */}

                <FaGitAlt
                  className="
                    absolute
                    top-1/2
                    -left-4
                    sm:-left-7
                    lg:-left-10
                    -translate-y-1/2
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-red-500
                    animate-pulse
                    z-10
                  "
                />

                {/* PostgreSQL */}

                <SiPostgresql
                  className="
                    absolute
                    top-1/2
                    -right-4
                    sm:-right-7
                    lg:-right-10
                    -translate-y-1/2
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl
                    text-blue-500
                    animate-bounce
                    z-10
                  "
                />

                {/* =====================================
                    PROFILE IMAGE
                ===================================== */}

                <div
                  className="
                    w-36
                    h-36
                    sm:w-48
                    sm:h-48
                    md:w-64
                    md:h-64
                    lg:w-[430px]
                    lg:h-[430px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-600
                    to-cyan-500
                    p-1
                    sm:p-1.5
                    lg:p-2
                    shadow-[0_0_40px_rgba(6,182,212,.40)]
                    lg:shadow-[0_0_60px_rgba(6,182,212,.45)]
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                >

                  <div
                    className="
                      w-full
                      h-full
                      rounded-full
                      overflow-hidden
                      bg-slate-900
                    "
                  >

                    <img
                      src={profileImage}
                      alt={profile.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}