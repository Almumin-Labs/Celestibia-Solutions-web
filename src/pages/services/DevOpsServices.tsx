import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  GitBranch, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Container,
  Workflow,
  Settings,
  Repeat,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Container,
    title: "Managed Kubernetes",
    description: "Expert management of Kubernetes clusters with auto-scaling, monitoring, and security best practices."
  },
  {
    icon: Workflow,
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, and ArgoCD."
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    description: "Terraform, Ansible, and Pulumi expertise for reproducible, version-controlled infrastructure."
  },
  {
    icon: Repeat,
    title: "DevOps as a Service",
    description: "Full-service DevOps team augmentation with 24/7 support and SRE best practices."
  },
  {
    icon: Terminal,
    title: "GitOps Implementation",
    description: "Implement GitOps workflows with ArgoCD and Flux for declarative, auditable deployments."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Custom automation solutions to streamline development, testing, and operations."
  },
];

const tools = [
  "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitLab CI",
  "GitHub Actions", "ArgoCD", "Helm", "Prometheus", "Grafana", "ELK Stack"
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
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
              <GitBranch className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              DevOps{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Accelerate software delivery with our end-to-end DevOps services. 
              From CI/CD to Kubernetes management, we've got you covered.
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
              DevOps Capabilities
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
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
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

      {/* Tools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Tools & Technologies
            </h2>
            <p className="text-muted-foreground">
              We work with the best DevOps tools in the industry
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all cursor-default"
              >
                <span className="font-medium text-foreground">{tool}</span>
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
              { value: "70%", label: "Faster Deployments" },
              { value: "50%", label: "Reduced Downtime" },
              { value: "100+", label: "K8s Clusters Managed" },
              { value: "24/7", label: "SRE Support" },
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

export default DevOpsServices;