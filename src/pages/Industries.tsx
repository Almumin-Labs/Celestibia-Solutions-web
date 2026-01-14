import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  Factory, 
  Truck, 
  GraduationCap,
  Landmark,
  Plane,
  CheckCircle
} from "lucide-react";
import { CloudHeroGraphics } from "@/components/graphics/HeroGraphics";

const industries = [
  {
    icon: Building2,
    name: "Banking & Financial Services",
    description: "Secure, compliant cloud infrastructure for banks, investment firms, and fintech startups. PCI-DSS, SOC2, and RBI compliance expertise.",
    useCases: [
      "Core Banking System Modernization",
      "Real-time Fraud Detection",
      "Regulatory Compliance Automation",
      "Digital Payment Platforms",
    ],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Life Sciences",
    description: "HIPAA-compliant solutions for hospitals, diagnostics, and healthtech platforms with real-time data processing capabilities.",
    useCases: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Medical IoT Data Processing",
      "Clinical Trial Management",
    ],
    color: "from-green-600 to-emerald-400",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    description: "Scalable, high-performance platforms that handle seasonal traffic spikes with seamless Microsoft/SAP ERP integrations.",
    useCases: [
      "Omnichannel Commerce Platforms",
      "Inventory Management Systems",
      "Personalization Engines",
      "Supply Chain Optimization",
    ],
    color: "from-orange to-coral",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Smart factory solutions with IoT integration, predictive maintenance, and real-time production monitoring.",
    useCases: [
      "Industrial IoT Platforms",
      "Predictive Maintenance",
      "Quality Control Automation",
      "Digital Twin Implementation",
    ],
    color: "from-slate-600 to-slate-400",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description: "End-to-end visibility solutions with real-time tracking, route optimization, and warehouse management systems.",
    useCases: [
      "Fleet Management Systems",
      "Route Optimization",
      "Warehouse Automation",
      "Last-Mile Delivery Tracking",
    ],
    color: "from-amber-600 to-yellow-400",
  },
  {
    icon: GraduationCap,
    name: "EdTech",
    description: "Scalable learning management systems, virtual classrooms, and AI-powered educational tools.",
    useCases: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Assessment & Analytics",
      "Content Delivery Networks",
    ],
    color: "from-purple to-purple",
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    description: "Secure, citizen-centric digital services with data sovereignty and compliance requirements.",
    useCases: [
      "Citizen Service Portals",
      "Document Management Systems",
      "Smart City Initiatives",
      "Public Safety Platforms",
    ],
    color: "from-red-600 to-rose-400",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Booking engines, customer experience platforms, and operational optimization for hotels and airlines.",
    useCases: [
      "Booking & Reservation Systems",
      "Customer Experience Platforms",
      "Revenue Management",
      "Loyalty Programs",
    ],
    color: "from-cyan-600 to-teal-400",
  },
];

const IndustriesPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <CloudHeroGraphics />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6"
            >
              <Building2 className="w-10 h-10 text-white" />
            </motion.div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4 ml-4">
              Industries
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Industries with{" "}
              <span className="text-gradient">Cloud Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions power digital transformation across diverse sectors, 
              from financial services to healthcare and manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for every sector's unique challenges
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-background rounded-2xl border border-border p-8 hover:shadow-2xl hover:border-coral/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-3 group-hover:text-coral transition-colors">{industry.name}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-coral uppercase tracking-wide">
                      Common Use Cases
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-coral flex-shrink-0" />
                          <span className="text-sm text-foreground">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default IndustriesPage;
