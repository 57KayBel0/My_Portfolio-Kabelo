import { motion } from "framer-motion";

import education from "../../data/education";

import SectionTitle from "../ui/SectionTitle";
import EducationCard from "../ui/EducationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Education"
          subtitle="My academic background and continuous learning journey in software engineering, data science, and artificial intelligence."
        />

        <div className="space-y-8 mt-16">

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              <EducationCard
                education={item}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}