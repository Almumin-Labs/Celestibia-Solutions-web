import { motion } from "framer-motion";
import { Link2, Cloud, Brain } from "lucide-react";
import veeamLogo from "@/assets/veeam-logo.jpg";

const partners = [
  {
    name: "AWS",
    certification: "Select Consulting Partner",
    logo: "aws",
  },
  {
    name: "Microsoft Azure",
    certification: "Solutions Partner",
    logo: "azure",
  },
  {
    name: "Google Cloud",
    certification: "Certified Partner",
    logo: "gcp",
  },
  {
    name: "GitLab",
    certification: "Select Partner",
    logo: "gitlab",
  },
  {
    name: "Veeam",
    certification: "ProPartner",
    logo: "veeam",
  },
];

const LogoIcon = ({ logo }: { logo: string }) => {
  switch (logo) {
    case "aws":
      return (
        <div className="flex flex-col items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative"
          >
            <Cloud className="w-8 h-8 text-orange-500" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"
            />
          </motion.div>
          <span className="text-xs font-semibold text-foreground">AWS</span>
        </div>
      );
    case "azure":
      return (
        <div className="flex flex-col items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="relative"
          >
            <Cloud className="w-8 h-8 text-blue-500" />
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
            />
          </motion.div>
          <span className="text-xs font-semibold text-foreground">Azure</span>
        </div>
      );
    case "gcp":
      return (
        <div className="flex flex-col items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative"
          >
            <Cloud className="w-8 h-8 text-red-500" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
            />
          </motion.div>
          <span className="text-xs font-semibold text-foreground">GCP</span>
        </div>
      );
    case "gitlab":
      return (
        <div className="flex flex-col items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path
                d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 01.82 0l2.44 7.51h8.06l2.44-7.51a.42.42 0 01.82 0l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z"
                fill="#FC6D26"
              />
            </svg>
          </motion.div>
          <span className="text-xs font-semibold text-foreground">GitLab</span>
        </div>
      );
    case "veeam":
      return (
        <div className="flex flex-col items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-10 overflow-hidden rounded"
          >
            <img 
              src={veeamLogo} 
              alt="Veeam" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      );
    default:
      return null;
  }
};

export const Partners = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Link2 className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Partners & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for technical excellence and certified expertise across major cloud platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-border/50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 text-foreground">
                <LogoIcon logo={partner.logo} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
