import Navbar from "@/components/Navbar";
import { SupportSheetProvider } from "@/components/SupportContactSheet";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TripsSection from "@/components/TripsSection";
import DownloadCTA from "@/components/DownloadCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <SupportSheetProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="reveal-on-scroll">
          <HeroSection />
        </div>
        <div className="reveal-on-scroll">
          <FeaturesSection />
        </div>
        <div className="reveal-on-scroll">
          <HowItWorksSection />
        </div>
        <div className="reveal-on-scroll">
          <TripsSection />
        </div>
        <div className="reveal-on-scroll">
          <DownloadCTA />
        </div>
        <div className="reveal-on-scroll">
          <FAQSection />
        </div>
        <div className="reveal-on-scroll">
          <Footer />
        </div>
      </div>
    </SupportSheetProvider>
  );
};

export default Index;
