import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Clock, Loader2, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { getBlogs, BlogPost } from "@/lib/storage";
import { HexagonPattern, IsometricIcons } from "@/components/graphics/InfraCloudStyle";

const categories = ["All", "Cloud", "DevOps", "Security", "Data", "AI"];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogPosts(blogs);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HexagonPattern />
        <IsometricIcons className="opacity-30" />
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-[#F97316]/20 to-[#8B5CF6]/10 rounded-full blur-[100px]" 
        />
        
        <div className="container mx-auto px-4 relative z-10">
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
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-coral hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-coral" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No blog posts found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-coral/30 transition-all duration-300 group"
                >
                  {/* Featured Image */}
                  <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-video">
                    {post.image_url ? (
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                      </div>
                    )}
                    {/* Category overlay */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      {post.category}
                    </span>
                  </Link>

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
                        {post.read_time}
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
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
