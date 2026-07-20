import caseStudies from "../../data/caseStudies";

import CaseStudySidebar from "../../components/case-study/CaseStudySidebar";
import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import CaseStudyMetrics from "../../components/case-study/CaseStudyMetrics";
import CaseStudyOverview from "../../components/case-study/CaseStudyOverview";
import CaseStudyArchitecture from "../../components/case-study/CaseStudyArchitecture";
import CaseStudyResults from "../../components/case-study/CaseStudyResults";
import CaseStudyGallery from "../../components/case-study/CaseStudyGallery";
import CaseStudyLessons from "../../components/case-study/CaseStudyLessons";
import CaseStudyNavigation from "../../components/case-study/CaseStudyNavigation";
import SEO from "../../components/common/SEO";
import { Link } from "react-router-dom";

export default function HealthInsuranceETL() {
  const caseStudy = caseStudies.find(
    (study) => study.slug === "health-insurance-etl"
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Case Study Not Found
          </h1>

          <p className="text-slate-400">
            The requested case study could not be found.
            <Link
              to="/"
              className="
                inline-block
                mt-8
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                font-semibold
                transition
              "
            >
              Back to Portfolio
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative bg-slate-950 text-white min-h-screen">

      {/* ======================================
          Sticky Sidebar Navigation
      ====================================== */}

      <CaseStudySidebar />
      <SEO
          title="Health Insurance ETL Pipeline | Kabelo Makgae"
          description="End-to-end ETL pipeline built using Python, PostgreSQL, Docker, dbt and AWS."
      />

      {/* ======================================
          Hero
      ====================================== */}

      <CaseStudyHero
        caseStudy={caseStudy}
      />

      {/* ======================================
          Project Metrics
      ====================================== */}

      <CaseStudyMetrics
        caseStudy={caseStudy}
      />

      {/* ======================================
          Overview
      ====================================== */}

      <CaseStudyOverview
        caseStudy={caseStudy}
      />

      {/* ======================================
          Architecture
      ====================================== */}

      <CaseStudyArchitecture
        caseStudy={caseStudy}
      />

      {/* ======================================
          Results
      ====================================== */}

      <CaseStudyResults
        caseStudy={caseStudy}
      />

      {/* ======================================
          Gallery
      ====================================== */}

      <CaseStudyGallery
        caseStudy={caseStudy}
      />

      {/* ======================================
          Lessons Learned
      ====================================== */}

      <CaseStudyLessons
        caseStudy={caseStudy}
      />

      <CaseStudyNavigation
        currentSlug={caseStudy.slug}
      />

    </main>

    

  );
}