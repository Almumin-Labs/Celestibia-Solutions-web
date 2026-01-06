import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Workflow,
  Shield,
  Zap,
  PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Workflow,
    title: "Data Pipeline Development",
    description: "Build robust ETL/ELT pipelines using Apache Spark, Airflow, dbt, and modern data stack tools."
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Design and implement data warehouses on Snowflake, Redshift, BigQuery, and Databricks."
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Stream processing solutions with Kafka, Flink, and Spark Streaming for instant insights."
  },
  {
    icon: Shield,
    title: "Data Governance & Quality",
    description: "Implement data quality frameworks, lineage tracking, and compliance controls."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Interactive dashboards and reporting with Tableau, Power BI, Looker, and Metabase."
  },
  {
    icon: PieChart,
    title: "Predictive Analytics",
    description: "Turn data into actionable insights with advanced analytics and forecasting models."
  },
];

const platforms = [
  "Snowflake", "Databricks", "BigQuery", "Redshift", "Apache Spark",
  "Airflow", "dbt", "Kafka", "Flink", "Tableau", "Power BI", "Looker"
];

const DataEngineering = () => {
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
            className="absolute top-20 right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data{" "}
              <span className="text-gradient">Engineering</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform raw data into valuable insights with our comprehensive data engineering 
              and analytics solutions.
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
              Data Engineering Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end data solutions from ingestion to insights
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

      {/* Platforms Section */}
      <section className="py-20 bg-background">
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
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all cursor-default"
              >
                <span className="font-medium text-foreground">{platform}</span>
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