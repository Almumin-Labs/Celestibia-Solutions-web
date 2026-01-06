import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, ShoppingCart, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    icon: Building2,
    industry: "Banking & Finance",
    title: "Banking App Migration to Azure",
    description: "Migrated core banking CRM from private cloud to Azure with 25% cost savings and RBI/PCI-DSS compliance.",
    results: ["25% cost reduction", "RTO: 4hrs → 30min", "Compliance achieved"],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Real-Time Health Data Platform",
    description: "Built a scalable health monitoring platform with <5s latency for real-time alerts and HIPAA compliance.",
    results: ["<5s alert latency", "1K to 50K+ users", "HIPAA compliant"],
    color: "from-green-600 to-emerald-400",
  },
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    title: "E-Commerce AWS to Azure Migration",
    description: "Seamless cloud-to-cloud migration with Microsoft ERP integration and 35% faster checkout.",
    results: ["18% cost savings", "35% faster checkout", "Zero downtime"],
    color: "from-orange-600 to-amber-400",
  },
  {
    icon: Factory,
    industry: "Enterprise SaaS",
    title: "SaaS Platform Scaling",
    description: "Implemented GitOps architecture reducing monthly cloud bill by 38% with zero-downtime deployments.",
    results: ["38% cost reduction", "Zero downtime", "99.95% uptime"],
    color: "from-purple-600 to-violet-400",
  },
];

export const CaseStudies = () => {
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
            Case Studies
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results,{" "}
            <span className="text-gradient">Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped enterprises across industries achieve measurable 
            business outcomes through cloud-native solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-coral/30 transition-all duration-300"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />

              <div className="p-8">
                {/* Industry Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                    <study.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {study.industry}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.results.map((result, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-coral font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/case-studies" className="flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
