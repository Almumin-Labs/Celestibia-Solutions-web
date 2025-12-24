import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";
import { forwardRef } from "react";

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/20 rounded-full blur-3xl" />

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
