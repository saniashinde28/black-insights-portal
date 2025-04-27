
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      try {
        // In a real app, you would verify the user's token/session
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, we'll assume the user is authenticated if they've gone through the login flow
        // In a real app, you'd check if the user has a valid token
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        toast({
          title: "Authentication Error",
          description: "Please sign in to access the dashboard",
          variant: "destructive",
        });
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate, toast]);

  const handleLogout = () => {
    // In a real app, you would clear the user's token/session
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/70">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Dashboard Header */}
      <header className="glass-morphism py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gradient">SalesInsight Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Sales Analytics Dashboard</h2>
          <p className="text-white/70">
            Welcome to your real-time sales analytics dashboard powered by Power BI
          </p>
        </div>

        {/* Power BI Embed */}
        <div className="bg-black/20 rounded-lg overflow-hidden glass-morphism p-4 h-[600px]">
          <iframe 
            title="Sales Insights Dashboard"
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=11c178b0-0bf2-47c6-8022-262ed499c902&autoAuth=true&ctid=053cbcff-aa58-4d20-87a3-575d830ae75b" 
            frameBorder="0" 
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="glass-morphism py-4 px-4">
        <div className="container mx-auto text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} SalesInsight. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
