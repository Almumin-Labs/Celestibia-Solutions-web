import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Target, Eye, Heart, Lightbulb, TrendingUp, Award, Users } from "lucide-react";
import {
  IsometricIcons,
  HexagonPattern,
  WaveGradient,
  ConnectedNetwork,
  CircuitBoard,
} from "@/components/graphics/InfraCloudStyle";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To help organizations leverage technology to unlock efficiency, agility, and new possibilities. We don't just build products — we build partnerships, trust, and long-lasting value.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted partner for enterprises embarking on their digital transformation journey, shaping the future one solution at a time.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Innovation, Excellence, Integrity, and Client Success drive everything we do at Celesibia Solutions.",
  },
];

const beliefs = [
  { icon: Lightbulb, text: "Technology should simplify business" },
  { icon: TrendingUp, text: "Solutions must scale with growth" },
  { icon: Award, text: "Innovation is key to staying ahead" },
  { icon: Users, text: "Client success is our ultimate achievement" },
];

const team = [
  { role: "Cloud Architects", count: "15+" },
  { role: "DevOps Engineers", count: "20+" },
  { role: "Data Scientists", count: "10+" },
  { role: "Security Experts", count: "8+" },
];

const whatWeDo = [
  "Custom Software Development",
  "Cloud & DevOps Solutions",
  "Web & Mobile App Engineering",
  "Automation & Process Optimization",
  "Secure, Reliable & High-Performance Systems",
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        {/* InfraCloud-style backgrounds */}
        <HexagonPattern />
        <IsometricIcons />

        {/* Animated orbs - Enhanced */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-coral/40 to-purple/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.35, 0.2],
            y: [0, -20, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-purple/40 to-cyan-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-orange/30 to-coral/20 rounded-full blur-[100px]"
        />

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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-orange mb-6 shadow-xl"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-coral text-sm font-medium mb-4 ml-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Where Innovation Meets <span className="text-gradient">Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to Celesibia Solutions — where innovation meets precision, and ideas transform into impactful
              digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                We Blend Creativity with <span className="text-gradient">Technical Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Celesibia Solutions, we are driven by a passion for empowering businesses through smart technology,
                seamless design, and scalable engineering. We blend creativity with technical excellence to deliver
                software solutions that are not just functional, but future-ready.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of expert developers, problem-solvers, and strategists work closely with clients to turn
                challenges into opportunities. Whether it's building intuitive web and mobile applications, modernizing
                legacy systems, enhancing cloud capabilities, or automating workflows — we deliver solutions with speed,
                security, and simplicity at the core.
              </p>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-background border border-border text-center hover:border-coral/30 hover:shadow-xl transition-all"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">{member.count}</div>
                  <div className="text-muted-foreground">{member.role}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Believe</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-card border border-border text-center group hover:border-coral/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-coral to-orange flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <belief.icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <p className="font-medium text-foreground">{belief.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-background border border-border text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coral to-orange flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <CircuitBoard />
        <WaveGradient />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#F97316]/30 to-[#8B5CF6]/20 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl text-muted-foreground mb-4">Let's create something extraordinary together. 🚀</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Celesibia Solutions</span> — Shaping the future, one solution at a time.
            </h2>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
