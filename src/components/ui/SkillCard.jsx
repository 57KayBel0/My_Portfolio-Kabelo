import Card from "./Card";

export default function SkillCard({
  title,
  skills,
}) {
  return (
    <Card>

      <h3 className="text-2xl font-bold mb-6 text-cyan-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
              bg-slate-700
              px-4
              py-2
              rounded-full
              text-sm
              hover:bg-cyan-500
              transition
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </Card>
  );
}