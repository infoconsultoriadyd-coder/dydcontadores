import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import AnalysisSection from "./components/sections/AnalysisSection";
import MidCtaSection from "./components/sections/MidCtaSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AnalysisSection />
      <MidCtaSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;