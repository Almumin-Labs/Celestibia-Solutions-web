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
  Zap,
  Eye,
  Bell,
  BarChart3,
  Database,
  Cloud,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationHeroGraphics } from "@/components/graphics/HeroGraphics";

const modernizationFeatures = [
  {
    icon: Boxes,
    title: "Application Security and Compliance",
    description: "Protect your applications with advanced security practices and ensure compliance with industry standards."
  },
  {
    icon: RefreshCw,
    title: "Monolith to Microservices Adoption & Migration",
    description: "Break down monolithic applications into scalable, independent microservices."
  },
  {
    icon: Layers,
    title: "Application Replatforming",
    description: "Replatform legacy applications to modern architectures for improved performance and cost efficiency."
  },
];

const monitoringFeatures = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous tracking of application metrics, server health, API responsiveness, and user experience with minimal lag."
  },
  {
    icon: Eye,
    title: "End-to-End Observability",
    description: "Full-stack visibility into infrastructure, applications, containers, and services using tools like Prometheus, Grafana, ELK Stack, and OpenTelemetry."
  },
  {
    icon: Bell,
    title: "Intelligent Alerting & Incident Response",
    description: "Smart thresholding, anomaly detection, and automated alerts integrated with Slack, Opsgenie, or PagerDuty for rapid resolution."
  },
  {
    icon: Gauge,
    title: "User Experience Monitoring (APM)",
    description: "Deep insights into frontend/backend performance, load times, and error rates using APM (New Relic, Datadog, Dynatrace)."
  },
  {
    icon: Database,
    title: "Log Aggregation & Analysis",
    description: "Centralized log management to troubleshoot faster, correlate events, and uncover hidden performance bottlenecks."
  },
  {
    icon: Cloud,
    title: "Cloud Cost & Resource Optimization",
    description: "Monitor resource utilization and optimize cloud spend by identifying idle or underperforming instances and workloads."
  },
  {
    icon: Boxes,
    title: "Kubernetes & Container Monitoring",
    description: "Track pod health, CPU/memory usage, network I/O, and auto-healing triggers for containerized environments."
  },
  {
    icon: Timer,
    title: "SLA & SLO Tracking",
    description: "Define and monitor Service Level Objectives (SLOs) to ensure you're meeting customer expectations and compliance standards."
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
        <ApplicationHeroGraphics />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 mb-6"
            >
              <Monitor className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Application Modernization{" "}
              <span className="text-gradient">& Monitoring</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From legacy systems to cloud-native applications, we help you modernize your technology stack 
              for better scalability, performance, and agility.
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

      {/* Application Modernization Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Application Modernization Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform legacy systems into modern, cloud-native applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {modernizationFeatures.map((feature, index) => (
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

      {/* Performance Monitoring Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Performance Monitoring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ensure optimal application performance and uptime with our proactive monitoring and performance optimization services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Journey */}
      <section className="py-20 bg-card">
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
      <section className="py-20 bg-background">
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

      {/* CTA for Contact */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to elevate your cloud journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us to learn how we can empower your business.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default ApplicationServices;