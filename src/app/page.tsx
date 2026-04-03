import HeroSection from "@/components/home/HeroSection";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SoftCTA from "@/components/home/SoftCTA";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CostCalculator from "@/components/home/CostCalculator";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <HomeProjectsSection />
      
      <SoftCTA 
        heading="Want a home like the ones above?" 
        subtext="Schedule a free site visit with our structural experts to discuss your plot." 
      />
      
      <TestimonialsSection />
      <ProcessSection />
      <CostCalculator />
      <PricingSection />
      
      <SoftCTA 
        heading="Ready to lock in a fixed-price contract?" 
        subtext="Get a rock-solid estimate for your specific plot in Chennai." 
      />
      
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
