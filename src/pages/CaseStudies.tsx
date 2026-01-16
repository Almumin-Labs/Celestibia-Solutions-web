import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  Factory, 
  Car,
  Server,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudHeroGraphics } from "@/components/graphics/HeroGraphics";

const caseStudies = [
  {
    icon: Building2,
    industry: "Banking & Finance",
    title: "Banking Application Migration (Private Cloud → Azure)",
    client: "Large Private Bank in India",
    challenge: "High private cloud operational costs and licensing overhead. Difficulty meeting strict RBI and PCI-DSS compliance. Disaster recovery setup required hours for failover.",
    solution: [
      "Migrated workloads to Azure Virtual Machines",
      "Oracle DB → Azure SQL Managed Instance",
      "Implemented Azure Backup, Monitor, and Security Center",
    ],
    results: [
      { metric: "25%", label: "Cost Savings" },
      { metric: "4hrs → 30min", label: "DR RTO Reduction" },
      { metric: "100%", label: "Compliance Achieved" },
    ],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Building2,
    industry: "Financial Services",
    title: "Financial Services Application (Private Cloud → AWS)",
    client: "Regional Investment Firm",
    challenge: "Limited scalability in private cloud infra. No AI-driven analytics capabilities. High infra and licensing costs.",
    solution: [
      "CRM and trading apps → AWS EC2 & RDS",
      "Added AWS Lambda for automation",
      "Integrated AWS Comprehend for sentiment analysis",
    ],
    results: [
      { metric: "20%", label: "OPEX Reduction" },
      { metric: "32%", label: "Engagement Boost" },
      { metric: "Weekly → Daily", label: "Release Cycles" },
    ],
    color: "from-green-600 to-emerald-400",
  },
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    title: "E-Commerce Migration (AWS → Azure)",
    client: "Major E-Commerce Retailer",
    challenge: "Rising AWS costs during seasonal traffic. Vendor lock-in concerns. Required integration with Microsoft ERP and Dynamics 365.",
    solution: [
      "Web apps → Azure App Services",
      "MySQL RDS → Azure Database for MySQL",
      "CDN → Azure Front Door",
    ],
    results: [
      { metric: "18%", label: "Cost Reduction" },
      { metric: "35%", label: "Faster Checkout" },
      { metric: "Zero", label: "Downtime" },
    ],
    color: "from-orange-600 to-amber-400",
  },
  {
    icon: Car,
    industry: "Automotive",
    title: "Automotive ERP Migration (Azure → AWS)",
    client: "Global Automotive Manufacturer",
    challenge: "High licensing costs on Azure. Need for GPU-based workloads. Multi-region deployment requirement.",
    solution: [
      "ERP → AWS EC2 & RDS PostgreSQL",
      "GPU instances for CAD simulations",
      "Multi-region setup with Route 53",
    ],
    results: [
      { metric: "22%", label: "Cost Savings" },
      { metric: "40%", label: "Faster Rendering" },
      { metric: "<1hr", label: "Failover Time" },
    ],
    color: "from-slate-600 to-slate-400",
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Real-Time Health Data Platform",
    client: "Remote Health Monitoring Platform (India)",
    challenge: "Monolithic backend couldn't scale for real-time health data ingestion. Lacked data pipeline and analytics engine. Compliance with HIPAA required.",
    solution: [
      "Event-driven microservices on EKS and Lambda",
      "Data pipeline using Kinesis, Glue, and Redshift",
      "Predictive models using SageMaker",
    ],
    results: [
      { metric: "<5s", label: "Alert Latency" },
      { metric: "1K → 50K+", label: "Daily Users" },
      { metric: "HIPAA", label: "Compliant" },
    ],
    color: "from-teal-600 to-cyan-400",
  },
  {
    icon: Server,
    industry: "Enterprise SaaS",
    title: "SaaS Platform Scaling & Cost Optimization",
    client: "CRM & Workflow Automation Platform (Singapore)",
    challenge: "Frequent downtime during deployments. Lacked cost visibility. Dev, UAT, and Prod environments were misaligned.",
    solution: [
      "GitOps architecture with ArgoCD, Helm, GitLab CI",
      "Amazon EKS with separate namespaces per environment",
      "Savings plans, right-sizing, auto-scaling",
    ],
    results: [
      { metric: "38%", label: "Cost Reduction" },
      { metric: "Zero", label: "Deployment Downtime" },
      { metric: "99.95%", label: "Uptime" },
    ],
    color: "from-purple-600 to-violet-400",
  },
];

const CaseStudiesPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <CloudHeroGraphics />
        
        {/* Additional animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-[350px] h-[350px] bg-gradient-to-br from-coral/40 to-orange/30 rounded-full blur-[100px]"
        />
        
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-orange mb-6 shadow-xl"
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-coral text-sm font-medium mb-4 ml-4">
              Case Studies
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results,{" "}
              <span className="text-gradient">Real Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore how we've helped enterprises across industries achieve measurable 
              business outcomes through cloud-native solutions and DevOps excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral to-orange rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple to-blue-500 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-coral text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record of delivering transformative results
            </p>
          </motion.div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-coral/30 transition-all duration-300 group"
              >
                {/* Gradient Top Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${study.color}`} />

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <study.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-coral/20 text-coral text-xs font-medium mb-2">
                        {study.industry}
                      </span>
                      <h2 className="font-heading text-2xl font-bold group-hover:text-coral transition-colors">{study.title}</h2>
                      <p className="text-muted-foreground">Client: {study.client}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge */}
                    <div className="p-5 rounded-xl bg-card border border-border">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                          <span className="text-white text-sm font-bold">!</span>
                        </div>
                        <span className="text-coral">Challenge</span>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-5 rounded-xl bg-card border border-border">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-coral">Our Solution</span>
                      </h3>
                      <div className="space-y-3">
                        {study.solution.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-5 rounded-xl bg-gradient-to-br from-coral/10 to-orange/10 border border-coral/20">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-coral">Results</span>
                      </h3>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gradient">{result.metric}</span>
                            <span className="text-muted-foreground text-sm">{result.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default CaseStudiesPage;
