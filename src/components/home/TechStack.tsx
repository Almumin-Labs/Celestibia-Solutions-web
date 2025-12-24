import { motion } from "framer-motion";

const technologies = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Terraform", category: "IaC" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitLab", category: "CI/CD" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
];

export const TechStack = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground font-medium">
            Technologies & Platforms We Work With
          </p>
        </motion.div>

        {/* Scrolling Tech Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 items-center"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 rounded-lg bg-card border border-border hover:border-coral/30 transition-colors"
              >
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
