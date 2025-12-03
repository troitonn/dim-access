import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import BenefitsCards from "@/components/BenefitsCards";
import DetailedBenefits from "@/components/DetailedBenefits";
import CTASection from "@/components/CTASection";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import AboutClinics from "@/components/AboutClinics";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntroSection />
      <BenefitsCards />
      <DetailedBenefits />
      <CTASection />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <WhyChoose />
      <AboutClinics />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
