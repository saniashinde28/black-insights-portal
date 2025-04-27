
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
                SalesInsight is a cutting-edge sales analytics platform designed to help businesses of all sizes transform their raw data into actionable insights. Our mission is to democratize data analytics, making powerful insights accessible to everyone on your team.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
              <p className="text-white/80 mb-6">
                We believe that data should be a competitive advantage for every business, not just those with large analytics teams. Our vision is to create a world where businesses can easily understand their sales performance, predict future trends, and make data-driven decisions with confidence.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
              <p className="text-white/80 mb-6">
                Founded in 2020, SalesInsight began with a simple observation: despite having access to more data than ever before, many businesses struggled to extract meaningful insights from it. Our founders, who had backgrounds in data science and sales leadership, set out to build a solution that would bridge this gap.
              </p>
              <p className="text-white/80 mb-6">
                What started as a simple dashboard tool has evolved into a comprehensive sales analytics platform used by thousands of businesses worldwide. Today, we're proud to help our clients increase revenue, optimize their sales processes, and stay ahead of market trends.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-8">
                <li><strong>Simplicity</strong> - We believe powerful analytics don't have to be complicated</li>
                <li><strong>Transparency</strong> - We're committed to clear, honest communication with our clients</li>
                <li><strong>Innovation</strong> - We continuously push the boundaries of what's possible with data</li>
                <li><strong>Impact</strong> - We measure our success by the tangible results we deliver for our clients</li>
                <li><strong>Inclusivity</strong> - We design our platform to be accessible to users of all technical backgrounds</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-lg font-medium">Sarah Johnson</h3>
                  <p className="text-white/70">CEO & Co-Founder</p>
                  <p className="text-white/80 mt-2">
                    Former VP of Sales at a Fortune 500 company, Sarah brings over 15 years of sales leadership experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Michael Chen</h3>
                  <p className="text-white/70">CTO & Co-Founder</p>
                  <p className="text-white/80 mt-2">
                    With a PhD in Machine Learning, Michael leads our product development and data science initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
