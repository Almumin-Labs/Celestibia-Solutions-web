import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  GitBranch, 
  Database, 
  Shield, 
  Brain, 
  Monitor,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud Infrastructure, Migration, Architecture Design, and Cost Optimization across AWS, Azure, and GCP.",
    href: "/services/cloud",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "DevOps Solutions",
    description: "Managed Kubernetes, CI/CD Pipelines, Infrastructure Automation, and DevOps as a Service.",
    href: "/services/devops",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data Pipelines, Warehousing, Real-Time Processing, and Data Governance & Quality.",
    href: "/services/data-engineering",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Cloud Security, DevSecOps, VAPT, Compliance Automation, and Managed Detection & Response.",
    href: "/services/security",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "AI & ML Services",
    description: "AI-Powered Chatbots, ML Model Development, Computer Vision, NLP, and AI Strategy Consulting.",
    href: "/services/ai-ml",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Monitor,
    title: "App Modernization",
    description: "Monolith to Microservices, Application Replatforming, and Performance Monitoring.",
    href: "/services",
    color: "from-orange-500 to-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End{" "}
            <span className="text-gradient">Cloud & DevOps</span>{" "}
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From cloud migration to AI-powered automation, we deliver comprehensive 
            solutions that drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={service.href}
                className="block h-full p-8 rounded-2xl bg-background border border-border hover:border-coral/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-coral" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
