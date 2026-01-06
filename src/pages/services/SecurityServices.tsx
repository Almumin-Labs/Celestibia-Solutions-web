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
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Cloud Security Posture Assessment",
    description: "Comprehensive assessment of your cloud security posture with actionable remediation guidance."
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Design and implement zero trust security models for modern hybrid environments."
  },
  {
    icon: ShieldCheck,
    title: "Identity & Access Management",
    description: "SSO, MFA, RBAC, and privileged access management across all platforms."
  },
  {
    icon: AlertTriangle,
    title: "DevSecOps Integration",
    description: "Shift-left security with automated scanning, SAST, DAST, and SCA in CI/CD pipelines."
  },
  {
    icon: Eye,
    title: "VAPT Services",
    description: "Vulnerability assessment and penetration testing for applications, networks, and cloud."
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    description: "Automated compliance for SOC 2, HIPAA, PCI-DSS, GDPR, and ISO 27001."
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
              Comprehensive security solutions to protect your cloud infrastructure, 
              applications, and data from evolving threats.
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
              Security Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end security solutions for cloud-native and hybrid environments
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

      {/* Compliance Frameworks */}
      <section className="py-20 bg-background">
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
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all cursor-default"
              >
                <span className="font-medium text-foreground">{framework}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Approach */}
      <section className="py-20 bg-card">
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
                  className="text-center p-6 rounded-xl bg-background border border-border"
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