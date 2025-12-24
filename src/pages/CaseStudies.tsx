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
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
              Case Studies
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results,{" "}
              <span className="text-gradient">Real Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how we've helped enterprises across industries achieve measurable 
              business outcomes through cloud-native solutions and DevOps excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                      <study.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-muted-foreground">
                        {study.industry}
                      </span>
                      <h2 className="font-heading text-2xl font-bold">{study.title}</h2>
                      <p className="text-muted-foreground">Client: {study.client}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-coral">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-coral">Our Solution</h3>
                      <div className="space-y-2">
                        {study.solution.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-coral">Results</h3>
                      <div className="space-y-3">
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
