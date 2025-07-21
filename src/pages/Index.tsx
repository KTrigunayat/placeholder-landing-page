import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductivitySection from "@/components/ProductivitySection";
import TransformSection from "@/components/TransformSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <ProductivitySection />
      <TransformSection />
      <Footer />
    </div>
  );
};

export default Index;
