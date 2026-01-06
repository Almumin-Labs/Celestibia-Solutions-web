import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Monitor, 
  ArrowRight, 
  Boxes,
  Gauge,
  Activity,
  RefreshCw,
  Layers,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Boxes,
    title: "Monolith to Microservices",
    description: "Decompose monolithic applications into scalable, maintainable microservices architecture."
  },
  {
    icon: RefreshCw,
    title: "Application Replatforming",
    description: "Migrate legacy applications to modern platforms with minimal code changes."
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description: "Real-time APM with Datadog, New Relic, and Dynatrace for deep application insights."
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Identify and eliminate bottlenecks for faster response times and better user experience."
  },
  {
    icon: Layers,
    title: "Container Modernization",
    description: "Containerize applications with Docker and orchestrate with Kubernetes."
  },
  {
    icon: Zap,
    title: "Intelligent Alerting",
    description: "ML-powered alerting and incident response to minimize MTTR."
  },
];

const modernizationJourney = [
  { step: 1, title: "Assessment", description: "Evaluate current architecture and identify modernization opportunities" },
  { step: 2, title: "Strategy", description: "Define target architecture and migration roadmap" },
  { step: 3, title: "Decomposition", description: "Break down monolith into bounded contexts and services" },
  { step: 4, title: "Migration", description: "Incremental migration with strangler fig pattern" },
  { step: 5, title: "Optimization", description: "Continuous monitoring and performance tuning" },
];

const ApplicationServices = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Application{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Modernize your applications for the cloud era. From legacy transformation 
              to performance optimization, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Application Modernization Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform legacy systems into modern, cloud-native applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Modernization Journey
            </h2>
            <p className="text-muted-foreground">
              Our proven approach to application transformation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {modernizationJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Apps Modernized" },
              { value: "60%", label: "Cost Reduction" },
              { value: "5x", label: "Faster Releases" },
              { value: "99.9%", label: "Uptime Achieved" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default ApplicationServices;