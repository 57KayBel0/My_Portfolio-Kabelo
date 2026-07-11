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
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

import profile from "../../data/profile";
import Button from "../ui/Button";

import profileImage from "../../assets/images/profile.jpg.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-xl font-medium mb-4">
              Hello, I'm 👋
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {profile.name}
            </h1>

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
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-400 mb-8"
            />

            <p className="text-slate-400 text-lg leading-8 max-w-xl">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button href="#projects">
                View Projects
              </Button>

              <Button
                href={profile.resume}
                primary={false}
              >
                Download Resume
              </Button>

            </div>

            <div className="flex gap-8 mt-12 text-3xl">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Floating Tech Icons */}

              <FaPython
                className="absolute -top-8 left-8 text-5xl text-yellow-400 animate-bounce"
              />

              <FaReact
                className="absolute top-8 -right-8 text-5xl text-cyan-400 animate-spin"
                style={{ animationDuration: "10s" }}
              />

              <FaDocker
                className="absolute bottom-10 -left-8 text-5xl text-blue-500 animate-bounce"
              />

              <FaAws
                className="absolute -bottom-8 right-8 text-5xl text-orange-400 animate-pulse"
              />

              <FaGitAlt
                className="absolute top-1/2 -left-10 text-5xl text-red-500 animate-pulse"
              />

              <SiPostgresql
                className="absolute top-1/2 -right-10 text-5xl text-blue-500 animate-bounce"
              />

              {/* Profile */}

              <div
                className="
                  w-80
                  h-80
                  lg:w-[430px]
                  lg:h-[430px]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-600
                  to-cyan-500
                  p-2
                  shadow-[0_0_60px_rgba(6,182,212,.45)]
                "
              >

                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">

                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}