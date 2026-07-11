import caseStudies from "../../data/caseStudies";

import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../../components/case-study/CaseStudyOverview";
import CaseStudyArchitecture from "../../components/case-study/CaseStudyArchitecture";
import CaseStudyResults from "../../components/case-study/CaseStudyResults";
import CaseStudyGallery from "../../components/case-study/CaseStudyGallery";
import CaseStudyLessons from "../../components/case-study/CaseStudyLessons";

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
    <main className="bg-slate-950 text-white">

      <CaseStudyHero
        caseStudy={caseStudy}
      />

      <CaseStudyOverview
        caseStudy={caseStudy}
      />

      <CaseStudyArchitecture
        caseStudy={caseStudy}
      />

      <CaseStudyResults
        caseStudy={caseStudy}
      />

      <CaseStudyGallery
        caseStudy={caseStudy}
      />

      <CaseStudyLessons
        caseStudy={caseStudy}
      />

    </main>
  );
}