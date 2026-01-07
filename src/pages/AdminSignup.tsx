import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Weak password",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Signup failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Signup successful",
      description:
        "Your account has been created. Admin access will be granted after approval.",
    });

    navigate("/admin");
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-card p-8 rounded-xl border shadow">
            <h1 className="text-2xl font-bold text-center mb-2">
              Admin Signup
            </h1>
            <p className="text-center text-muted-foreground mb-6">
              Create an account. Admin access requires approval.
            </p>

            <form onSubmit={handleSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating account
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/admin" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AdminSignup;
