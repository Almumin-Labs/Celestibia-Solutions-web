import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Cloud, 
  Server, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Database,
  RefreshCw,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Server,
    title: "Cloud Infrastructure Managed Services",
    description: "24/7 management and monitoring of your cloud infrastructure across AWS, Azure, and GCP."
  },
  {
    icon: RefreshCw,
    title: "Cloud Migration",
    description: "Seamless migration of workloads, applications, and data to the cloud with minimal downtime."
  },
  {
    icon: Settings,
    title: "Cloud Architecture & Design",
    description: "Design scalable, secure, and cost-effective cloud architectures tailored to your needs."
  },
  {
    icon: Shield,
    title: "Cloud Security & Governance",
    description: "Implement robust security controls, compliance frameworks, and governance policies."
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Reduce cloud spend by up to 40% through rightsizing, reserved instances, and FinOps practices."
  },
  {
    icon: Database,
    title: "Disaster Recovery",
    description: "Business continuity solutions with automated failover and rapid recovery capabilities."
  },
];

const benefits = [
  "Reduce infrastructure costs by 30-40%",
  "99.99% uptime SLA guarantee",
  "24/7 expert support and monitoring",
  "Multi-cloud expertise (AWS, Azure, GCP)",
  "Automated scaling and optimization",
  "Compliance-ready architectures",
];

const CloudServices = () => {
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
            className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Accelerate your digital transformation with our comprehensive cloud services 
              across AWS, Azure, and Google Cloud Platform.
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
              Our Cloud Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end cloud solutions designed to optimize performance, reduce costs, and accelerate innovation.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We bring deep expertise across all major cloud platforms, helping you 
                achieve faster time-to-market, reduced costs, and improved scalability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-xl bg-background">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">40%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-background">
                    <TrendingUp className="w-8 h-8 text-coral mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">99.99%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-background">
                    <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Migrations</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-background">
                    <Shield className="w-8 h-8 text-coral mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Expert Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default CloudServices;