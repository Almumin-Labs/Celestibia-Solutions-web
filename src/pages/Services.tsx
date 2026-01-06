import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Cloud, 
  GitBranch, 
  Database, 
  Shield, 
  Brain, 
  Monitor,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "We provide a full suite of cloud services across major platforms like AWS, Azure, and GCP.",
    features: [
      "Cloud Infrastructure Managed Services",
      "Cloud Migration",
      "Cloud Architecture and Design",
      "Cloud Security and Governance",
      "Cost Optimization",
      "Disaster Recovery & Business Continuity",
      "Environment Management (Dev, UAT, Prod)",
    ],
    color: "from-blue-500 to-cyan-500",
    href: "/services/cloud",
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "End-to-end DevOps solutions supporting all major tools and platforms.",
    features: [
      "Managed Kubernetes",
      "DevOps as a Service",
      "Managed CI/CD Pipelines",
      "Infrastructure Automation & Management",
      "Custom Workflow Automation",
    ],
    color: "from-purple-500 to-pink-500",
    href: "/services/devops",
  },
  {
    icon: Database,
    title: "Data Engineering & Science",
    description: "Turn raw data into valuable insights and intelligent actions.",
    features: [
      "Data Pipeline Development (ETL/ELT)",
      "Data Warehousing (Snowflake, Redshift, BigQuery)",
      "Real-Time Data Processing",
      "Data Governance & Quality",
      "Predictive Modeling & Business Intelligence",
    ],
    color: "from-green-500 to-emerald-500",
    href: "/services/data-engineering",
  },
  {
    icon: Monitor,
    title: "Application Modernization",
    description: "From legacy systems to cloud-native applications.",
    features: [
      "Monolith to Microservices Migration",
      "Application Replatforming",
      "Performance Monitoring & Optimization",
      "Real-Time Monitoring & Observability",
      "Intelligent Alerting & Incident Response",
    ],
    color: "from-orange-500 to-yellow-500",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Comprehensive security solutions covering cloud and on-premise environments.",
    features: [
      "Cloud Security Posture Assessment",
      "Security Architecture Design (Zero Trust)",
      "Identity and Access Management",
      "DevSecOps Integration",
      "Vulnerability Assessment & Penetration Testing",
      "Security Monitoring & Incident Response",
    ],
    color: "from-red-500 to-orange-500",
    href: "/services/security",
  },
  {
    icon: Brain,
    title: "AI & ML Services",
    description: "Leverage AI to unlock efficiency, agility, and new possibilities.",
    features: [
      "AI-Powered Chatbots",
      "Generative AI Solutions",
      "Machine Learning Model Development",
      "Computer Vision & NLP",
      "AI Integration Services",
      "AI/ML Strategy Consulting",
    ],
    color: "from-violet-500 to-purple-500",
    href: "/services/ai-ml",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              End-to-End{" "}
              <span className="text-gradient">Cloud & DevOps</span>{" "}
              Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cloud migration to AI-powered automation, we deliver comprehensive 
              solutions that drive digital transformation for enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <Button variant="gradient" asChild>
                    <Link to={service.href} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`p-8 rounded-2xl bg-background border border-border ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <h3 className="font-semibold text-lg mb-6">Key Offerings</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
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

export default Services;
