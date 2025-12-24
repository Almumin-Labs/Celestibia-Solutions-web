import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { KeyRound, Mail, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setEmailSent(true);
      toast({
        title: "Check your email",
        description: "We've sent you a password reset link.",
      });
    }

    setIsLoading(false);
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-hero min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-4">
                  <KeyRound className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-heading text-2xl font-bold">Reset Password</h1>
                <p className="text-muted-foreground mt-2">
                  {emailSent
                    ? "Check your email for the reset link"
                    : "Enter your email to receive a reset link"}
                </p>
              </div>

              {emailSent ? (
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    We've sent a password reset link to <strong>{email}</strong>.
                    Please check your inbox and follow the instructions.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/admin">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Login
                    </Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your admin email"
                        className="h-12 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              )}

              <p className="text-center text-sm text-muted-foreground mt-6">
                Remember your password?{" "}
                <Link to="/admin" className="text-coral hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AdminForgotPassword;
