import { motion } from "framer-motion";
import { 
  Server, Cloud, Database, Shield, Cpu, GitBranch,
  Container, Workflow, BarChart3, Lock, Zap, Globe
} from "lucide-react";

interface TechIllustrationProps {
  variant?: "cloud" | "devops" | "data" | "security" | "ai";
  className?: string;
}

export const TechIllustration = ({ variant = "cloud", className = "" }: TechIllustrationProps) => {
  const configs = {
    cloud: {
      icons: [Cloud, Server, Database, Globe],
      colors: ["text-blue-500", "text-cyan-500", "text-sky-500", "text-teal-500"],
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    devops: {
      icons: [GitBranch, Container, Workflow, Zap],
      colors: ["text-purple-500", "text-pink-500", "text-violet-500", "text-fuchsia-500"],
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    data: {
      icons: [Database, BarChart3, Cpu, Zap],
      colors: ["text-green-500", "text-emerald-500", "text-teal-500", "text-lime-500"],
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    security: {
      icons: [Shield, Lock, Server, Cloud],
      colors: ["text-red-500", "text-orange-500", "text-rose-500", "text-amber-500"],
      bgGradient: "from-red-500/10 to-orange-500/10",
    },
    ai: {
      icons: [Cpu, Zap, Globe, BarChart3],
      colors: ["text-violet-500", "text-purple-500", "text-indigo-500", "text-blue-500"],
      bgGradient: "from-violet-500/10 to-purple-500/10",
    },
  };

  const config = configs[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Central Hub */}
      <motion.div
        className={`relative w-64 h-64 rounded-full bg-gradient-to-br ${config.bgGradient} flex items-center justify-center`}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting Icons */}
        {config.icons.map((Icon, index) => {
          const angle = (index * 90) * (Math.PI / 180);
          const radius = 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className={`absolute w-14 h-14 rounded-xl bg-background shadow-lg flex items-center justify-center ${config.colors[index]}`}
              style={{
                left: `calc(50% + ${x}px - 28px)`,
                top: `calc(50% + ${y}px - 28px)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 4px 20px rgba(0,0,0,0.1)",
                  "0 8px 30px rgba(0,0,0,0.2)",
                  "0 4px 20px rgba(0,0,0,0.1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <Icon className="w-7 h-7" />
            </motion.div>
          );
        })}

        {/* Center Icon */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-coral flex items-center justify-center shadow-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {(() => {
            const CenterIcon = config.icons[0];
            return <CenterIcon className="w-10 h-10 text-white" />;
          })()}
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {config.icons.map((_, index) => {
            const angle = (index * 90) * (Math.PI / 180);
            const radius = 100;
            const x = Math.cos(angle) * radius + 128;
            const y = Math.sin(angle) * radius + 128;

            return (
              <motion.line
                key={index}
                x1="128"
                y1="128"
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="text-primary/30"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};

export const DataFlowIllustration = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-64 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-between px-8">
      {/* Source */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <Database className="w-8 h-8 text-white" />
        </div>
        <span className="text-xs text-muted-foreground font-medium">Source</span>
      </motion.div>

      {/* Flow Lines */}
      <div className="flex-1 relative h-2 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-primary/20 to-green-500/20 rounded-full" />
        <motion.div
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-blue-500 to-primary rounded-full"
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Processing */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-coral flex items-center justify-center">
          <Cpu className="w-8 h-8 text-white" />
        </div>
        <span className="text-xs text-muted-foreground font-medium">Process</span>
      </motion.div>

      {/* Flow Lines */}
      <div className="flex-1 relative h-2 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-coral/20 to-green-500/20 rounded-full" />
        <motion.div
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-primary to-green-500 rounded-full"
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Output */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <span className="text-xs text-muted-foreground font-medium">Insights</span>
      </motion.div>
    </div>
  </div>
);

export const PipelineIllustration = ({ className = "" }: { className?: string }) => {
  const stages = [
    { icon: GitBranch, label: "Code", color: "from-purple-500 to-pink-500" },
    { icon: Container, label: "Build", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, label: "Test", color: "from-green-500 to-emerald-500" },
    { icon: Cloud, label: "Deploy", color: "from-orange-500 to-yellow-500" },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <stage.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
              <span className="text-xs font-medium text-muted-foreground">{stage.label}</span>
            </motion.div>
            
            {index < stages.length - 1 && (
              <motion.div
                className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mx-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};