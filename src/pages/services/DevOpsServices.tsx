import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  ArrowRight, 
  CheckCircle,
  Container,
  Workflow,
  Settings,
  Repeat,
  Wrench,
  Cog
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import original logos
import gitlabLogo from "@/assets/logos/gitlab.png";
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import jenkinsLogo from "@/assets/logos/jenkins.png";
import githubSvg from "@/assets/logos/github.svg";
import argocdLogo from "@/assets/logos/argocd.png";
import grafanaLogo from "@/assets/logos/grafana.png";
import prometheusLogo from "@/assets/logos/prometheus.png";
import azureSvg from "@/assets/logos/azure.svg";

// Import illustrations
import sourceCodeCICD from "@/assets/illustrations/source-code-repo-ci-cd.svg";

import {
  KubernetesLogo,
  DockerLogo,
  TerraformLogo,
  AnsibleLogo,
  HelmLogo,
} from "@/components/logos/TechLogos";

const features = [
  {
    icon: Container,
    title: "Managed Kubernetes",
    description: "Seamless deployment, scaling, and management of Kubernetes clusters to ensure secure, high-availability containerized applications."
  },
  {
    icon: Workflow,
    title: "DevOps as a Service",
    description: "Comprehensive DevOps lifecycle support — from CI/CD implementation and infrastructure automation to monitoring and optimization."
  },
  {
    icon: Settings,
    title: "Managed CI/CD Pipelines",
    description: "Design, implementation, and maintenance of automated CI/CD pipelines for faster, reliable, and consistent application releases."
  },
  {
    icon: Cog,
    title: "Infrastructure Automation & Management",
    description: "Provisioning, scaling, and monitoring of cloud or hybrid infrastructure using Infrastructure as Code (IaC) for enhanced efficiency and reliability."
  },
  {
    icon: Wrench,
    title: "Custom Workflow Automation",
    description: "Automate repetitive tasks and integrate processes across your DevOps toolchain, tailored to fit your operational needs and reduce manual overhead."
  },
];

// Tools with original logos
const tools = [
  { name: "GitLab", logo: gitlabLogo, isImage: true },
  { name: "AWS", logo: awsSvg, isImage: true },
  { name: "Azure", logo: azureSvg, isImage: true },
  { name: "Google Cloud", logo: gcpLogo, isImage: true },
  { name: "Jenkins", logo: jenkinsLogo, isImage: true },
  { name: "GitHub Actions", logo: githubSvg, isImage: true },
  { name: "ArgoCD", logo: argocdLogo, isImage: true },
  { name: "Grafana", logo: grafanaLogo, isImage: true },
  { name: "Prometheus", logo: prometheusLogo, isImage: true },
  { name: "Kubernetes", Logo: KubernetesLogo, isImage: false },
  { name: "Docker", Logo: DockerLogo, isImage: false },
  { name: "Terraform", Logo: TerraformLogo, isImage: false },
  { name: "Ansible", Logo: AnsibleLogo, isImage: false },
  { name: "Helm", Logo: HelmLogo, isImage: false },
];

const DevOpsServices = () => {
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
            className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-coral/20 rounded-full blur-3xl"
          />
        </div>
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6"
            >
              <Workflow className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              DevOps{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We offer end-to-end DevOps solutions, supporting all major tools and platforms. 
              Accelerate software delivery with automated CI/CD, Kubernetes management, and infrastructure automation.
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

      {/* CI/CD Illustration Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
                CI/CD Infrastructure
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Source Code Repository{" "}
                <span className="text-gradient">& CI/CD</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                End-to-end automation from code commit to production deployment. 
                Our CI/CD pipelines ensure fast, reliable, and secure software delivery.
              </p>
              <ul className="space-y-3">
                {["Automated testing & quality gates", "Multi-environment deployments", "Rollback & disaster recovery", "Security scanning integrated"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <img src={sourceCodeCICD} alt="Source Code Repository & CI/CD" className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Tools Showcase */}
      <section className="py-16 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Tools & Technologies We Use
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with the best DevOps tools in the industry to deliver reliable, scalable solutions
            </p>
          </motion.div>

          {/* Animated Logo Slider */}
          <div className="relative">
            <div className="flex animate-scroll gap-8">
              {[...tools, ...tools].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all cursor-default min-w-[140px]"
                >
                  {tool.isImage ? (
                    <img 
                      src={tool.logo as string} 
                      alt={tool.name} 
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <tool.Logo className="w-12 h-12" />
                  )}
                  <span className="font-medium text-foreground text-sm text-center whitespace-nowrap">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our DevOps Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive DevOps solutions to streamline your development lifecycle and accelerate delivery.
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid with Animation */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              DevOps Toolchain
            </h2>
            <p className="text-muted-foreground">
              Industry-leading tools for every stage of your DevOps journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-2xl transition-all cursor-default group"
              >
                {tool.isImage ? (
                  <img 
                    src={tool.logo as string} 
                    alt={tool.name} 
                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <tool.Logo className="w-14 h-14 group-hover:scale-110 transition-transform" />
                )}
                <span className="font-medium text-foreground text-sm text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counter Effect */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-coral/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Faster Deployments" },
              { value: "50%", label: "Reduced Downtime" },
              { value: "100+", label: "K8s Clusters Managed" },
              { value: "24/7", label: "SRE Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <motion.div 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our DevOps Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for DevOps transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", description: "Evaluate current infrastructure and identify optimization opportunities" },
              { step: "02", title: "Design", description: "Create scalable CI/CD pipelines and infrastructure as code" },
              { step: "03", title: "Implement", description: "Deploy automated solutions with monitoring and security" },
              { step: "04", title: "Optimize", description: "Continuous improvement and performance tuning" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  <div className="text-5xl font-bold text-gradient opacity-30 mb-4">{item.step}</div>
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
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

export default DevOpsServices;