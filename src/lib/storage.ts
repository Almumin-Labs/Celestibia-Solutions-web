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

export interface AdminUser {
  id: string;
  user_id: string;
  email: string;
  role: "admin" | "super_admin";
  created_at: string;
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

// Admin Management
export const getAdminUsers = async (): Promise<AdminUser[]> => {
  // First get user roles
  const { data: roles, error: rolesError } = await supabase
    .from("user_roles")
    .select("*")
    .order("created_at", { ascending: true });
  
  if (rolesError) {
    console.error("Error fetching admin users:", rolesError);
    return [];
  }

  if (!roles || roles.length === 0) {
    return [];
  }

  // Get emails from auth.users via admin API (we'll use a workaround)
  // Since we can't directly query auth.users, we'll need to get user info differently
  // For now, we'll return what we have and fetch emails separately
  const adminUsers: AdminUser[] = [];
  
  for (const role of roles) {
    // We'll need to get the email from the current session if it's the logged-in user
    // Otherwise, we'll store/retrieve it differently
    const { data: { user } } = await supabase.auth.getUser();
    
    // For the current user, we can get their email
    if (user && role.user_id === user.id) {
      adminUsers.push({
        id: role.id,
        user_id: role.user_id,
        email: user.email || "Unknown",
        role: role.role as "admin" | "super_admin",
        created_at: role.created_at
      });
    } else {
      // For other users, we'll show the user_id (in production, you'd store email in a profiles table)
      adminUsers.push({
        id: role.id,
        user_id: role.user_id,
        email: `User ${role.user_id.slice(0, 8)}...`,
        role: role.role as "admin" | "super_admin",
        created_at: role.created_at
      });
    }
  }
  
  return adminUsers;
};

export const addAdminRole = async (
  email: string, 
  role: "admin" | "super_admin"
): Promise<{ success: boolean; error?: string }> => {
  // First, we need to find the user by email
  // Since we can't query auth.users directly, the user must exist and have signed up
  // We'll use a different approach - check if user exists by attempting to get their session
  
  // For this to work, the user must already be signed up
  // We'll need to use an edge function or store user emails in a profiles table
  // For now, we'll return an error explaining this limitation
  
  return { 
    success: false, 
    error: "To add an admin, they must first sign up at /admin/signup. Then provide their user ID." 
  };
};

export const addAdminRoleByUserId = async (
  userId: string, 
  role: "admin" | "super_admin"
): Promise<{ success: boolean; error?: string }> => {
  const { error } = await supabase
    .from("user_roles")
    .insert({ user_id: userId, role });
  
  if (error) {
    console.error("Error adding admin role:", error);
    return { success: false, error: error.message };
  }
  
  return { success: true };
};

export const removeAdminRole = async (userId: string): Promise<boolean> => {
  const { error } = await supabase
    .from("user_roles")
    .delete()
    .eq("user_id", userId);
  
  if (error) {
    console.error("Error removing admin role:", error);
    return false;
  }
  
  return true;
};

export const sendAdminPasswordReset = async (email: string): Promise<boolean> => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/admin/reset-password`,
  });
  
  if (error) {
    console.error("Error sending password reset:", error);
    return false;
  }
  
  return true;
};