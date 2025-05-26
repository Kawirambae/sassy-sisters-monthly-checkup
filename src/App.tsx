
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'client' | 'admin'>('client');
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string, type: 'client' | 'admin') => {
    setUserEmail(email);
    setUserType(type);
    setIsLoggedIn(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : userType === 'admin' ? (
          <AdminDashboard />
        ) : (
          <Dashboard />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
