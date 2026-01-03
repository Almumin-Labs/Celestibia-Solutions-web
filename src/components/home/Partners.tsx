import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import veeamLogo from "@/assets/veeam-logo.jpg";
import { useABTest } from "@/hooks/useABTest";

// Import original logos
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import azureSvg from "@/assets/logos/azure.svg";
const partners = [
  {
    name: "AWS",
    certification: "Select Consulting Partner",
    logo: awsSvg,
  },
  {
    name: "Microsoft Azure",
    certification: "Solutions Partner",
    logo: azureSvg,
  },
  {
    name: "Google Cloud",
    certification: "Certified Partner",
    logo: gcpLogo,
  },
  {
    name: "Veeam",
    certification: "ProPartner",
    logo: veeamLogo,
  },
];

export const Partners = () => {
  const { getVariantValue } = useABTest('partners_headline');
  const headline = getVariantValue() || 'Partners & Certifications';

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
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for technical excellence and certified expertise across major cloud platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.08, y: -8 }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 border-border/50 bg-card flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{partner.name}</h3>
              <p className="text-xs text-muted-foreground">{partner.certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};