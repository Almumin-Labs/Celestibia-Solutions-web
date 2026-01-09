import { motion } from "framer-motion";

// Import all logos as images
import gitlabLogo from "@/assets/logos/gitlab.png";
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import jenkinsLogo from "@/assets/logos/jenkins.png";
import githubSvg from "@/assets/logos/github.svg";
import argocdLogo from "@/assets/logos/argocd-new.png";
import grafanaLogo from "@/assets/logos/grafana.png";
import prometheusLogo from "@/assets/logos/prometheus.png";
import azureSvg from "@/assets/logos/azure.svg";
import kubernetesSvg from "@/assets/logos/kubernetes.svg";
import terraformSvg from "@/assets/logos/terraform.svg";
import helmSvg from "@/assets/logos/helm.svg";
import ansibleSvg from "@/assets/logos/ansible.svg";
import dockerSvg from "@/assets/logos/docker.svg";

const technologies = [
  { name: "Kubernetes", logo: kubernetesSvg },
  { name: "Docker", logo: dockerSvg },
  { name: "Terraform", logo: terraformSvg },
  { name: "Ansible", logo: ansibleSvg },
  { name: "Helm", logo: helmSvg },
  { name: "ArgoCD", logo: argocdLogo },
  { name: "AWS", logo: awsSvg },
  { name: "Azure", logo: azureSvg },
  { name: "Google Cloud", logo: gcpLogo },
  { name: "GitLab", logo: gitlabLogo },
  { name: "GitHub Actions", logo: githubSvg },
  { name: "Jenkins", logo: jenkinsLogo },
  { name: "Grafana", logo: grafanaLogo },
  { name: "Prometheus", logo: prometheusLogo },
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
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                />
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
