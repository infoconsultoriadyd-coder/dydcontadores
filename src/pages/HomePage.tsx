import { Footer, Navbar } from "@/widgets/layout";
import {
  AnalysisSection,
  ContactSection,
  HeroSection,
  MidCtaSection,
  ServicesSection,
} from "@/features/landing/sections";

export default function HomePage() {
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
