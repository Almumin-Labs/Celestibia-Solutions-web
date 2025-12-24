import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechStack />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
