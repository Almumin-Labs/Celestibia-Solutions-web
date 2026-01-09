import { motion } from "framer-motion";
import { 
  Cloud, 
  GitBranch, 
  Database, 
  Shield, 
  Brain, 
  Monitor,
  Users,
  Code,
  Server,
  Container,
  Workflow,
  Lock,
  Cpu,
  Layers,
  Activity,
  Wrench,
  Eye,
  BarChart3,
  Boxes,
  RefreshCw
} from "lucide-react";

// Animated Service Icon with particles
export const AnimatedServiceIcon = ({ 
  icon: Icon, 
  gradient = "from-coral to-primary",
  size = "lg"
}: { 
  icon: React.ElementType; 
  gradient?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  const sizes = {
    sm: { container: "w-12 h-12", icon: "w-6 h-6" },
    md: { container: "w-16 h-16", icon: "w-8 h-8" },
    lg: { container: "w-20 h-20", icon: "w-10 h-10" },
    xl: { container: "w-24 h-24", icon: "w-12 h-12" },
  };

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glow effect */}
      <motion.div 
        className={`absolute inset-0 ${sizes[size].container} rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-40`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Main icon container */}
      <div className={`relative ${sizes[size].container} rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
        <Icon className={`${sizes[size].icon} text-white drop-shadow-md`} />
        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/60"
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0 
            }}
            animate={{ 
              x: [0, (i - 1) * 15, 0],
              y: [0, -20 - i * 5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Animated connection lines between service cards
export const ConnectionLines = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--coral))" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(var(--coral))" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(var(--coral))" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 0 50% Q 25% 30%, 50% 50% T 100% 50%"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

// Animated grid background for services
export const ServiceGridBackground = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute inset-0 opacity-[0.03]">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-foreground to-transparent"
          style={{ top: `${(i + 1) * 10}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-foreground to-transparent"
          style={{ left: `${(i + 1) * 10}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}
    </div>
    {/* Animated highlight moving across grid */}
    <motion.div
      className="absolute w-32 h-32 bg-gradient-radial from-coral/10 to-transparent rounded-full blur-3xl"
      animate={{
        x: ["0%", "100%", "0%"],
        y: ["0%", "50%", "0%"],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Floating tech orbs for visual interest
export const FloatingTechOrbs = ({ count = 5 }: { count?: number }) => {
  const colors = [
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-orange-500/20 to-yellow-500/20",
    "from-red-500/20 to-pink-500/20",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-48 h-48 rounded-full bg-gradient-to-br ${colors[i % colors.length]} blur-3xl`}
          style={{
            left: `${15 + i * 20}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

// Animated service card wrapper with hover effects
export const ServiceCardWrapper = ({ 
  children, 
  index = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  index?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`relative group ${className}`}
  >
    {/* Hover glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-coral/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">{children}</div>
  </motion.div>
);

// Decorative tech stack visual
export const TechStackVisual = ({ className = "" }: { className?: string }) => {
  const techIcons = [Cloud, Server, Database, Container, Workflow, Lock, Cpu, Layers];
  
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-4 gap-4">
        {techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-coral/50 transition-colors"
          >
            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-coral transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Animated stats counter visual
export const AnimatedStatsSection = ({ 
  stats 
}: { 
  stats: { value: string; label: string; }[] 
}) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, type: "spring" }}
        className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-coral/30 transition-colors"
      >
        <motion.div 
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
          className="text-4xl md:text-5xl font-bold text-gradient mb-2"
        >
          {stat.value}
        </motion.div>
        <div className="text-muted-foreground">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

// Pulsing dot indicator
export const PulsingDot = ({ color = "coral" }: { color?: string }) => (
  <span className="relative flex h-3 w-3">
    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color} opacity-75`} />
    <span className={`relative inline-flex rounded-full h-3 w-3 bg-${color}`} />
  </span>
);

// Service feature list with icons
export const FeatureList = ({ 
  features, 
  iconColor = "text-coral" 
}: { 
  features: string[]; 
  iconColor?: string;
}) => (
  <div className="space-y-4">
    {features.map((feature, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="flex items-start gap-3"
      >
        <div className={`w-5 h-5 rounded-full bg-gradient-to-br from-coral to-primary flex items-center justify-center flex-shrink-0 mt-0.5`}>
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-foreground">{feature}</span>
      </motion.div>
    ))}
  </div>
);

export default {
  AnimatedServiceIcon,
  ConnectionLines,
  ServiceGridBackground,
  FloatingTechOrbs,
  ServiceCardWrapper,
  TechStackVisual,
  AnimatedStatsSection,
  PulsingDot,
  FeatureList,
};
