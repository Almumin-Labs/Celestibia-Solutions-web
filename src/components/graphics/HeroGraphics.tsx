import { motion } from "framer-motion";
import { FloatingIcons, GradientOrbs, AnimatedNodes, CircuitLines } from "@/components/graphics/FloatingIcons";
import { FloatingTechOrbs, ServiceGridBackground } from "@/components/graphics/ServiceGraphics";

interface HeroGraphicsProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const HeroGraphics = ({ 
  primaryColor = "primary", 
  secondaryColor = "cyan-500" 
}: HeroGraphicsProps) => {
  return (
    <>
      <GradientOrbs />
      <FloatingIcons count={10} />
      <AnimatedNodes />
      <CircuitLines className="opacity-30" />
      <FloatingTechOrbs count={4} />
      <ServiceGridBackground />
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-20 right-20 w-64 h-64 bg-${primaryColor}/20 rounded-full blur-3xl`}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-20 left-20 w-80 h-80 bg-${secondaryColor}/20 rounded-full blur-3xl`}
        />
      </div>
    </>
  );
};

// Specific theme variants
export const CloudHeroGraphics = () => (
  <HeroGraphics primaryColor="primary" secondaryColor="cyan-500" />
);

export const DevOpsHeroGraphics = () => (
  <>
    <GradientOrbs />
    <FloatingIcons count={10} />
    <AnimatedNodes />
    <CircuitLines className="opacity-30" />
    <FloatingTechOrbs count={4} />
    <ServiceGridBackground />
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-coral/20 rounded-full blur-3xl"
      />
    </div>
  </>
);

export const SecurityHeroGraphics = () => (
  <>
    <GradientOrbs />
    <FloatingIcons count={10} />
    <AnimatedNodes />
    <CircuitLines className="opacity-30" />
    <FloatingTechOrbs count={4} />
    <ServiceGridBackground />
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl"
      />
    </div>
  </>
);

export const DataHeroGraphics = () => (
  <>
    <GradientOrbs />
    <FloatingIcons count={10} />
    <AnimatedNodes />
    <CircuitLines className="opacity-30" />
    <FloatingTechOrbs count={4} />
    <ServiceGridBackground />
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl"
      />
    </div>
  </>
);

export const AIMLHeroGraphics = () => (
  <>
    <GradientOrbs />
    <FloatingIcons count={12} />
    <AnimatedNodes />
    <CircuitLines className="opacity-30" />
    <FloatingTechOrbs count={5} />
    <ServiceGridBackground />
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
      />
    </div>
  </>
);

export const ApplicationHeroGraphics = () => (
  <>
    <GradientOrbs />
    <FloatingIcons count={10} />
    <AnimatedNodes />
    <CircuitLines className="opacity-30" />
    <FloatingTechOrbs count={4} />
    <ServiceGridBackground />
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          y: [0, 20, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl"
      />
    </div>
  </>
);
