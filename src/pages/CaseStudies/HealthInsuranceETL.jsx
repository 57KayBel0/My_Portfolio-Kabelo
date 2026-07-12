import caseStudies from "../../data/caseStudies";

import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../../components/case-study/CaseStudyOverview";
import CaseStudyArchitecture from "../../components/case-study/CaseStudyArchitecture";
import CaseStudyResults from "../../components/case-study/CaseStudyResults";
import CaseStudyGallery from "../../components/case-study/CaseStudyGallery";
import CaseStudyLessons from "../../components/case-study/CaseStudyLessons";
import CaseStudySidebar from "../../components/case-study/CaseStudySidebar";

export default function HealthInsuranceETL() {
  const caseStudy = caseStudies.find(
    (study) => study.slug === "health-insurance-etl"
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Case study not found.
      </div>
    );
  }

  return (
    <main className="relative bg-slate-950 text-white min-h-screen">

      {/* ==========================
          Sticky Sidebar Navigation
      ========================== */}

      <CaseStudySidebar />

      {/* ==========================
          Hero
      ========================== */}

      <CaseStudyHero
        caseStudy={caseStudy}
      />

      {/* ==========================
          Overview
      ========================== */}

      <CaseStudyOverview
        caseStudy={caseStudy}
      />

      {/* ==========================
          Architecture
      ========================== */}

      <CaseStudyArchitecture
        caseStudy={caseStudy}
      />

      {/* ==========================
          Results
      ========================== */}

      <CaseStudyResults
        caseStudy={caseStudy}
      />

      {/* ==========================
          Gallery
      ========================== */}

      <CaseStudyGallery
        caseStudy={caseStudy}
      />

      {/* ==========================
          Lessons Learned
      ========================== */}

      <CaseStudyLessons
        caseStudy={caseStudy}
      />

    </main>
  );
}