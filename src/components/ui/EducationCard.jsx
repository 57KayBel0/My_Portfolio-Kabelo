import Card from "./Card";
import Badge from "./Badge";

export default function EducationCard({ education }) {
  return (
    <Card>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

        <div className="flex-1">

          <h3 className="text-2xl font-bold mb-2">
            {education.qualification}
          </h3>

          <p className="text-cyan-400 text-lg mb-6">
            {education.institution}
          </p>

          <p className="text-white leading-7">
            {education.description}
          </p>

        </div>

        <Badge>
          {education.status}
        </Badge>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div>
          <h4 className="text-cyan-400 font-semibold mb-2">
            Period
          </h4>

          <p className="text-white">
            {education.period}
          </p>
        </div>

        <div>
          <h4 className="text-cyan-400 font-semibold mb-2">
            Location
          </h4>

          <p className="text-slate-400">
            {education.location}
          </p>
        </div>

      </div>

    </Card>
  );
}