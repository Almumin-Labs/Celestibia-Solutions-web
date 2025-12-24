import { motion } from "framer-motion";
import { 
  AWSLogo, 
  AzureLogo, 
  GCPLogo, 
  KubernetesLogo, 
  DockerLogo, 
  TerraformLogo, 
  JenkinsLogo, 
  GitLabLogo, 
  PrometheusLogo, 
  GrafanaLogo,
  PythonLogo,
  ReactLogo,
  GitHubActionsLogo,
  AnsibleLogo
} from "@/components/logos/TechLogos";

const technologies = [
  { name: "AWS", Logo: AWSLogo, category: "Cloud" },
  { name: "Azure", Logo: AzureLogo, category: "Cloud" },
  { name: "GCP", Logo: GCPLogo, category: "Cloud" },
  { name: "Kubernetes", Logo: KubernetesLogo, category: "DevOps" },
  { name: "Docker", Logo: DockerLogo, category: "DevOps" },
  { name: "Terraform", Logo: TerraformLogo, category: "IaC" },
  { name: "Ansible", Logo: AnsibleLogo, category: "IaC" },
  { name: "Jenkins", Logo: JenkinsLogo, category: "CI/CD" },
  { name: "GitLab", Logo: GitLabLogo, category: "CI/CD" },
  { name: "GitHub Actions", Logo: GitHubActionsLogo, category: "CI/CD" },
  { name: "Prometheus", Logo: PrometheusLogo, category: "Monitoring" },
  { name: "Grafana", Logo: GrafanaLogo, category: "Monitoring" },
  { name: "Python", Logo: PythonLogo, category: "Language" },
  { name: "React", Logo: ReactLogo, category: "Frontend" },
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
            className="flex gap-8 items-center"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-coral/30 transition-all hover:shadow-lg group"
              >
                <tech.Logo className="w-10 h-10 group-hover:scale-110 transition-transform" />
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
