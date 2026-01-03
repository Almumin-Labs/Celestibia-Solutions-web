import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";
import { forwardRef } from "react";
import { CircuitBoard, WaveGradient, OrbitRings } from "@/components/graphics/InfraCloudStyle";

export const CTA = forwardRef<HTMLElement>((_, ref) => {
  const ctaButton = useABTest('cta_button');
  const ctaHeadline = useABTest('cta_headline');

  const handleCTAClick = () => {
    ctaButton.trackConversion('cta_click');
  };

  const handleViewWorkClick = () => {
    ctaButton.trackConversion('view_work_click');
  };

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* InfraCloud-style backgrounds */}
      <CircuitBoard />
      <OrbitRings />
      <WaveGradient />

      {/* Gradient Orbs - InfraCloud orange/purple style */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#F97316]/30 to-[#8B5CF6]/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#8B5CF6]/30 to-[#06B6D4]/20 rounded-full blur-[100px]" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {ctaHeadline.isLoading ? (
              <>
                Ready to{" "}
                <span className="text-gradient">Transform</span>{" "}
                Your Business?
              </>
            ) : ctaHeadline.isVariantA ? (
              <>
                Ready to{" "}
                <span className="text-gradient">Transform</span>{" "}
                Your Business?
              </>
            ) : (
              <>
                Take Your Business to the{" "}
                <span className="text-gradient">Next Level</span>
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's create something extraordinary together. Contact us to discuss 
            how we can help you leverage cloud technology for efficiency, 
            agility, and new possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild onClick={handleCTAClick}>
              <Link to="/contact" className="flex items-center gap-2">
                {ctaButton.isLoading 
                  ? "Schedule a Consultation" 
                  : ctaButton.getVariantValue()}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild onClick={handleViewWorkClick}>
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <a
              href="mailto:info@celestibia.com"
              className="flex items-center gap-2 hover:text-coral transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@celestibia.com
            </a>
            <a
              href="tel:+918308535810"
              className="flex items-center gap-2 hover:text-coral transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 8308535810
            </a>
          </div>

          {/* A/B Test Indicator (only in dev) */}
          {import.meta.env.DEV && (
            <div className="mt-8 text-xs text-muted-foreground/50">
              <p>A/B Test: Headline={ctaHeadline.variant || 'loading'} | Button={ctaButton.variant || 'loading'}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
});

CTA.displayName = 'CTA';
