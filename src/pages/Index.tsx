import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccessPortalSection from "@/components/AccessPortalSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f3d3da'}}>
      <Header />
      <HeroSection />
      <AccessPortalSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
