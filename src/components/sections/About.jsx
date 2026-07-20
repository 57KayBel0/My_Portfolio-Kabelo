import aboutImage from "../../assets/images/secondary photo.png";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";

import StatsCard from "../ui/StatsCard";



export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
          <div
              className="
                w-80
                lg:w-[420px]
                rounded-3xl
                overflow-hidden
                bg-slate-800
                border
                border-slate-700
                shadow-xl
              "
            >
              <img
                src={aboutImage}
                alt="Kabelo Makgae"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Data Scientist | Machine Learning Engineer | Data Engineer | Full Stack Developer
            </h3>

            <p className="text-slate-300 leading-8 text-lg">
              I'm <strong>Kabelo  Motshabi Makgae</strong>, a passionate Data Scientist,
              Machine Learning Engineer, Data Engineer, and Full Stack Developer
              with experience building scalable software applications, cloud-based
              data pipelines, and intelligent machine learning solutions.

              <br /><br />

              My passion lies in transforming complex datasets into meaningful
              insights while developing production-ready applications that solve
              real-world business problems.

              <br /><br />

              I enjoy working with Python, SQL, AWS, React, PostgreSQL,
              Machine Learning, Data Visualization, ETL Pipelines, and Business
              Intelligence tools to create innovative data-driven solutions.
            </p>

            {/* Expertise */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex items-center gap-3">
                <FaBrain className="text-cyan-400 text-2xl" />
                <span>Machine Learning</span>
              </div>

              <div className="flex items-center gap-3">
                <FaDatabase className="text-cyan-400 text-2xl" />
                <span>Data Engineering</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-cyan-400 text-2xl" />
                <span>Full Stack Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaServer className="text-cyan-400 text-2xl" />
                <span>Cloud Solutions</span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <StatsCard
            number="15+"
            label="Projects Completed"
          />

          <StatsCard
            number="20+"
            label="Technologies"
          />

          <StatsCard
            number="5+"
            label="Certifications"
          />

          <StatsCard
            number="100%"
            label="Commitment"
          />

        </div>

      </div>
    </section>
  );
}