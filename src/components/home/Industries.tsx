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
import { useABTest } from "@/hooks/useABTest";
import { CircuitBoard, WaveGradient } from "@/components/graphics/InfraCloudStyle";

const industries = [
  { icon: Building2, name: "Banking & Finance", gradient: "from-blue-500 to-cyan-500" },
  { icon: Stethoscope, name: "Healthcare", gradient: "from-green-500 to-emerald-500" },
  { icon: ShoppingCart, name: "E-Commerce & Retail", gradient: "from-orange-500 to-yellow-500" },
  { icon: Factory, name: "Manufacturing", gradient: "from-slate-500 to-zinc-500" },
  { icon: Truck, name: "Logistics", gradient: "from-purple-500 to-pink-500" },
  { icon: GraduationCap, name: "EdTech", gradient: "from-violet-500 to-purple-500" },
  { icon: Landmark, name: "Government", gradient: "from-red-500 to-orange-500" },
  { icon: Plane, name: "Travel & Hospitality", gradient: "from-cyan-500 to-blue-500" },
];

export const Industries = () => {
  const { getVariantValue } = useABTest('industries_headline');
  const headline = getVariantValue() || 'Transforming Industries with Cloud Innovation';

  return (
    <section className="py-24 bg-gradient-warm text-primary-foreground overflow-hidden relative">
      {/* InfraCloud-style backgrounds */}
      <CircuitBoard />
      <WaveGradient />
      
      {/* Decorative Elements */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#F97316]/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#8B5CF6]/20 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-coral text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline.includes('Transforming') ? (
              <>
                Transforming Industries with{" "}
                <span className="bg-gradient-to-r from-coral via-orange to-coral-light bg-clip-text text-transparent">Cloud Innovation</span>
              </>
            ) : (
              <>
                Industries We{" "}
                <span className="bg-gradient-to-r from-coral via-orange to-coral-light bg-clip-text text-transparent">Empower</span>
              </>
            )}
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
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <industry.icon className="w-7 h-7 text-white drop-shadow-md" />
              </div>
              <h3 className="font-heading font-bold text-lg">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
