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
  CheckCircle,
  Users,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Core Cloud Services",
    description: "We provide a full suite of cloud services across major platforms like AWS, Azure, and GCP.",
    features: [
      "Cloud Infrastructure Managed Services - Proactive management and monitoring of your cloud infrastructure",
      "Cloud Migration - Smooth, secure, and optimized migration of your workloads to the cloud",
      "Cloud Architecture and Design - Designing scalable, secure, and high-performance cloud architectures",
      "Cloud Security and Governance - Robust security and governance frameworks to safeguard your data",
      "Cost Optimization - Identifying and eliminating inefficiencies to reduce cloud spend",
      "Disaster Recovery & Business Continuity Planning - Comprehensive solutions for data backup and recovery",
      "Environment Management (Dev, UAT, Prod) - Structured setup with promotion pipelines",
    ],
    color: "from-blue-500 to-cyan-500",
    href: "/services/cloud",
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "End-to-end DevOps solutions supporting all major tools and platforms.",
    features: [
      "Managed Kubernetes - Seamless deployment, scaling, and management of K8s clusters",
      "DevOps as a Service - Comprehensive lifecycle support from CI/CD to monitoring",
      "Managed CI/CD Pipelines - Automated pipelines for faster, reliable releases",
      "Infrastructure Automation & Management - IaC for enhanced efficiency",
      "Custom Workflow Automation - Automate tasks across your DevOps toolchain",
    ],
    color: "from-purple-500 to-pink-500",
    href: "/services/devops",
  },
  {
    icon: Database,
    title: "Data Engineering & Data Science",
    description: "Turn raw data into valuable insights and intelligent actions.",
    features: [
      "Data Pipeline Development – ETL/ELT using Apache Airflow, DBT, Spark, Glue",
      "Data Warehousing – Snowflake, Redshift, BigQuery, Azure Synapse",
      "Real-Time Data Processing – Kafka, Flink, Kinesis for streaming analytics",
      "Data Lakes – Scalable Lakehouse architecture (Delta Lake, Iceberg)",
      "Data Governance & Quality – Cataloging, lineage, validation tools",
      "Predictive Modeling – ML models for forecasting and recommendations",
      "Business Intelligence – Custom dashboards with Power BI, Tableau, Looker",
    ],
    color: "from-green-500 to-emerald-500",
    href: "/services/data-engineering",
  },
  {
    icon: Monitor,
    title: "Application Modernization & Performance Monitoring",
    description: "From legacy systems to cloud-native applications with proactive monitoring.",
    features: [
      "Application Security and Compliance - Protect apps with advanced security practices",
      "Monolith to Microservices Migration - Break down monolithic applications",
      "Application Replatforming - Modern architectures for improved performance",
      "Real-Time Monitoring - Continuous tracking of application metrics and health",
      "End-to-End Observability - Full-stack visibility with Prometheus, Grafana, ELK",
      "Intelligent Alerting & Incident Response - Smart thresholding and anomaly detection",
      "SLA & SLO Tracking - Monitor Service Level Objectives for compliance",
    ],
    color: "from-orange-500 to-yellow-500",
    href: "/services/application",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Comprehensive security solutions covering cloud and on-premise environments.",
    features: [
      "Cloud Security Posture Assessment - Identify misconfigurations in AWS, Azure, GCP",
      "Security Architecture Design - Zero Trust Architecture and IAM",
      "Identity and Access Management - RBAC, ABAC, SSO, MFA integration",
      "DevSecOps Integration - SAST/DAST, shift-left security in CI/CD",
      "VAPT - Infrastructure, application, and cloud penetration testing",
      "Security Monitoring & Incident Response - SIEM, 24/7 threat detection",
      "Managed Detection and Response (MDR) - Outsourced SOC and threat hunting",
    ],
    color: "from-red-500 to-orange-500",
    href: "/services/security",
  },
  {
    icon: Brain,
    title: "AI & ML Services",
    description: "Leverage AI to unlock efficiency, agility, and new possibilities.",
    features: [
      "AI-Powered Chatbots - Custom virtual assistants with OpenAI, Dialogflow, Rasa",
      "Generative AI Solutions - GPT, DALL·E, Claude for content generation",
      "Machine Learning Model Development - Predictions, classification, recommendations",
      "AI Integration Services - Embedding AI into CRMs, ERPs, workflows",
      "Computer Vision - Image recognition, object detection, OCR",
      "Natural Language Processing - Sentiment analysis, NER, summarization",
      "AI/ML Strategy Consulting - Use cases, feasibility, and roadmap advisory",
    ],
    color: "from-violet-500 to-purple-500",
    href: "/services/ai-ml",
  },
  {
    icon: Users,
    title: "Dedicated Resources & On-Demand Expertise",
    description: "Scale your team instantly with certified cloud and software professionals.",
    features: [
      "Dedicated Remote Engineers - Full-time cloud engineers, DevOps experts, developers",
      "On-Demand Specialists - Certified experts for short-term assignments",
      "Team Augmentation - Quickly plug in vetted talent into your workflows",
      "Project-Based Delivery Pods - Agile squads (PM + Dev + DevOps + QA)",
      "24/7 Support Engineers - On-call teams for incident response and monitoring",
    ],
    color: "from-teal-500 to-cyan-500",
    href: "/contact",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "From ideation to deployment, robust and scalable software solutions.",
    features: [
      "Requirement Analysis – Understanding business needs and aligning technical goals",
      "UI/UX Design – Intuitive, user-centric interfaces for better engagement",
      "Custom Development – Scalable backend & frontend with modern frameworks",
      "Quality Assurance & Testing – Manual and automated testing for reliability",
      "Deployment & Release – CI/CD-enabled rollouts for fast deployment",
      "Post-launch Support & Maintenance – Continuous improvement and updates",
    ],
    color: "from-indigo-500 to-blue-500",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-coral/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white drop-shadow-md" />
                  </motion.div>
                  <h2 className="font-heading text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <Button variant="gradient" asChild>
                    <Link to={service.href} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`p-8 rounded-2xl bg-background border border-border hover:border-coral/20 transition-colors ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <h3 className="font-semibold text-lg mb-6">Key Offerings</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-gradient">Celesibia</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Certified, client-rated professionals with domain expertise",
              "Flexible contracts — hourly, monthly, or milestone-based",
              "Immediate onboarding with knowledge transfer",
              "Transparent reporting, time tracking, and communications",
              "Coverage for multiple time zones (IST, GMT, EST)",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-coral/30 transition-all"
              >
                <CheckCircle className="w-8 h-8 text-coral mx-auto mb-3" />
                <p className="text-sm text-foreground">{item}</p>
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