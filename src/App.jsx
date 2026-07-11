import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";  

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;