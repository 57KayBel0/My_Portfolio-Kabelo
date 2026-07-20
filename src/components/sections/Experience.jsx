import { motion } from "framer-motion";

import experience from "../../data/experience";

import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-6">

        {/* Section Title */}

        <SectionTitle
          title="Professional Experience"
          subtitle="My journey in software engineering, data science, machine learning, and data engineering through internships and real-world projects."
        />

        {/* Experience Timeline */}

        <div className="relative mt-20">

          {/* Vertical Timeline Line */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-6
              top-0
              bottom-0
              w-1
              bg-gradient-to-b
              from-cyan-500
              via-cyan-400/40
              to-transparent
              rounded-full
            "
          />

          <div className="space-y-10">

            {experience.map((job, index) => (

              <motion.div
                key={job.id}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="relative lg:pl-20"
              >

                {/* Timeline Dot */}

                <div
                  className="
                    hidden
                    lg:flex
                    absolute
                    left-0
                    top-10
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-500
                    border-4
                    border-slate-950
                    shadow-[0_0_25px_rgba(6,182,212,0.6)]
                    items-center
                    justify-center
                  "
                >
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                <ExperienceCard
                  experience={job}
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}