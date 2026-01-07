import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";

interface AdminAuthContextType {
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isLoading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .maybeSingle();
    
    if (error) {
      console.error("Error checking admin role:", error);
      return { isAdmin: false, isSuperAdmin: false };
    }
    
    if (!data) {
      return { isAdmin: false, isSuperAdmin: false };
    }

    const role = data.role;
    return {
      isAdmin: role === "admin" || role === "super_admin",
      isSuperAdmin: role === "super_admin"
    };
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Defer the admin check with setTimeout to avoid deadlock
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id).then(({ isAdmin, isSuperAdmin }) => {
              setIsAdmin(isAdmin);
              setIsSuperAdmin(isSuperAdmin);
            });
          }, 0);
        } else {
          setIsAdmin(false);
          setIsSuperAdmin(false);
        }
        
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id).then(({ isAdmin, isSuperAdmin }) => {
          setIsAdmin(isAdmin);
          setIsSuperAdmin(isSuperAdmin);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message };
    }

    if (data.user) {
      const { isAdmin: hasAdminRole, isSuperAdmin: hasSuperAdminRole } = await checkAdminRole(data.user.id);
      if (!hasAdminRole) {
        await supabase.auth.signOut();
        return { error: "You don't have admin access. Contact the administrator." };
      }
      setIsAdmin(true);
      setIsSuperAdmin(hasSuperAdminRole);
    }

    return { error: null };
  };


  const signup = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/admin/dashboard`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });

    if (error) {
      return { error: error.message };
    }

    // After signup, we need to add the admin role
    // This is done via the first admin setup - in production you'd have an invite system
    if (data.user) {
      // Check if there are any admins yet
      const { count } = await supabase
        .from("user_roles")
        .select("*", { count: "exact", head: true });
      
      // If no admins exist, make this user a super_admin
      if (count === 0) {
        const { error: roleError } = await supabase
          .from("user_roles")
          .insert({ user_id: data.user.id, role: "super_admin" });
        
        if (roleError) {
          console.error("Error assigning admin role:", roleError);
          return { error: "Account created but could not assign admin role." };
        }
        setIsAdmin(true);
        setIsSuperAdmin(true);
      }
    }

    return { error: null };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setIsSuperAdmin(false);
    setUser(null);
    setSession(null);
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, isSuperAdmin, isLoading, user, login, signup, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
};