import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  Factory, 
  Truck, 
  GraduationCap,
  Landmark,
  Plane
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Banking & Finance", color: "bg-blue-500/10 text-blue-600" },
  { icon: Stethoscope, name: "Healthcare", color: "bg-green-500/10 text-green-600" },
  { icon: ShoppingCart, name: "E-Commerce & Retail", color: "bg-orange-500/10 text-orange-600" },
  { icon: Factory, name: "Manufacturing", color: "bg-slate-500/10 text-slate-600" },
  { icon: Truck, name: "Logistics", color: "bg-amber-500/10 text-amber-600" },
  { icon: GraduationCap, name: "EdTech", color: "bg-purple-500/10 text-purple-600" },
  { icon: Landmark, name: "Government", color: "bg-red-500/10 text-red-600" },
  { icon: Plane, name: "Travel & Hospitality", color: "bg-cyan-500/10 text-cyan-600" },
];

export const Industries = () => {
  return (
    <section className="py-24 bg-gradient-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Industries with{" "}
            <span className="text-coral">Cloud Innovation</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Our solutions power digital transformation across diverse sectors, 
            from financial services to healthcare and beyond.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-coral/30 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
