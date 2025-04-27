
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About SalesInsight</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 mb-6">
                SalesInsight is a powerful sales analytics platform designed to help businesses transform their raw data into actionable insights. Our mission is to provide comprehensive, easy-to-understand analytics that drive strategic decision-making.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">What We Do</h2>
              <p className="text-white/80 mb-6">
                We specialize in converting complex sales data into clear, visual representations that reveal key performance indicators, trends, and opportunities. Our platform integrates seamlessly with your existing systems, providing real-time insights that empower your sales team to make informed decisions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h2>
              <p className="text-white/80 mb-6">
                We believe in simplifying data analysis. Our platform uses advanced analytics and intuitive visualizations to break down complex sales metrics, making it easy for teams of all technical levels to understand and act on their data.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
