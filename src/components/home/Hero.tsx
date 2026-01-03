import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, GitBranch, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";

const floatingIcons = [
  { Icon: Cloud, delay: 0, position: "top-20 left-[10%]", color: "text-blue-500" },
  { Icon: Shield, delay: 1, position: "top-40 right-[15%]", color: "text-red-500" },
  { Icon: Zap, delay: 2, position: "bottom-32 left-[20%]", color: "text-yellow-500" },
  { Icon: Server, delay: 0.5, position: "top-32 left-[25%]", color: "text-purple-500" },
  { Icon: Database, delay: 1.5, position: "bottom-40 right-[25%]", color: "text-green-500" },
  { Icon: GitBranch, delay: 2.5, position: "top-60 right-[10%]", color: "text-orange-500" },
  { Icon: Code, delay: 3, position: "bottom-48 left-[8%]", color: "text-cyan-500" },
];

export const Hero = () => {
  const { getVariantValue: getHeadline, trackConversion: trackHeadlineView } = useABTest('hero_headline');
  const { getVariantValue: getCtaText, trackConversion: trackCtaClick } = useABTest('hero_cta');

  const headlineText = getHeadline() || 'Innovative Cloud Solutions for a Connected World';
  const ctaText = getCtaText() || 'Get Started';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.25, 
            y: [0, -15, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{ 
            opacity: { delay: delay * 0.3, duration: 0.8 },
            y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className={`${color} drop-shadow-lg`}>
            <Icon className="w-10 h-10" />
          </div>
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-coral/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Trusted by leading enterprises worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onAnimationComplete={() => trackHeadlineView('view')}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            {headlineText.includes('Cloud Solutions') ? (
              <>
                Innovative{" "}
                <span className="text-gradient">Cloud Solutions</span>{" "}
                for a Connected World
              </>
            ) : (
              <>
                Transform Your Business with{" "}
                <span className="text-gradient">Enterprise Cloud</span>{" "}
                Solutions
              </>
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We blend creativity with technical excellence to deliver software solutions 
            that are not just functional, but future-ready. From cloud migration to 
            AI-powered automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild onClick={() => trackCtaClick('click')}>
              <Link to="/contact" className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "35%", label: "Avg. Cost Savings" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};
