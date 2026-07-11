import Card from "./Card";
import Badge from "./Badge";

export default function EducationCard({ education }) {
  return (
    <Card>
      <div className="flex justify-between items-start flex-wrap">

        <div>

          <h3 className="text-2xl font-bold">
            {education.qualification}
          </h3>

          <p className="text-cyan-400 mt-2">
            {education.institution}
          </p>

        </div>

        <Badge>
          {education.status}
        </Badge>

      </div>

      <div className="mt-6 text-slate-400">

        <p>
          <strong>Period:</strong> {education.period}
        </p>

        <p>
          <strong>Location:</strong> {education.location}
        </p>

      </div>

    </Card>
  );
}