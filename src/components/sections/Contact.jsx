import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always open to discussing new opportunities, collaborations, freelance work, or exciting data-driven projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}

            <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

              <h2 className="text-3xl font-bold mb-4">
                Get In Touch
              </h2>

              <p className="text-slate-400 leading-8 mb-8">
                Whether you have a job opportunity, project idea,
                collaboration, or simply want to connect, feel free
                to reach out. I'd love to hear from you.
              </p>

              {/* Email */}

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:makgaekabelomotshabi.kb@gmail.com"
                    className="hover:text-cyan-400 transition"
                  >
                    makgaekabelomotshabi.kb@gmail.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaPhone className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Phone
                  </p>

                  <a
                    href="tel:+27664384076"
                    className="hover:text-cyan-400 transition"
                  >
                    +27 66 438 4076
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Location
                  </p>

                  <p>Pretoria, South Africa</p>

                </div>

              </div>

              {/* LinkedIn */}

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaLinkedin className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/kabelo-makgae-37122b270"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    linkedin.com/in/kabelo-makgae-37122b270
                  </a>

                </div>

              </div>

              {/* GitHub */}

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaGithub className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/57KayBel0"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    github.com/57KayBel0
                  </a>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

              <div className="mb-8">

                <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">

                  ● Available for Full-Time Opportunities

                </span>

              </div>

              <h3 className="text-3xl font-bold mb-4">
                Let's Build Something Amazing
              </h3>

              <p className="text-slate-400 leading-8 mb-8">

                I'm actively seeking opportunities in

                <span className="text-cyan-400">
                  {" "}Data Science
                </span>,

                <span className="text-cyan-400">
                  {" "}Machine Learning
                </span>,

                <span className="text-cyan-400">
                  {" "}Data Engineering
                </span>, and

                <span className="text-cyan-400">
                  {" "}Full Stack Development
                </span>.

              </p>

              <div className="flex flex-col gap-5">

                <a
                  href="/resume/Kabelo_Makgae_Resume.pdf"
                  download="Kabelo_Makgae_Resume.pdf"
                  className="flex justify-center items-center gap-3 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
                >
                  <FaDownload />

                  Download Resume

                </a>

                <a
                  href="mailto:makgaekabelomotshabi.kb@gmail.com"
                  className="flex justify-center items-center gap-3 border border-cyan-500 hover:bg-cyan-500 transition py-4 rounded-xl"
                >
                  <FaEnvelope />

                  Send Email

                </a>

                <a
                  href="https://wa.me/27664384076"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-3 bg-green-600 hover:bg-green-700 py-4 rounded-xl transition"
                >
                  <FaWhatsapp />

                  Chat on WhatsApp

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}