import Card from "./Card";

export default function SkillCard({
  title,
  skills,
}) {
  return (
    <Card>
      <h3 className="text-2xl font-bold mb-8 text-cyan-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              bg-slate-700
              border
              border-slate-600
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:border-cyan-400
              hover:text-white
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}