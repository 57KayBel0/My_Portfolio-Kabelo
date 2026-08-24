import caseStudies from "../../data/caseStudies";

import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../../components/case-study/CaseStudyOverview";
import CaseStudyArchitecture from "../../components/case-study/CaseStudyArchitecture";
import CaseStudyResults from "../../components/case-study/CaseStudyResults";
import CaseStudyGallery from "../../components/case-study/CaseStudyGallery";
import CaseStudyLessons from "../../components/case-study/CaseStudyLessons";
import CaseStudyNavigation from "../../components/case-study/CaseStudyNavigation";

export default function FreightRatePrediction() {
  const caseStudy = caseStudies.find(
    (study) => study.slug === "freight-rate-prediction"
  );

  if (!caseStudy) {
    return <div>Case study not found.</div>;
  }

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseStudyOverview caseStudy={caseStudy} />

      <CaseStudyArchitecture caseStudy={caseStudy} />

      <CaseStudyResults caseStudy={caseStudy} />

      <CaseStudyGallery caseStudy={caseStudy} />

      <CaseStudyLessons caseStudy={caseStudy} />

      <CaseStudyNavigation currentSlug={caseStudy.slug} />
    </main>
  );
}