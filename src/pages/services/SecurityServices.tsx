import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Lock,
  Eye,
  AlertTriangle,
  FileCheck,
  Search,
  ShieldCheck,
  UserCheck,
  Key,
  Network,
  Bug,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingIcons, GradientOrbs, HexagonGrid } from "@/components/graphics/FloatingIcons";
import { TechIllustration } from "@/components/graphics/TechIllustration";
import { AnimatedBackground } from "@/components/graphics/AnimatedBackground";

const cloudSecurityFeatures = [
  {
    icon: Search,
    title: "Cloud Security Posture Assessment",
    description: "Identify misconfigurations in AWS, Azure, GCP. CIS Benchmarks & compliance mapping."
  },
  {
    icon: ShieldCheck,
    title: "Security Architecture Design",
    description: "Zero Trust Architecture, Identity and Access Management (IAM), Network segmentation and firewall policies."
  },
  {
    icon: Key,
    title: "Identity and Access Management (IAM)",
    description: "RBAC, ABAC policy design. SSO, MFA integration. Identity lifecycle management."
  },
  {
    icon: Lock,
    title: "DevSecOps Integration",
    description: "Static and dynamic code analysis (SAST/DAST). Shift-left security in CI/CD pipelines. Container security (Trivy, Aqua, Prisma Cloud)."
  },
];

const cybersecurityFeatures = [
  {
    icon: Bug,
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description: "Infrastructure, application, and cloud VAPT. Black-box, white-box, and grey-box testing."
  },
  {
    icon: Eye,
    title: "Security Monitoring & Incident Response",
    description: "SIEM implementation (Splunk, ELK, AWS GuardDuty). 24/7 monitoring and threat detection. Incident handling and forensic analysis."
  },
  {
    icon: Radio,
    title: "Managed Detection and Response (MDR)",
    description: "Outsourced SOC for continuous monitoring. Threat hunting and response."
  },
  {
    icon: Network,
    title: "Third-Party Risk Management",
    description: "Vendor security assessments. Supply chain security audits."
  },
];

const complianceFrameworks = [
  "SOC 2", "HIPAA", "PCI-DSS", "GDPR", "ISO 27001", "NIST", "CIS Benchmarks", "FedRAMP"
];

const SecurityServices = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <GradientOrbs />
        <FloatingIcons count={10} />
        <HexagonGrid />
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Security{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Security is at the core of everything we do. We provide comprehensive security solutions 
              covering both cloud and on-premise environments.
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

      {/* Cloud Security Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ☁️ Cloud Security
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Identity and access management, data encryption, threat detection, and incident response
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cloudSecurityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🔐 Cybersecurity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Network security, endpoint protection, threat intelligence, and security posture management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cybersecurityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-muted-foreground">
              We help you achieve and maintain compliance with industry standards
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 transition-all cursor-default"
              >
                <span className="font-medium text-foreground">{framework}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our Security Approach
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We follow a defense-in-depth strategy that combines preventive, detective, 
                and responsive controls to protect your assets.
              </p>
              <div className="space-y-4">
                {[
                  "Proactive threat hunting and vulnerability management",
                  "24/7 security monitoring and incident response",
                  "Continuous compliance monitoring and reporting",
                  "Security automation and orchestration",
                  "Regular security awareness training",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "Zero", label: "Security Breaches" },
                { value: "100%", label: "Compliance Rate" },
                { value: "< 1hr", label: "Response Time" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default SecurityServices;