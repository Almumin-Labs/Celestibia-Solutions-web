import { supabase } from "@/integrations/supabase/client";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  category: string;
  slug: string;
  image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

// Contacts
export const getContacts = async (): Promise<ContactSubmission[]> => {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });
  
  if (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
  
  return data || [];
};

export const saveContact = async (contact: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): Promise<ContactSubmission | null> => {
  const { data, error } = await supabase
    .from("contacts")
    .insert({
      name: contact.name,
      email: contact.email,
      company: contact.company || null,
      phone: contact.phone || null,
      message: contact.message,
    })
    .select()
    .single();
  
  if (error) {
    console.error("Error saving contact:", error);
    return null;
  }
  
  return data;
};

export const deleteContact = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", id);
  
  if (error) {
    console.error("Error deleting contact:", error);
    return false;
  }
  
  return true;
};

// Blogs
export const getBlogs = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });
  
  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
  
  return data || [];
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  
  if (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
  
  return data;
};

export const saveBlog = async (blog: {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  category: string;
  image_url?: string;
  meta_title?: string;
  meta_description?: string;
}): Promise<BlogPost | null> => {
  const slug = blog.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  
  const { data, error } = await supabase
    .from("blogs")
    .insert({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      date: blog.date,
      read_time: blog.read_time,
      category: blog.category,
      slug,
      image_url: blog.image_url || null,
      meta_title: blog.meta_title || null,
      meta_description: blog.meta_description || null,
    })
    .select()
    .single();
  
  if (error) {
    console.error("Error saving blog:", error);
    return null;
  }
  
  return data;
};

export const updateBlog = async (id: string, blog: Partial<{
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  category: string;
  image_url: string;
  meta_title: string;
  meta_description: string;
}>): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from("blogs")
    .update(blog)
    .eq("id", id)
    .select()
    .single();
  
  if (error) {
    console.error("Error updating blog:", error);
    return null;
  }
  
  return data;
};

export const deleteBlog = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", id);
  
  if (error) {
    console.error("Error deleting blog:", error);
    return false;
  }
  
  return true;
};
