import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { 
  Brain, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Eye,
  FileText,
  Lightbulb,
  Cpu,
  Layers,
  Settings,
  Bot,
  Wand2,
  Network,
  ScanEye,
  Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIMLHeroGraphics } from "@/components/graphics/HeroGraphics";

// Import illustrations
import modelServing from "@/assets/illustrations/model-serving.svg";
import modelTraining from "@/assets/illustrations/model-training-infrastructure.svg";
import modelObservability from "@/assets/illustrations/model-observability-feedback-loops.svg";
import modelRegistry from "@/assets/illustrations/model-registry-metadata-stores.svg";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Custom intelligent virtual assistants for customer support, internal tools, and lead generation — integrated with OpenAI, Dialogflow, or Rasa."
  },
  {
    icon: Wand2,
    title: "Generative AI Solutions",
    description: "Implementation of models like GPT, DALL·E, and Claude for content generation, summarization, translation, and automation."
  },
  {
    icon: Network,
    title: "Machine Learning Model Development",
    description: "Supervised and unsupervised model training for predictions, classification, recommendation systems, and more."
  },
  {
    icon: Layers,
    title: "AI Integration Services",
    description: "Embedding AI into existing applications, CRMs, ERPs, or customer workflows."
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and OCR using TensorFlow, OpenCV, and PyTorch."
  },
  {
    icon: Languages,
    title: "Natural Language Processing (NLP)",
    description: "Sentiment analysis, named entity recognition, text classification, and summarization."
  },
  {
    icon: Cpu,
    title: "Data Engineering & Model Ops",
    description: "Data pipelines, model deployment, and monitoring using MLFlow, Airflow, and SageMaker."
  },
  {
    icon: Lightbulb,
    title: "AI/ML Strategy Consulting",
    description: "Advisory on use cases, feasibility, and roadmap to adopt AI in your enterprise."
  },
];

const useCases = [
  { title: "Customer Service Automation", description: "24/7 AI support with 80% query resolution" },
  { title: "Predictive Maintenance", description: "Reduce downtime by 40% with ML predictions" },
  { title: "Document Processing", description: "Extract insights from documents 10x faster" },
  { title: "Recommendation Engines", description: "Increase engagement with personalized suggestions" },
];

const AIMLServices = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <AIMLHeroGraphics />
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-6"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI & ML{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Unlock the power of artificial intelligence to drive innovation, 
              automate processes, and create intelligent experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI/ML Illustrations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ML Infrastructure Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end machine learning infrastructure for production-grade AI systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { img: modelTraining, title: "Model Training Infrastructure", desc: "Scalable training pipelines with GPU clusters" },
              { img: modelServing, title: "Model Serving", desc: "Low-latency inference at scale" },
              { img: modelRegistry, title: "Model Registry & Metadata", desc: "Version control and experiment tracking" },
              { img: modelObservability, title: "Observability & Feedback Loops", desc: "Monitor model performance and drift" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-contain mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              AI/ML Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From chatbots to computer vision, we deliver cutting-edge AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              AI Use Cases
            </h2>
            <p className="text-muted-foreground">
              Real-world applications driving business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <h3 className="font-heading text-lg font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "AI Models Deployed" },
              { value: "80%", label: "Automation Rate" },
              { value: "10x", label: "Faster Processing" },
              { value: "95%", label: "Model Accuracy" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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

export default AIMLServices;