import { motion } from "framer-motion";
import { 
  Server, 
  GitBranch, 
  Shield, 
  Activity,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "AWS, Azure, GCP managed services with 99.9% uptime",
    features: ["Migration", "Architecture", "Cost Optimization"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: GitBranch,
    title: "DevOps Automation",
    description: "CI/CD pipelines and Kubernetes management",
    features: ["CI/CD", "K8s", "IaC"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Zero trust architecture and compliance automation",
    features: ["VAPT", "DevSecOps", "SOC"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Activity,
    title: "Observability",
    description: "Real-time monitoring and intelligent alerting",
    features: ["APM", "Logging", "Tracing"],
    gradient: "from-green-500 to-emerald-500"
  },
];

export const AnimatedServiceCards = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
            What We Deliver
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative p-6 rounded-2xl bg-background border border-border h-full overflow-hidden group-hover:border-coral/40 transition-all duration-300 group-hover:shadow-2xl">
                {/* Animated gradient background on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-20, -40, -20],
                        x: [0, 10, 0],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                      className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`}
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '10%'
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white drop-shadow-md" />
                  </motion.div>
                  
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-coral transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-1 text-coral text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};