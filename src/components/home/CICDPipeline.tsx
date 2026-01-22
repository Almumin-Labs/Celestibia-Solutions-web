import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

// Import logos as images
import githubSvg from "@/assets/logos/github.svg";
import jenkinsLogo from "@/assets/logos/jenkins.png";
import dockerSvg from "@/assets/logos/docker.svg";
import kubernetesSvg from "@/assets/logos/kubernetes.svg";
import slackSvg from "@/assets/logos/slack.svg";

const pipelineSteps = [
  {
    id: 1,
    title: "Code Commit",
    description: "Developer pushes code to repository",
    logo: githubSvg,
  },
  {
    id: 2,
    title: "Build & Test",
    description: "Automated builds and unit tests",
    logo: jenkinsLogo,
  },
  {
    id: 3,
    title: "Code Quality",
    description: "Static analysis and security scan",
    logo: null as string | null,
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Containerize",
    description: "Build Docker image and push to registry",
    logo: dockerSvg,
  },
  {
    id: 5,
    title: "Deploy",
    description: "Deploy to Kubernetes cluster",
    logo: kubernetesSvg,
  },
  {
    id: 6,
    title: "Notify",
    description: "Team notification on success/failure",
    logo: slackSvg,
  },
];

export const CICDPipeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            CI/CD Pipeline <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation from code commit to production deployment
          </p>
        </motion.div>

        {/* Desktop Pipeline View */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-2">
            {pipelineSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  {/* Logo Container with white background */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100"
                    >
                      {step.logo ? (
                        <img src={step.logo} alt={step.title} className="w-12 h-12 object-contain" />
                      ) : step.icon ? (
                        <step.icon className="w-12 h-12 text-primary" />
                      ) : null}
                    </motion.div>

                    {/* Step Number Badge */}
                  </div>

                  {/* Step Info */}
                  <div className="text-center max-w-[140px]">
                    <h3 className="font-heading font-bold text-foreground mb-1 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-tight">{step.description}</p>
                  </div>
                </motion.div>

                {/* Arrow (except last) */}
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="mx-4 mb-16"
                  >
                    <ArrowRight className="w-5 h-5 text-coral" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pipeline View */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4"
              >
                {/* Logo Container */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center border border-gray-100">
                    {step.logo ? (
                      <img src={step.logo} alt={step.title} className="w-10 h-10 object-contain" />
                    ) : step.icon ? (
                      <step.icon className="w-10 h-10 text-primary" />
                    ) : null}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {step.id}
                  </div>
                </div>

                {/* Step Info */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-coral rotate-90 flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
