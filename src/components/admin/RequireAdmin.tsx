import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
type RequireAdminProps = {
  children: ReactNode;
};
export default function RequireAdmin({ children }: RequireAdminProps) {
  const { isAdmin, isLoading } = useAdminAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </main>
    );
  }
  if (!isAdmin) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
