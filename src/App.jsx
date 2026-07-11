import { Routes, Route } from "react-router-dom";

import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";

import Home from "./pages/Home";

import HealthInsuranceETL from "./pages/CaseStudies/HealthInsuranceETL";

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
          path="/preview/etl"
          element={<HealthInsuranceETL />}
        />

      </Routes>

      <Footer />

      <BackToTop />
    </>
  );
}