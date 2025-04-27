
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Sales Analytics?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using our platform to drive growth and increase revenue
          </p>
          <Link to="/login">
            <Button size="lg" className="px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Case Study Carousel */}
      <CaseStudyCarousel />
      
      <Footer />
    </div>
  );
};

export default Index;
