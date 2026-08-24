import Card from "./Card";
import Badge from "./Badge";

export default function ExperienceCard({ experience }) {
  return (
    <Card>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">

        <div>
          <h3 className="text-2xl font-bold">
            {experience.role}
          </h3>

          <p className="text-cyan-400">
            {experience.company}
          </p>
        </div>

        <div className="text-white mt-2 md:mt-0 text-right">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>

      </div>

      <p className="text-white leading-7 mb-6">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">

        {experience.technologies.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}

      </div>

      <ul className="list-disc list-inside text-white space-y-2">

        {experience.achievements.map((achievement) => (
          <li key={achievement}>
            {achievement}
          </li>
        ))}

      </ul>

    </Card>
  );
}