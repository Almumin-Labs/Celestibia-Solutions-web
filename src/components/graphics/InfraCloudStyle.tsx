import { motion } from "framer-motion";
import { 
  Cloud, Server, Database, Shield, Cpu, GitBranch,
  Workflow, BarChart3, Lock, Zap, Globe, Code,
  Container, Terminal, Layers, Network, HardDrive, Settings
} from "lucide-react";

// InfraCloud-style isometric floating tech icons with orange accent
export const IsometricIcons = ({ className = "" }: { className?: string }) => {
  const icons = [
    { Icon: Cloud, x: 5, y: 15, size: 28, color: "#F97316", delay: 0 },
    { Icon: Server, x: 90, y: 20, size: 24, color: "#8B5CF6", delay: 0.5 },
    { Icon: Database, x: 15, y: 70, size: 26, color: "#10B981", delay: 1 },
    { Icon: Shield, x: 85, y: 75, size: 22, color: "#EF4444", delay: 1.5 },
    { Icon: Cpu, x: 8, y: 45, size: 20, color: "#6366F1", delay: 2 },
    { Icon: GitBranch, x: 92, y: 50, size: 24, color: "#F59E0B", delay: 2.5 },
    { Icon: Code, x: 25, y: 85, size: 22, color: "#06B6D4", delay: 3 },
    { Icon: Container, x: 75, y: 10, size: 20, color: "#EC4899", delay: 3.5 },
    { Icon: Network, x: 70, y: 88, size: 24, color: "#8B5CF6", delay: 4 },
    { Icon: Terminal, x: 30, y: 25, size: 18, color: "#14B8A6", delay: 4.5 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
            color: item.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: item.delay },
            y: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: 6, repeat: Infinity, delay: item.delay },
          }}
        >
          <div 
            className="p-2 rounded-lg backdrop-blur-sm"
            style={{ 
              background: `${item.color}15`,
              boxShadow: `0 4px 20px ${item.color}30`,
            }}
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// InfraCloud-style connected nodes network
export const ConnectedNetwork = ({ className = "" }: { className?: string }) => {
  const nodes = [
    { x: 50, y: 50, size: 60, icon: Cloud, color: "#F97316", label: "Cloud" },
    { x: 20, y: 30, size: 45, icon: Server, color: "#8B5CF6", label: "Servers" },
    { x: 80, y: 25, size: 45, icon: Database, color: "#10B981", label: "Database" },
    { x: 25, y: 70, size: 45, icon: Shield, color: "#EF4444", label: "Security" },
    { x: 75, y: 75, size: 45, icon: Cpu, color: "#6366F1", label: "Compute" },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4]
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        {/* Animated connection lines */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={`${nodes[from].x}%`}
            y1={`${nodes[from].y}%`}
            x2={`${nodes[to].x}%`}
            y2={`${nodes[to].y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="8,4"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              strokeDashoffset: [0, 24],
            }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.3 },
              strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
        
        {/* Data flow particles */}
        {connections.map(([from, to], i) => (
          <motion.circle
            key={`particle-${i}`}
            r="4"
            fill="#F97316"
            opacity="0.8"
            animate={{
              cx: [`${nodes[from].x}%`, `${nodes[to].x}%`],
              cy: [`${nodes[from].y}%`, `${nodes[to].y}%`],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.2, type: "spring" }}
        >
          <motion.div
            className="rounded-2xl flex items-center justify-center shadow-xl"
            style={{
              width: node.size,
              height: node.size,
              background: `linear-gradient(135deg, ${node.color}20, ${node.color}40)`,
              border: `2px solid ${node.color}50`,
            }}
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                `0 10px 40px ${node.color}20`,
                `0 20px 60px ${node.color}40`,
                `0 10px 40px ${node.color}20`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <node.icon size={node.size * 0.5} style={{ color: node.color }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// InfraCloud-style isometric server rack
export const IsometricInfrastructure = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* Isometric Grid Floor */}
      <motion.g opacity="0.1">
        {[...Array(10)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={200 + i * 10}
            x2="400"
            y2={150 + i * 10}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 40}
            y1={200 - i * 5}
            x2={i * 40 + 100}
            y2={250 - i * 5}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </motion.g>

      {/* Server Racks */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Rack 1 */}
        <rect x="80" y="80" width="60" height="120" rx="4" fill="#8B5CF620" stroke="#8B5CF6" strokeWidth="2" />
        {[...Array(6)].map((_, i) => (
          <motion.rect
            key={i}
            x="88"
            y={90 + i * 18}
            width="44"
            height="12"
            rx="2"
            fill="#8B5CF6"
            opacity="0.6"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        {/* LED lights */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`led-${i}`}
            cx="95"
            cy={96 + i * 18}
            r="2"
            fill="#10B981"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.g>

      {/* Rack 2 */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <rect x="160" y="60" width="60" height="140" rx="4" fill="#F9731620" stroke="#F97316" strokeWidth="2" />
        {[...Array(7)].map((_, i) => (
          <motion.rect
            key={i}
            x="168"
            y={70 + i * 18}
            width="44"
            height="12"
            rx="2"
            fill="#F97316"
            opacity="0.6"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </motion.g>

      {/* Rack 3 */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <rect x="240" y="90" width="60" height="110" rx="4" fill="#06B6D420" stroke="#06B6D4" strokeWidth="2" />
        {[...Array(5)].map((_, i) => (
          <motion.rect
            key={i}
            x="248"
            y={100 + i * 18}
            width="44"
            height="12"
            rx="2"
            fill="#06B6D4"
            opacity="0.6"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </motion.g>

      {/* Connecting Cables */}
      <motion.path
        d="M140 140 Q180 120 160 100"
        stroke="#8B5CF6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
        animate={{ strokeDashoffset: [0, 16] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M220 130 Q250 110 240 100"
        stroke="#F97316"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,4"
        animate={{ strokeDashoffset: [0, 16] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Cloud at top */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="180" cy="30" rx="50" ry="20" fill="#F9731630" />
        <ellipse cx="165" cy="25" rx="25" ry="15" fill="#F9731640" />
        <ellipse cx="195" cy="25" rx="30" ry="15" fill="#F9731640" />
        <Cloud className="absolute" x="165" y="10" width="30" height="30" stroke="#F97316" strokeWidth="2" fill="none" />
      </motion.g>
    </svg>
  </div>
);

// InfraCloud-style hexagon pattern background
export const HexagonPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <polygon 
            points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            transform="translate(0,-14.4)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

// InfraCloud-style wave gradient
export const WaveGradient = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#waveGradient)"
        animate={{ 
          d: [
            "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </svg>
  </div>
);

// InfraCloud-style orbit rings
export const OrbitRings = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {[200, 300, 400].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: size,
            height: size,
            left: -size / 2,
            top: -size / 2,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-primary/50"
            style={{ top: -6, left: "50%" }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

// Circuit board pattern
export const CircuitBoard = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
      <defs>
        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="0" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="0" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          
          {/* Vertical lines */}
          <line x1="40" y1="20" x2="40" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="0" x2="60" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="50" x2="70" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
          
          {/* Nodes/dots */}
          <circle cx="40" cy="20" r="3" fill="currentColor" />
          <circle cx="60" cy="20" r="3" fill="currentColor" />
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <circle cx="70" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

// Floating cloud platform illustration
export const CloudPlatform = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <motion.div
      className="relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Main cloud platform */}
      <div className="relative w-80 h-48 mx-auto">
        {/* Cloud shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 rounded-[40px] blur-2xl" />
        <div className="absolute inset-4 bg-card/80 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl" />
        
        {/* Platform icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {[
            { Icon: Cloud, color: "#F97316" },
            { Icon: Server, color: "#8B5CF6" },
            { Icon: Database, color: "#10B981" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-xl bg-background shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <item.Icon size={32} style={{ color: item.color }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Supporting clouds */}
      <motion.div
        className="absolute -left-8 top-1/2 w-20 h-12 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl"
        animate={{ x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-8 top-1/3 w-24 h-14 bg-gradient-to-l from-coral/10 to-transparent rounded-full blur-xl"
        animate={{ x: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  </div>
);
