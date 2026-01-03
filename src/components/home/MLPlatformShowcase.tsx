import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import illustrations
import modelServing from "@/assets/illustrations/model-serving.svg";
import modelTraining from "@/assets/illustrations/model-training-infrastructure.svg";
import sourceCodeCICD from "@/assets/illustrations/source-code-repo-ci-cd.svg";
import dataPrepWorkflow from "@/assets/illustrations/data-prep-workflow-orchestration.svg";

const showcaseItems = [
  {
    image: sourceCodeCICD,
    title: "Source Code & CI/CD",
    description: "Automated pipelines from commit to production",
    link: "/services/devops",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: modelTraining,
    title: "ML Training Infrastructure",
    description: "Scalable GPU clusters for model training",
    link: "/services/ai-ml",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    image: dataPrepWorkflow,
    title: "Data Workflow Orchestration",
    description: "End-to-end data pipeline automation",
    link: "/services/data-engineering",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    image: modelServing,
    title: "Model Serving",
    description: "Low-latency inference at scale",
    link: "/services/ai-ml",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

export const MLPlatformShowcase = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
            Platform Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Modern{" "}
            <span className="text-gradient">ML & DevOps</span>{" "}
            Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build, deploy, and scale AI applications with enterprise-grade infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group block h-full bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Image container with gradient overlay */}
                <div className={`relative h-48 md:h-56 bg-gradient-to-br ${item.color} p-6 flex items-center justify-center`}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-coral transition-colors">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};