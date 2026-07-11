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
          subtitle="Professional certifications and technical training."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((certification) => (

            <CertificationCard
              key={certification.id}
              certification={certification}
            />

          ))}

        </div>

      </div>
    </section>
  );
}