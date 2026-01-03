import { motion } from "framer-motion";
import { CheckCircle, Rocket, Users, Award, Clock, HeartHandshake } from "lucide-react";
import { useABTest } from "@/hooks/useABTest";
import { ConnectedNetwork, CircuitBoard } from "@/components/graphics/InfraCloudStyle";

const reasons = [
  {
    icon: Rocket,
    title: "Speed to Market",
    description: "Accelerate your digital transformation with our agile methodologies and rapid deployment capabilities.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified engineers bring deep expertise in AWS, Azure, GCP, Kubernetes, and modern DevOps practices.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "50+ successful projects with measurable results - from 35% cost savings to 99.9% uptime guarantees.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support to ensure your systems run smoothly at all times.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We don't just build products — we build partnerships, trust, and long-lasting value.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Meet industry standards with built-in security and compliance - PCI-DSS, HIPAA, SOC2, and more.",
  },
];

export const WhyChooseUs = () => {
  const { getVariantValue } = useABTest('why_choose_headline');
  const headline = getVariantValue() || 'Technology Should Simplify Business';

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* InfraCloud-style backgrounds */}
      <CircuitBoard />
      <div className="hidden lg:block">
        <ConnectedNetwork className="opacity-40" />
      </div>
      
      {/* Gradient orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#F97316]/20 to-[#8B5CF6]/10 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {headline.includes('Simplify') ? (
                <>
                  Technology Should{" "}
                  <span className="text-gradient">Simplify</span>{" "}
                  Business
                </>
              ) : (
                <>
                  Why{" "}
                  <span className="text-gradient">Partner</span>{" "}
                  With Us?
                </>
              )}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Celestibia Solutions, we believe in solutions that scale with growth, 
              innovation that keeps you ahead, and client success as our ultimate achievement.
            </p>

            {/* Key Beliefs */}
            <div className="space-y-4">
              {[
                "Technology should simplify business",
                "Solutions must scale with growth",
                "Innovation is key to staying ahead",
                "Client success is our ultimate achievement",
              ].map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{belief}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-coral/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
