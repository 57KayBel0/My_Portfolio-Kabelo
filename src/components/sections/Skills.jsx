import { motion } from "framer-motion";

import skills from "../../data/skills";

import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I use to build scalable software and intelligent data solutions."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((category) => (

            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
            >

              <SkillCard
                title={category.category}
                skills={category.items}
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}