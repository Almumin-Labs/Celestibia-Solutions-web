import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Database, 
  ArrowRight, 
  BarChart3,
  Workflow,
  Shield,
  Zap,
  PieChart,
  Activity,
  FileSearch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataHeroGraphics } from "@/components/graphics/HeroGraphics";
import { AnimatedBackground } from "@/components/graphics/AnimatedBackground";
import { dataEngineeringPlatforms, PlatformBadge } from "@/components/logos/PlatformLogos";
import { ServiceIconBox } from "@/components/icons/ServiceIcons";

// Import illustrations
import dataPrepWorkflow from "@/assets/illustrations/data-prep-workflow-orchestration.svg";
import featureStores from "@/assets/illustrations/feature-stores.svg";

const dataEngineeringFeatures = [
  {
    icon: Workflow,
    title: "Data Pipeline Development",
    description: "ETL/ELT pipelines using Apache Airflow, DBT, Spark, Glue, and more."
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Design and implementation using Snowflake, Redshift, BigQuery, and Azure Synapse."
  },
  {
    icon: Zap,
    title: "Real-Time Data Processing",
    description: "Kafka, Flink, and Kinesis for streaming analytics."
  },
  {
    icon: Activity,
    title: "Data Lakes",
    description: "Scalable storage with Lakehouse architecture (Delta Lake, Iceberg)."
  },
  {
    icon: Shield,
    title: "Data Governance & Quality",
    description: "Cataloging, lineage, and validation tools like Great Expectations and DataHub."
  },
];

const dataScienceFeatures = [
  {
    icon: BarChart3,
    title: "Predictive Modeling",
    description: "Build machine learning models for forecasting, classification, and recommendation systems."
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Custom dashboards using Power BI, Tableau, and Looker."
  },
  {
    icon: FileSearch,
    title: "Statistical Analysis",
    description: "Hypothesis testing, regression analysis, and data storytelling."
  },
  {
    icon: Workflow,
    title: "Data Strategy Consulting",
    description: "Architecture, tooling, and capability roadmap for enterprise data success."
  },
];

// Using dataEngineeringPlatforms from PlatformLogos component

const DataEngineering = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <DataHeroGraphics />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data Engineering{" "}
              <span className="text-gradient">& Data Science</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Turn raw data into valuable insights and intelligent actions. Our team helps organizations 
              build modern data platforms and unlock the power of analytics and AI.
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

      {/* Data Platform Illustrations */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <img src={dataPrepWorkflow} alt="Data Prep & Workflow Orchestration" className="w-full h-64 object-contain" />
              <h3 className="font-heading text-xl font-bold mt-4 mb-2">Data Prep & Workflow Orchestration</h3>
              <p className="text-muted-foreground">Automated data pipelines with intelligent orchestration</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <img src={featureStores} alt="Feature Stores" className="w-full h-64 object-contain" />
              <h3 className="font-heading text-xl font-bold mt-4 mb-2">Feature Stores</h3>
              <p className="text-muted-foreground">Centralized feature management for ML pipelines</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Engineering Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <AnimatedBackground variant="particles" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🔧 Data Engineering
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build robust data infrastructure for enterprise-scale analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataEngineeringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Science & Analytics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              📈 Data Science & Analytics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform data into actionable insights and business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dataScienceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Platforms & Tools
            </h2>
            <p className="text-muted-foreground">
              We work with leading data platforms and technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {dataEngineeringPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                <PlatformBadge platform={platform} index={index} variant="data" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10PB+", label: "Data Processed" },
              { value: "60%", label: "Faster Insights" },
              { value: "50+", label: "Data Platforms" },
              { value: "99.9%", label: "Data Accuracy" },
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

export default DataEngineering;
