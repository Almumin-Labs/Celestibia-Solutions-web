import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import veeamLogo from "@/assets/veeam-logo.jpg";
import { AWSLogo, AzureLogo, GCPLogo, GitLabLogo } from "@/components/logos/TechLogos";

const partners = [
  {
    name: "AWS",
    certification: "Select Consulting Partner",
    Logo: AWSLogo,
  },
  {
    name: "Microsoft Azure",
    certification: "Solutions Partner",
    Logo: AzureLogo,
  },
  {
    name: "Google Cloud",
    certification: "Certified Partner",
    Logo: GCPLogo,
  },
  {
    name: "GitLab",
    certification: "Select Partner",
    Logo: GitLabLogo,
  },
  {
    name: "Veeam",
    certification: "ProPartner",
    Logo: null,
    image: veeamLogo,
  },
];

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
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-border/50 bg-card flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl"
              >
                {partner.Logo ? (
                  <partner.Logo className="w-16 h-16 md:w-20 md:h-20" />
                ) : partner.image ? (
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-20 h-12 object-contain"
                  />
                ) : null}
              </motion.div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
