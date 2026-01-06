import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  getContacts,
  deleteContact,
  getBlogs,
  saveBlog,
  updateBlog,
  deleteBlog,
  ContactSubmission,
  BlogPost,
} from "@/lib/storage";
import {
  LogOut,
  Mail,
  Phone,
  Building,
  Calendar,
  Trash2,
  Plus,
  FileText,
  Users,
  Edit,
  Eye,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  const { isAdmin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [viewingBlog, setViewingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "Cloud",
    readTime: "5 min read",
    metaTitle: "",
    metaDescription: "",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
      return;
    }
    loadData();
  }, [isAdmin, navigate]);

  const loadData = () => {
    setContacts(getContacts());
    setBlogs(getBlogs());
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDeleteContact = (id: string) => {
    deleteContact(id);
    setContacts(getContacts());
    toast({
      title: "Contact Deleted",
      description: "The contact submission has been removed.",
    });
  };

  const handleDeleteBlog = (id: string) => {
    deleteBlog(id);
    setBlogs(getBlogs());
    toast({
      title: "Blog Deleted",
      description: "The blog post has been removed.",
    });
  };

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    saveBlog(blogForm);
    setBlogs(getBlogs());
    resetBlogForm();
    setShowBlogForm(false);
    toast({
      title: "Blog Created!",
      description: "Your blog post has been published.",
    });
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      category: blog.category,
      readTime: blog.readTime,
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      date: blog.date,
    });
    setShowBlogForm(true);
  };

  const handleUpdateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      updateBlog(editingBlog.id, blogForm);
      setBlogs(getBlogs());
      resetBlogForm();
      setEditingBlog(null);
      setShowBlogForm(false);
      toast({
        title: "Blog Updated!",
        description: "Your blog post has been updated.",
      });
    }
  };

  const resetBlogForm = () => {
    setBlogForm({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "Cloud",
      readTime: "5 min read",
      metaTitle: "",
      metaDescription: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
  };

  const cancelEdit = () => {
    setEditingBlog(null);
    setShowBlogForm(false);
    resetBlogForm();
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">
                Admin <span className="text-gradient">Dashboard</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage contact submissions and blog posts
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    Contact Submissions
                  </p>
                  <p className="text-2xl font-bold">{contacts.length}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Blog Posts</p>
                  <p className="text-2xl font-bold">{blogs.length}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="contacts" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="contacts" className="gap-2">
                <Users className="w-4 h-4" />
                Contacts
              </TabsTrigger>
              <TabsTrigger value="blogs" className="gap-2">
                <FileText className="w-4 h-4" />
                Blog Posts
              </TabsTrigger>
            </TabsList>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {contacts.length === 0 ? (
                  <div className="p-12 text-center text-muted-foreground">
                    No contact submissions yet.
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="p-6 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">
                              {contact.name}
                            </h3>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {contact.email}
                              </span>
                              {contact.phone && (
                                <span className="flex items-center gap-1">
                                  <Phone className="w-4 h-4" />
                                  {contact.phone}
                                </span>
                              )}
                              {contact.company && (
                                <span className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {contact.company}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(contact.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="mt-3 text-foreground">
                              {contact.message}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteContact(contact.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Blogs Tab */}
            <TabsContent value="blogs">
              <div className="mb-6">
                <Button
                  variant="gradient"
                  onClick={() => {
                    if (showBlogForm && !editingBlog) {
                      cancelEdit();
                    } else {
                      setEditingBlog(null);
                      resetBlogForm();
                      setShowBlogForm(true);
                    }
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {showBlogForm && !editingBlog ? "Cancel" : "New Blog Post"}
                </Button>
              </div>

              {/* Blog Form */}
              {showBlogForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-card rounded-xl border border-border p-6 mb-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">
                      {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
                    </h3>
                    {editingBlog && (
                      <Button variant="ghost" size="icon" onClick={cancelEdit}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <form
                    onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
                    className="space-y-4"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Title *
                        </label>
                        <Input
                          required
                          value={blogForm.title}
                          onChange={(e) =>
                            setBlogForm({ ...blogForm, title: e.target.value })
                          }
                          placeholder="Blog post title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Author *
                        </label>
                        <Input
                          required
                          value={blogForm.author}
                          onChange={(e) =>
                            setBlogForm({ ...blogForm, author: e.target.value })
                          }
                          placeholder="Author name"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Category
                        </label>
                        <select
                          value={blogForm.category}
                          onChange={(e) =>
                            setBlogForm({ ...blogForm, category: e.target.value })
                          }
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          <option value="Cloud">Cloud</option>
                          <option value="DevOps">DevOps</option>
                          <option value="Security">Security</option>
                          <option value="Data">Data</option>
                          <option value="AI">AI</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Read Time
                        </label>
                        <Input
                          value={blogForm.readTime}
                          onChange={(e) =>
                            setBlogForm({ ...blogForm, readTime: e.target.value })
                          }
                          placeholder="e.g., 5 min read"
                        />
                      </div>
                    </div>

                    {/* Meta Fields */}
                    <div className="border-t border-border pt-4 mt-4">
                      <h4 className="font-medium mb-3 text-sm text-muted-foreground">
                        SEO Meta Tags
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Meta Title
                          </label>
                          <Input
                            value={blogForm.metaTitle}
                            onChange={(e) =>
                              setBlogForm({ ...blogForm, metaTitle: e.target.value })
                            }
                            placeholder="SEO title (defaults to blog title)"
                            maxLength={60}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            {blogForm.metaTitle.length}/60 characters
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Meta Description
                          </label>
                          <Input
                            value={blogForm.metaDescription}
                            onChange={(e) =>
                              setBlogForm({
                                ...blogForm,
                                metaDescription: e.target.value,
                              })
                            }
                            placeholder="SEO description (defaults to excerpt)"
                            maxLength={160}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            {blogForm.metaDescription.length}/160 characters
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Excerpt *
                      </label>
                      <Textarea
                        required
                        value={blogForm.excerpt}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, excerpt: e.target.value })
                        }
                        placeholder="Brief description of the blog post"
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Content *
                      </label>
                      <Textarea
                        required
                        value={blogForm.content}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, content: e.target.value })
                        }
                        placeholder="Full blog post content..."
                        className="min-h-[200px]"
                      />
                    </div>
                    <div className="flex gap-3">
                      {editingBlog && (
                        <Button type="button" variant="outline" onClick={cancelEdit}>
                          Cancel
                        </Button>
                      )}
                      <Button type="submit" variant="gradient">
                        {editingBlog ? "Update Blog Post" : "Publish Blog Post"}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* View Blog Modal */}
              {viewingBlog && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setViewingBlog(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-card rounded-xl border border-border p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">
                        {viewingBlog.category}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setViewingBlog(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <h2 className="font-heading text-2xl font-bold mb-2">
                      {viewingBlog.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      By {viewingBlog.author} · {viewingBlog.date} ·{" "}
                      {viewingBlog.readTime}
                    </p>
                    {viewingBlog.metaTitle && (
                      <div className="mb-2 p-2 bg-muted rounded text-sm">
                        <strong>Meta Title:</strong> {viewingBlog.metaTitle}
                      </div>
                    )}
                    {viewingBlog.metaDescription && (
                      <div className="mb-4 p-2 bg-muted rounded text-sm">
                        <strong>Meta Description:</strong>{" "}
                        {viewingBlog.metaDescription}
                      </div>
                    )}
                    <p className="text-muted-foreground italic mb-4">
                      {viewingBlog.excerpt}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="whitespace-pre-wrap">{viewingBlog.content}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button asChild variant="outline">
                        <Link to={`/blog/${viewingBlog.slug}`} target="_blank">
                          View on Site
                        </Link>
                      </Button>
                      <Button
                        variant="gradient"
                        onClick={() => {
                          handleEditBlog(viewingBlog);
                          setViewingBlog(null);
                        }}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Blog List */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {blogs.length === 0 ? (
                  <div className="p-12 text-center text-muted-foreground">
                    No blog posts yet.
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="p-6 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">
                                {blog.category}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {blog.date}
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg">{blog.title}</h3>
                            <p className="text-muted-foreground mt-1">
                              {blog.excerpt}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              By {blog.author} · {blog.readTime}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setViewingBlog(blog)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditBlog(blog)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteBlog(blog.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AdminDashboard;
