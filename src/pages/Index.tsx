import NavigationRail from "@/components/NavigationRail";
import TypingHero from "@/components/TypingHero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SectionBreaker from "@/components/SectionBreaker";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <NavigationRail />
      <main className="lg:content-offset pt-16 lg:pt-0">
        <TypingHero
          text="Illuminating"
          accentText="Government Data"
          subtitle="We digitize and illuminate critical environmental datasets around air, water, waste and energy"
        />
        <CapabilitiesSection />
        <SectionBreaker text="Apaluma is at the nexus of economic development and compliance" />
        <CaseStudySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
