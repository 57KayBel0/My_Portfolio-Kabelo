import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import caseStudies from "../../data/caseStudies";

export default function CaseStudyNavigation({ currentSlug }) {

  const currentIndex = caseStudies.findIndex(
    (study) => study.slug === currentSlug
  );

  const previous =
    currentIndex > 0
      ? caseStudies[currentIndex - 1]
      : null;

  const next =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <section className="bg-slate-950 py-24 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Previous */}

          <div>

            {previous && (

              <Link
                to={`/preview/${previous.slug}`}
                className="
                  block
                  p-8
                  rounded-3xl
                  border
                  border-slate-800
                  hover:border-cyan-500
                  transition
                "
              >
                <p className="flex items-center gap-2 text-cyan-400 mb-3">

                  <FaArrowLeft />

                  Previous Project

                </p>

                <h3 className="text-2xl font-bold">

                  {previous.title}

                </h3>

              </Link>

            )}

          </div>

          {/* Next */}

          <div>

            {next && (

              <Link
                to={`/preview/${next.slug}`}
                className="
                  block
                  p-8
                  rounded-3xl
                  border
                  border-slate-800
                  hover:border-cyan-500
                  transition
                  text-right
                "
              >
                <p className="flex justify-end items-center gap-2 text-cyan-400 mb-3">

                  Next Project

                  <FaArrowRight />

                </p>

                <h3 className="text-2xl font-bold">

                  {next.title}

                </h3>

              </Link>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}