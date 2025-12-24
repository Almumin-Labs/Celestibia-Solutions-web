export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
}

const CONTACTS_KEY = "celestibia_contacts";
const BLOGS_KEY = "celestibia_blogs";

// Default blog posts
const defaultBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Best Practices for Cloud Migration in 2024",
    excerpt: "Learn the key strategies and common pitfalls to avoid when migrating your enterprise workloads to the cloud.",
    content: "Cloud migration is a complex process that requires careful planning and execution...",
    author: "Cloud Team",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Cloud",
    slug: "cloud-migration-best-practices-2024",
  },
  {
    id: "2",
    title: "Kubernetes Security: A Comprehensive Guide",
    excerpt: "Everything you need to know about securing your Kubernetes clusters in production environments.",
    content: "Kubernetes security is critical for protecting your containerized applications...",
    author: "DevOps Team",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "Security",
    slug: "kubernetes-security-guide",
  },
  {
    id: "3",
    title: "Building Real-Time Data Pipelines with Apache Kafka",
    excerpt: "A step-by-step guide to implementing scalable real-time data streaming architectures.",
    content: "Apache Kafka is the backbone of modern real-time data processing...",
    author: "Data Engineering",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "Data",
    slug: "real-time-data-pipelines-kafka",
  },
  {
    id: "4",
    title: "DevOps Automation: From CI/CD to GitOps",
    excerpt: "How to evolve your DevOps practices from traditional CI/CD to modern GitOps workflows.",
    content: "GitOps represents the next evolution in DevOps practices...",
    author: "DevOps Team",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "DevOps",
    slug: "devops-automation-gitops",
  },
  {
    id: "5",
    title: "AI-Powered Customer Support: Implementation Guide",
    excerpt: "How to build and deploy intelligent chatbots that actually improve customer satisfaction.",
    content: "AI chatbots are transforming customer support operations...",
    author: "AI Team",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "AI",
    slug: "ai-powered-customer-support",
  },
  {
    id: "6",
    title: "Cost Optimization Strategies for AWS",
    excerpt: "Proven techniques to reduce your AWS bill by 30% without sacrificing performance.",
    content: "AWS cost optimization requires a multi-faceted approach...",
    author: "Cloud Team",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "Cloud",
    slug: "aws-cost-optimization",
  },
];

// Initialize default blogs if none exist
const initializeBlogs = () => {
  const existing = localStorage.getItem(BLOGS_KEY);
  if (!existing) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(defaultBlogs));
  }
};

// Contacts
export const getContacts = (): ContactSubmission[] => {
  const data = localStorage.getItem(CONTACTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveContact = (contact: Omit<ContactSubmission, "id" | "createdAt">) => {
  const contacts = getContacts();
  const newContact: ContactSubmission = {
    ...contact,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  contacts.unshift(newContact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return newContact;
};

export const deleteContact = (id: string) => {
  const contacts = getContacts().filter((c) => c.id !== id);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};

// Blogs
export const getBlogs = (): BlogPost[] => {
  initializeBlogs();
  const data = localStorage.getItem(BLOGS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveBlog = (blog: Omit<BlogPost, "id" | "slug">) => {
  const blogs = getBlogs();
  const slug = blog.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const newBlog: BlogPost = {
    ...blog,
    id: Date.now().toString(),
    slug,
  };
  blogs.unshift(newBlog);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
  return newBlog;
};

export const updateBlog = (id: string, blog: Partial<BlogPost>) => {
  const blogs = getBlogs();
  const index = blogs.findIndex((b) => b.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...blog };
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    return blogs[index];
  }
  return null;
};

export const deleteBlog = (id: string) => {
  const blogs = getBlogs().filter((b) => b.id !== id);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};
