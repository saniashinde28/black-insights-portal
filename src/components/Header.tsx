
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">
            SalesInsight
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-sm hover:text-white/80 transition-colors">
              About Us
            </Link>
            <button 
              onClick={() => setIsQRCodeOpen(true)}
              className="text-sm hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <QrCode size={16} />
              QR Code
            </button>
            <Link to="/login" className="text-sm hover:text-white/80 transition-colors flex items-center gap-1">
              <User size={16} />
              Login
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="text-sm">
                Sign Up
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-sm hover:text-white/80 transition-colors" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <button 
                onClick={() => {
                  setIsQRCodeOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm hover:text-white/80 transition-colors flex items-center gap-1"
              >
                <QrCode size={16} />
                QR Code
              </button>
              <Link 
                to="/login" 
                className="text-sm hover:text-white/80 transition-colors flex items-center gap-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User size={16} />
                Login
              </Link>
              <Link 
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="text-sm w-full">
                  Sign Up
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      <Dialog open={isQRCodeOpen} onOpenChange={setIsQRCodeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Power BI QR Code</DialogTitle>
            <DialogDescription>
              Scan this QR code to access the Sales Insights dashboard
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <img 
              src="/lovable-uploads/956db9af-d2bf-46e8-b798-7743130aaeb5.png" 
              alt="Power BI QR Code" 
              className="w-64 h-64"
            />
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
