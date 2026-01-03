import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "gradient" | "mesh" | "waves" | "particles";
  className?: string;
}

export const AnimatedBackground = ({ variant = "gradient", className = "" }: AnimatedBackgroundProps) => {
  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-coral/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="currentColor"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="currentColor"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="absolute bottom-0 w-full h-48 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="currentColor"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            fill="currentColor"
            className="opacity-50"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export const GlowingBorder = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute inset-0 rounded-2xl ${className}`}
    animate={{
      boxShadow: [
        "0 0 20px rgba(var(--primary), 0.1)",
        "0 0 40px rgba(var(--primary), 0.2)",
        "0 0 20px rgba(var(--primary), 0.1)",
      ],
    }}
    transition={{ duration: 3, repeat: Infinity }}
  />
);

export const ShimmerEffect = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
    animate={{ x: ["-100%", "100%"] }}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
  />
);