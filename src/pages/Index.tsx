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
import { Partners } from "@/components/home/Partners";
import { CICDPipeline } from "@/components/home/CICDPipeline";
import { AnimatedFeatures } from "@/components/home/AnimatedFeatures";
import { ValueProposition } from "@/components/home/ValueProposition";
import { AnimatedServiceCards } from "@/components/home/AnimatedServiceCards";


const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechStack />
      <AnimatedServiceCards />
      <Partners />
      <Services />
      
      <AnimatedFeatures />
      <CICDPipeline />
      <ValueProposition />
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