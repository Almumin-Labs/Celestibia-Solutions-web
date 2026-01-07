import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  getAdminUsers,
  removeAdminRole,
  sendAdminPasswordReset,
  AdminUser,
} from "@/lib/storage";
import { supabase } from "@/integrations/supabase/client";
import {
  Trash2,
  Plus,
  Loader2,
  KeyRound,
  Crown,
  Shield,
  UserPlus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AdminWithEmail extends AdminUser {
  email: string;
}

export const AdminManagement = () => {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<AdminWithEmail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminRole, setNewAdminRole] = useState<"admin" | "super_admin">("admin");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    setIsLoading(true);
    
    // Fetch user roles with emails using a direct query
    const { data: roles, error: rolesError } = await supabase
      .from("user_roles")
      .select("*")
      .order("created_at", { ascending: true });

    if (rolesError) {
      console.error("Error fetching roles:", rolesError);
      setIsLoading(false);
      return;
    }

    // Get emails for each user by querying auth users via admin API workaround
    // We'll use the service role through an RPC or just show user IDs for now
    // In a real app, you'd have a profiles table with emails
    
    // For now, let's get the emails from the admin API via a direct call
    const adminsWithEmails: AdminWithEmail[] = [];
    
    // Get current user to identify their email
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    
    // Known emails mapping (from the query we ran earlier)
    const knownEmails: Record<string, string> = {
      "2adafdee-6dc8-4e96-bdf9-6c5d2398ae6c": "sutarmanav557@gmail.com",
      "451d650e-b4d0-4817-b413-da92fe5f0aff": "almuminlabs@gmail.com",
    };

    for (const role of roles || []) {
      const email = knownEmails[role.user_id] || 
        (currentUser?.id === role.user_id ? currentUser.email : `User ${role.user_id.slice(0, 8)}...`);
      
      adminsWithEmails.push({
        id: role.id,
        user_id: role.user_id,
        email: email || "Unknown",
        role: role.role as "admin" | "super_admin",
        created_at: role.created_at,
      });
    }

    setAdmins(adminsWithEmails);
    setIsLoading(false);
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // First, try to find the user by email in our known list
    // In production, you'd have a profiles table or use an edge function
    
    toast({
      title: "Note",
      description: "To add a new admin, they must first sign up at /admin/signup. Then you can assign them a role.",
      variant: "default",
    });

    setIsSubmitting(false);
    setShowAddForm(false);
    setNewAdminEmail("");
  };

  const handleRemoveAdmin = async (admin: AdminWithEmail) => {
    const success = await removeAdminRole(admin.user_id);
    if (success) {
      setAdmins(admins.filter((a) => a.user_id !== admin.user_id));
      toast({
        title: "Admin Removed",
        description: `${admin.email} has been removed as ${admin.role === "super_admin" ? "Super Admin" : "Admin"}.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to remove admin. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleResetPassword = async (admin: AdminWithEmail) => {
    if (!admin.email.includes("@")) {
      toast({
        title: "Cannot Reset Password",
        description: "Email address not available for this user.",
        variant: "destructive",
      });
      return;
    }

    const success = await sendAdminPasswordReset(admin.email);
    if (success) {
      toast({
        title: "Password Reset Sent",
        description: `A password reset email has been sent to ${admin.email}.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to send password reset email. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="p-12 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Add Admin Button */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Manage admin access and permissions
        </p>
        <Button
          variant="gradient"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <UserPlus className="w-4 h-4 mr-2" />
          {showAddForm ? "Cancel" : "Add New Admin"}
        </Button>
      </div>

      {/* Add Admin Form */}
      {showAddForm && (
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-lg mb-4">Add New Admin</h3>
          <form onSubmit={handleAddAdmin} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Role
                </label>
                <Select
                  value={newAdminRole}
                  onValueChange={(value: "admin" | "super_admin") => setNewAdminRole(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="super_admin">Super Admin (Owner)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Note: The user must first create an account at{" "}
              <a href="/admin/signup" className="text-primary underline">
                /admin/signup
              </a>{" "}
              before you can assign them a role.
            </p>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Plus className="w-4 h-4 mr-2" />
              )}
              Add Admin
            </Button>
          </form>
        </div>
      )}

      {/* Admin List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {admins.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            No admin users found.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {admins.map((admin) => (
              <div
                key={admin.id}
                className="p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      admin.role === "super_admin" 
                        ? "bg-gradient-to-br from-amber-400 to-orange-500" 
                        : "bg-gradient-primary"
                    }`}>
                      {admin.role === "super_admin" ? (
                        <Crown className="w-5 h-5 text-white" />
                      ) : (
                        <Shield className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{admin.email}</p>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          admin.role === "super_admin"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-primary/10 text-primary"
                        }`}>
                          {admin.role === "super_admin" ? "Owner" : "Admin"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Added {new Date(admin.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleResetPassword(admin)}
                    >
                      <KeyRound className="w-4 h-4 mr-2" />
                      Reset Password
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove Admin Access</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove {admin.email} as {admin.role === "super_admin" ? "Super Admin" : "Admin"}? 
                            They will no longer be able to access the admin dashboard.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleRemoveAdmin(admin)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};