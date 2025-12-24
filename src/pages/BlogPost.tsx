import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogs, BlogPost as BlogPostType } from "@/lib/storage";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const blogs = getBlogs();
    const foundPost = blogs.find((b) => b.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      // Get related posts from same category
      const related = blogs
        .filter((b) => b.category === foundPost.category && b.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    } else {
      navigate("/blog");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-2xl border border-border p-8 md:p-12"
            >
              {/* Excerpt/Intro */}
              <p className="text-lg text-muted-foreground mb-8 pb-8 border-b border-border italic">
                {post.excerpt}
              </p>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>

              {/* Tags & Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Category:</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16"
              >
                <h2 className="font-heading text-2xl font-bold mb-8">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-background rounded-xl border border-border p-6 hover:shadow-lg hover:border-coral/30 transition-all"
                    >
                      <span className="inline-block px-2 py-1 rounded-full bg-secondary text-xs font-medium mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-semibold group-hover:text-coral transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-dark text-primary-foreground text-center"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">
                Need Help With Your Project?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Our experts are ready to help you implement the solutions discussed in this article.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPostPage;
