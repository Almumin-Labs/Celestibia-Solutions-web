import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { UserAuthProvider } from "@/contexts/UserAuthContext";
import RequireAdmin from "@/components/admin/RequireAdmin";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import CloudServices from "./pages/services/CloudServices";
import DevOpsServices from "./pages/services/DevOpsServices";
import DataEngineering from "./pages/services/DataEngineering";
import AIMLServices from "./pages/services/AIMLServices";
import ApplicationServices from "./pages/services/ApplicationServices";
import SecurityServices from "./pages/services/SecurityServices";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import UserLogin from "./pages/UserLogin";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminAuthProvider>
        <UserAuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/devops" element={<DevOpsServices />} />
              <Route path="/services/data-engineering" element={<DataEngineering />} />
              <Route path="/services/ai-ml" element={<AIMLServices />} />
              <Route path="/services/application" element={<ApplicationServices />} />
              <Route path="/services/security" element={<SecurityServices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/signup" element={<AdminSignup />} />
              <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
              <Route
                path="/admin/dashboard"
                element={
                  <RequireAdmin>
                    <AdminDashboard />
                  </RequireAdmin>
                }
              />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserAuthProvider>
      </AdminAuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
