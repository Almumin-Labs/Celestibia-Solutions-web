import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Best Practices for Cloud Migration in 2024",
    excerpt: "Learn the key strategies and common pitfalls to avoid when migrating your enterprise workloads to the cloud.",
    author: "Cloud Team",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Cloud",
    slug: "cloud-migration-best-practices-2024",
  },
  {
    title: "Kubernetes Security: A Comprehensive Guide",
    excerpt: "Everything you need to know about securing your Kubernetes clusters in production environments.",
    author: "DevOps Team",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "Security",
    slug: "kubernetes-security-guide",
  },
  {
    title: "Building Real-Time Data Pipelines with Apache Kafka",
    excerpt: "A step-by-step guide to implementing scalable real-time data streaming architectures.",
    author: "Data Engineering",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "Data",
    slug: "real-time-data-pipelines-kafka",
  },
  {
    title: "DevOps Automation: From CI/CD to GitOps",
    excerpt: "How to evolve your DevOps practices from traditional CI/CD to modern GitOps workflows.",
    author: "DevOps Team",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "DevOps",
    slug: "devops-automation-gitops",
  },
  {
    title: "AI-Powered Customer Support: Implementation Guide",
    excerpt: "How to build and deploy intelligent chatbots that actually improve customer satisfaction.",
    author: "AI Team",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "AI",
    slug: "ai-powered-customer-support",
  },
  {
    title: "Cost Optimization Strategies for AWS",
    excerpt: "Proven techniques to reduce your AWS bill by 30% without sacrificing performance.",
    author: "Cloud Team",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "Cloud",
    slug: "aws-cost-optimization",
  },
];

const categories = ["All", "Cloud", "DevOps", "Security", "Data", "AI"];

const Blog = () => {
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
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and insights 
              in cloud computing, DevOps, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-coral hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-coral/30 transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-coral transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-coral font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
