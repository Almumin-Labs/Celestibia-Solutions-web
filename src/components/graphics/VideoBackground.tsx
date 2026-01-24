import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  overlay?: "dark" | "light" | "gradient" | "none";
  opacity?: number;
  className?: string;
  poster?: string;
}

export const VideoBackground = ({
  src,
  overlay = "gradient",
  opacity = 0.4,
  className = "",
  poster,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    }
  }, []);

  const overlayStyles = {
    dark: "bg-gradient-to-b from-background/90 via-background/70 to-background",
    light: "bg-gradient-to-b from-white/80 via-white/50 to-white/80",
    gradient: "bg-gradient-to-b from-background/95 via-background/60 to-background/95",
    none: "",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              onLoadedData={() => setIsLoaded(true)}
              className="absolute w-full h-full object-cover"
              style={{ opacity }}
            >
              <source src={src} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background animate-pulse" />
      )}

      {/* Overlay */}
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
      )}
    </div>
  );
};

// Fullscreen Hero Video with cinematic effects
interface HeroVideoProps {
  src: string;
  children?: React.ReactNode;
}

export const HeroVideo = ({ src, children }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </motion.video>

      {/* Cinematic overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/60" />
      
      {/* Scanlines effect (subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        }}
      />

      {/* Content overlay */}
      {children && (
        <div className="relative z-10 h-full">
          {children}
        </div>
      )}
    </div>
  );
};

// Floating 3D shapes component
export const Floating3DShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating spheres */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle at 30% 30%, 
              hsl(var(--primary) / 0.3), 
              hsl(var(--accent) / 0.1) 50%, 
              transparent 70%)`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2"
          style={{
            width: 150 + i * 80,
            height: 150 + i * 80,
            right: `${5 + i * 15}%`,
            bottom: `${10 + i * 20}%`,
            borderColor: `hsl(var(--coral) / ${0.2 - i * 0.05})`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
};
