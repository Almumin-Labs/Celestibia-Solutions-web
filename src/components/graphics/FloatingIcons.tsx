import { motion } from "framer-motion";
import { 
  Cloud, Server, Database, Shield, Zap, Code, 
  GitBranch, Terminal, Cpu, Globe, Lock, Layers,
  Activity, BarChart3, Settings, Workflow
} from "lucide-react";

const icons = [
  { Icon: Cloud, color: "text-blue-500", size: 24 },
  { Icon: Server, color: "text-purple-500", size: 20 },
  { Icon: Database, color: "text-green-500", size: 22 },
  { Icon: Shield, color: "text-red-500", size: 18 },
  { Icon: Zap, color: "text-yellow-500", size: 20 },
  { Icon: Code, color: "text-cyan-500", size: 24 },
  { Icon: GitBranch, color: "text-orange-500", size: 18 },
  { Icon: Terminal, color: "text-pink-500", size: 22 },
  { Icon: Cpu, color: "text-indigo-500", size: 20 },
  { Icon: Globe, color: "text-teal-500", size: 24 },
  { Icon: Lock, color: "text-rose-500", size: 18 },
  { Icon: Layers, color: "text-violet-500", size: 22 },
];

interface FloatingIconsProps {
  className?: string;
  count?: number;
}

export const FloatingIcons = ({ className = "", count = 8 }: FloatingIconsProps) => {
  const selectedIcons = icons.slice(0, count);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {selectedIcons.map((item, index) => {
        const randomX = Math.random() * 80 + 10;
        const randomY = Math.random() * 80 + 10;
        const delay = index * 0.5;
        const duration = 15 + Math.random() * 10;
        
        return (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            style={{ left: `${randomX}%`, top: `${randomY}%` }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, -20, 10, 0],
              rotate: [0, 10, -10, 5, 0],
              scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export const GridPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export const DotPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

export const GradientOrbs = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <motion.div
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-coral/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
    />
    <motion.div
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
    />
  </div>
);

export const CircuitLines = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M0,50 Q25,30 50,50 T100,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M0,30 Q35,10 70,30 T100,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      <motion.path
        d="M0,70 Q30,90 60,70 T100,70"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
    </svg>
  </div>
);

export const HexagonGrid = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-primary/10 rounded-xl"
        style={{
          width: `${100 + i * 50}px`,
          height: `${100 + i * 50}px`,
          left: `${10 + i * 5}%`,
          top: `${20 + i * 8}%`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export const DataFlowLines = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{
          width: "100%",
          top: `${20 + i * 15}%`,
        }}
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export const AnimatedNodes = ({ className = "" }: { className?: string }) => {
  const nodes = [
    { x: 15, y: 25 },
    { x: 85, y: 20 },
    { x: 70, y: 75 },
    { x: 25, y: 70 },
    { x: 50, y: 45 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/30 rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i + j) * 0.3,
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
};