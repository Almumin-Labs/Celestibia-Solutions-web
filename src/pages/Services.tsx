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
  Code,
  Server,
  Container,
  Workflow,
  Lock,
  Cpu,
  Layers,
  Sparkles,
  Rocket,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FloatingTechOrbs,
  ServiceGridBackground,
  ServiceCardWrapper,
  AnimatedServiceIcon,
  TechStackVisual,
  AnimatedStatsSection,
} from "@/components/graphics/ServiceGraphics";
import { AnimatedNodes, CircuitLines } from "@/components/graphics/FloatingIcons";
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
    icon: Container,
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
    icon: Workflow,
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
    icon: Layers,
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
    icon: Lock,
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
    icon: Cpu,
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
        <FloatingTechOrbs count={6} />
        <ServiceGridBackground />
        <AnimatedNodes className="opacity-30" />
        <CircuitLines className="opacity-20" />

        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
            className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-coral/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              End-to-End <span className="text-gradient">Cloud & DevOps</span> Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From cloud migration to AI-powered automation, we deliver comprehensive solutions that drive digital
              transformation for enterprises worldwide.
            </p>

            {/* Tech stack visual */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="flex justify-center gap-4 mt-8"
            >
              {[Cloud, Container, Database, Lock, Cpu, Code].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-coral/50 transition-colors"
                >
                  <Icon className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-card relative overflow-hidden">
        <ServiceGridBackground className="opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceCardWrapper key={index} index={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <AnimatedServiceIcon icon={service.icon} gradient={`${service.color}`} size="lg" />
                    <h2 className="font-heading text-3xl font-bold mb-4 mt-6">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <Button variant="gradient" asChild>
                      <Link to={service.href} className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 1 ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                    className={`p-8 rounded-2xl bg-background border border-border hover:border-coral/20 transition-all relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    {/* Decorative gradient */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 blur-2xl`}
                    />

                    <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-coral" />
                      Key Offerings
                    </h3>
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: idx * 0.05,
                          }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-coral to-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ServiceCardWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <FloatingTechOrbs count={4} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </motion.div>

          <AnimatedStatsSection
            stats={[
              {
                value: "500+",
                label: "Projects Delivered",
              },
              {
                value: "99.9%",
                label: "Uptime SLA",
              },
              {
                value: "50+",
                label: "Enterprise Clients",
              },
              {
                value: "24/7",
                label: "Expert Support",
              },
            ]}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <ServiceGridBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-coral to-primary mb-4"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Celesibia</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Users,
                text: "Certified, client-rated professionals with domain expertise",
              },
              {
                icon: Sparkles,
                text: "Flexible contracts — hourly, monthly, or milestone-based",
              },
              {
                icon: Rocket,
                text: "Immediate onboarding with knowledge transfer",
              },
              {
                icon: Target,
                text: "Transparent reporting, time tracking, and communications",
              },
              {
                icon: Cloud,
                text: "Coverage for multiple time zones (IST, GMT, EST)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-coral/30 transition-all group relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-foreground">{item.text}</p>
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
