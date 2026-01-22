import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { ArrowRight, CheckCircle, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudHeroGraphics } from "@/components/graphics/HeroGraphics";
import { CaseStudyIcon } from "@/components/icons/CaseStudyIcons";
import { IndustryIcon } from "@/components/icons/IndustryIcons";

const caseStudies = [
  {
    iconKey: "banking",
    iconType: "industry" as const,
    industry: "Banking & Finance",
    title: "Banking Application Migration (Private Cloud → Azure)",
    client: "Large Private Bank in India",
    challenge:
      "High private cloud operational costs and licensing overhead. Difficulty meeting strict RBI and PCI-DSS compliance. Disaster recovery setup required hours for failover.",
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
    accentColor: "blue",
  },
  {
    iconKey: "financial",
    iconType: "casestudy" as const,
    industry: "Financial Services",
    title: "Financial Services Application (Private Cloud → AWS)",
    client: "Regional Investment Firm",
    challenge:
      "Limited scalability in private cloud infra. No AI-driven analytics capabilities. High infra and licensing costs.",
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
    accentColor: "green",
  },
  {
    iconKey: "ecommerce",
    iconType: "casestudy" as const,
    industry: "E-Commerce",
    title: "E-Commerce Migration (AWS → Azure)",
    client: "Major E-Commerce Retailer",
    challenge:
      "Rising AWS costs during seasonal traffic. Vendor lock-in concerns. Required integration with Microsoft ERP and Dynamics 365.",
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
    accentColor: "orange",
  },
  {
    iconKey: "automotive",
    iconType: "casestudy" as const,
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
    accentColor: "slate",
  },
  {
    iconKey: "healthcare",
    iconType: "casestudy" as const,
    industry: "Healthcare",
    title: "Real-Time Health Data Platform",
    client: "Remote Health Monitoring Platform (India)",
    challenge:
      "Monolithic backend couldn't scale for real-time health data ingestion. Lacked data pipeline and analytics engine. Compliance with HIPAA required.",
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
    accentColor: "teal",
  },
  {
    iconKey: "saas",
    iconType: "casestudy" as const,
    industry: "Enterprise SaaS",
    title: "SaaS Platform Scaling & Cost Optimization",
    client: "CRM & Workflow Automation Platform (Singapore)",
    challenge:
      "Frequent downtime during deployments. Lacked cost visibility. Dev, UAT, and Prod environments were misaligned.",
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
    accentColor: "purple",
  },
];

const CaseStudiesPage = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <CloudHeroGraphics />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral mb-6"
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Proven Track Record</span>
            </motion.div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results, <span className="text-gradient">Real Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore how we've helped enterprises across industries achieve measurable business outcomes through
              cloud-native solutions and DevOps excellence.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "30%", label: "Avg. Cost Savings" },
                { value: "99.9%", label: "Uptime Achieved" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

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

      {/* Case Studies Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-coral to-orange rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project tells a unique story of transformation and growth
            </p>
          </motion.div>

          <div className="grid gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-3xl border border-border overflow-hidden hover:border-coral/40 hover:shadow-2xl transition-all duration-500">
                  {/* Header with icon and title */}
                  <div className={`bg-gradient-to-r ${study.color} p-6 md:p-8`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/95 flex items-center justify-center shadow-xl flex-shrink-0"
                      >
                        {study.iconType === "casestudy" ? (
                          <CaseStudyIcon caseStudy={study.iconKey as any} size="lg" />
                        ) : (
                          <IndustryIcon industry={study.iconKey as any} size="lg" />
                        )}
                      </motion.div>
                      <div className="text-white">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2">
                          {study.industry}
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-1">{study.title}</h2>
                        <p className="text-white/80">Client: {study.client}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                      {/* Challenge */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-coral/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-heading font-bold text-lg text-coral">Challenge</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </motion.div>

                      {/* Solution */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-coral/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-heading font-bold text-lg text-coral">Solution</h3>
                        </div>
                        <div className="space-y-3">
                          {study.solution.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center mt-0.5">
                                <CheckCircle className="w-3.5 h-3.5 text-white" />
                              </div>
                              <span className="text-muted-foreground text-sm">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Results */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-coral/10 to-orange/10 border border-coral/20 hover:border-coral/40 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-orange flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-heading font-bold text-lg text-coral">Results</h3>
                        </div>
                        <div className="space-y-4">
                          {study.results.map((result, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <span className="text-2xl md:text-3xl font-bold text-gradient">{result.metric}</span>
                              <span className="text-muted-foreground text-sm">{result.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your business with cloud-native solutions?
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
