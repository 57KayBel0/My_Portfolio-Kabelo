import { Routes, Route } from "react-router-dom";

import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";

import Home from "./pages/Home";

import HealthInsuranceETL from "./pages/CaseStudies/HealthInsuranceETL";
import LoanEligibilityPrediction from "./pages/CaseStudies/LoanEligibilityPrediction";
import MovieAnalysis from "./pages/CaseStudies/MovieAnalysis";
import SmartTruckRoutePlanner from "./pages/CaseStudies/SmartTruckRoutePlanner";
import BankFraudDetection from "./pages/CaseStudies/BankFraudDetection";
import IrisAnalysis from "./pages/CaseStudies/IrisAnalysis";
import BreastCancerPrediction from "./pages/CaseStudies/BreastCancerPrediction";
import FreightRatePrediction from "./pages/CaseStudies/FreightRatePrediction";
import FuelRouteOptimizer from "./pages/CaseStudies/FuelRouteOptimizer";

export default function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Routes>

        {/* ===============================
            Main Portfolio
        =============================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ===============================
            Development Preview
        =============================== */}
        <Route
          path="/preview/health-insurance-etl"
          element={<HealthInsuranceETL />}
        />

        <Route
          path="/preview/loan-eligibility-prediction"
          element={<LoanEligibilityPrediction />}
        />

        <Route
          path="/preview/movie-ratings-analysis"
          element={<MovieAnalysis />}
        />
        <Route
          path="/preview/smart-truck-route-planner"
          element={<SmartTruckRoutePlanner />}
        />

        <Route
          path="/preview/bank-fraud-detection"
          element={<BankFraudDetection />}
        />

        <Route
          path="/preview/iris-data-exploration"
          element={<IrisAnalysis />}
        />

        <Route
          path="/preview/breast-cancer-model-evaluation"
          element={<BreastCancerPrediction />}
        />

        <Route
          path="/preview/freight-rate-prediction"
          element={<FreightRatePrediction />}
        />

        <Route
          path="/preview/fuel-route-optimizer"
          element={<FuelRouteOptimizer />}
        />

          
      </Routes>

      <Footer />

      <BackToTop />
    </>
  );
}