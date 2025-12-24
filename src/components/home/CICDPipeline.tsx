import { motion } from "framer-motion";
import { 
  GitHubLogo, 
  JenkinsLogo, 
  DockerLogo, 
  KubernetesLogo, 
  SonarQubeLogo,
  SlackLogo 
} from "@/components/logos/TechLogos";
import { ArrowRight, Code, TestTube, Package, Rocket, CheckCircle } from "lucide-react";

const pipelineSteps = [
  {
    id: 1,
    title: "Code Commit",
    description: "Developer pushes code to repository",
    icon: Code,
    Logo: GitHubLogo,
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 2,
    title: "Build & Test",
    description: "Automated builds and unit tests",
    icon: TestTube,
    Logo: JenkinsLogo,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    title: "Code Quality",
    description: "Static analysis and security scan",
    icon: CheckCircle,
    Logo: SonarQubeLogo,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    title: "Containerize",
    description: "Build Docker image and push to registry",
    icon: Package,
    Logo: DockerLogo,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 5,
    title: "Deploy",
    description: "Deploy to Kubernetes cluster",
    icon: Rocket,
    Logo: KubernetesLogo,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 6,
    title: "Notify",
    description: "Team notification on success/failure",
    icon: CheckCircle,
    Logo: SlackLogo,
    color: "from-purple-500 to-pink-500",
  },
];

export const CICDPipeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
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
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-coral to-primary origin-left"
              style={{ transform: "translateY(-50%)" }}
            />

            <div className="grid grid-cols-6 gap-4">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Logo Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.Logo className="w-12 h-12" />
                    </motion.div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                      {step.id}
                    </div>

                    {/* Step Info */}
                    <div className="text-center mt-2">
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow (except last) */}
                  {index < pipelineSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="absolute top-10 -right-4 z-20"
                    >
                      <ArrowRight className="w-6 h-6 text-coral" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Pipeline View */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-coral to-primary" />

            <div className="space-y-6">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center gap-6 pl-4"
                >
                  {/* Logo Container */}
                  <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <step.Logo className="w-10 h-10" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="flex-1 p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10x", label: "Faster Deployments" },
            { value: "99.9%", label: "Pipeline Success Rate" },
            { value: "< 5min", label: "Average Build Time" },
            { value: "Zero", label: "Manual Interventions" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
