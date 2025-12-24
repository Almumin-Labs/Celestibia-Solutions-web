import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To help organizations leverage technology to unlock efficiency, agility, and new possibilities through innovative cloud solutions.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted partner for enterprises embarking on their digital transformation journey worldwide.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Innovation, Excellence, Integrity, and Client Success drive everything we do at Celestibia Solutions.",
  },
];

const team = [
  { role: "Cloud Architects", count: "15+" },
  { role: "DevOps Engineers", count: "20+" },
  { role: "Data Scientists", count: "10+" },
  { role: "Security Experts", count: "8+" },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Where Innovation Meets{" "}
              <span className="text-gradient">Precision</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Celestibia Solutions, we are driven by a passion for empowering businesses 
              through smart technology, seamless design, and scalable engineering.
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
                We Blend Creativity with Technical Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of expert developers, problem-solvers, and strategists work closely 
                with clients to turn challenges into opportunities. Whether it's building 
                intuitive web and mobile applications, modernizing legacy systems, enhancing 
                cloud capabilities, or automating workflows — we deliver solutions with speed, 
                security, and simplicity at the core.
              </p>
              <div className="space-y-4">
                {[
                  "Custom Software Development",
                  "Cloud & DevOps Solutions",
                  "Web & Mobile App Engineering",
                  "Automation & Process Optimization",
                  "Secure, Reliable & High-Performance Systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral" />
                    <span className="font-medium">{item}</span>
                  </div>
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
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border text-center"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {member.count}
                  </div>
                  <div className="text-muted-foreground">{member.role}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
