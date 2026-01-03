import { motion } from "framer-motion";

// Import original logos
import gitlabLogo from "@/assets/logos/gitlab.png";
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import jenkinsLogo from "@/assets/logos/jenkins.png";
import githubSvg from "@/assets/logos/github.svg";
import argocdLogo from "@/assets/logos/argocd.png";
import grafanaLogo from "@/assets/logos/grafana.png";
import prometheusLogo from "@/assets/logos/prometheus.png";
import azureSvg from "@/assets/logos/azure.svg";

import { 
  KubernetesLogo, 
  DockerLogo, 
  TerraformLogo, 
  AnsibleLogo,
  HelmLogo,
  PythonLogo,
  ReactLogo,
  ELKLogo
} from "@/components/logos/TechLogos";

const technologies = [
  { name: "AWS", logo: awsSvg, isImage: true },
  { name: "Azure", logo: azureSvg, isImage: true },
  { name: "Google Cloud", logo: gcpLogo, isImage: true },
  { name: "GitLab", logo: gitlabLogo, isImage: true },
  { name: "GitHub Actions", logo: githubSvg, isImage: true },
  { name: "Jenkins", logo: jenkinsLogo, isImage: true },
  { name: "ArgoCD", logo: argocdLogo, isImage: true },
  { name: "Grafana", logo: grafanaLogo, isImage: true },
  { name: "Prometheus", logo: prometheusLogo, isImage: true },
  { name: "Kubernetes", Logo: KubernetesLogo, isImage: false },
  { name: "Docker", Logo: DockerLogo, isImage: false },
  { name: "Terraform", Logo: TerraformLogo, isImage: false },
  { name: "Ansible", Logo: AnsibleLogo, isImage: false },
  { name: "Helm", Logo: HelmLogo, isImage: false },
  { name: "Python", Logo: PythonLogo, isImage: false },
  { name: "React", Logo: ReactLogo, isImage: false },
  { name: "ELK Stack", Logo: ELKLogo, isImage: false },
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
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 items-center"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-coral/30 transition-all hover:shadow-lg group"
              >
                {tech.isImage ? (
                  <img 
                    src={tech.logo as string} 
                    alt={tech.name} 
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <tech.Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
                )}
                <span className="font-semibold text-foreground whitespace-nowrap text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};