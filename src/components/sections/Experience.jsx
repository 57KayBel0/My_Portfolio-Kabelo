import experience from "../../data/experience";

import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Professional Experience"
          subtitle="A summary of my professional journey and practical experience."
        />

        <div className="space-y-10">

          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              experience={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}