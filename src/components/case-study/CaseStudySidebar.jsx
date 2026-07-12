import { Link } from "react-scroll";

const sections = [
  {
    title: "Overview",
    to: "overview",
  },
  {
    title: "Architecture",
    to: "architecture",
  },
  {
    title: "Results",
    to: "results",
  },
  {
    title: "Gallery",
    to: "gallery",
  },
  {
    title: "Lessons",
    to: "lessons",
  },
];

export default function CaseStudySidebar() {
  return (
    <aside
      className="
        hidden
        xl:block

        fixed
        top-32
        right-10

        w-64
      "
    >
      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          shadow-xl
        "
      >
        <h3 className="font-bold text-xl mb-6">
          On this page
        </h3>

        <div className="flex flex-col gap-4">

          {sections.map((section) => (

            <Link
              key={section.to}
              to={section.to}
              smooth
              duration={500}
              offset={-100}
              spy
              activeClass="text-cyan-400"
              className="
                cursor-pointer
                text-slate-400
                hover:text-cyan-400
                transition
              "
            >
              {section.title}
            </Link>

          ))}

        </div>

      </div>
    </aside>
  );
}