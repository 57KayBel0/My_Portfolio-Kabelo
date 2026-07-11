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
          subtitle="Academic background and continuous learning."
        />

        <div className="space-y-8">

          {education.map((item) => (

            <EducationCard
              key={item.id}
              education={item}
            />

          ))}

        </div>

      </div>
    </section>
  );
}