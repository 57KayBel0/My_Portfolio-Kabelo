import { motion } from "framer-motion";

import certifications from "../../data/certifications";

import SectionTitle from "../ui/SectionTitle";
import CertificationCard from "../ui/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and continuous learning in software engineering, data science, artificial intelligence, and cloud technologies."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {certifications.map((certification, index) => (

            <motion.div
              key={certification.id}
              initial={{
                opacity: 0,
                y: 40,
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
              <CertificationCard
                certification={certification}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}