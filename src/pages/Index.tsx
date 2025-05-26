
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to main app since we're now using a single-page auth flow
    window.location.href = "/";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
