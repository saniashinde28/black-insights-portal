
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const featuresData = [
  {
    id: 1,
    title: "Sales Performance Tracking",
    description: "Monitor sales metrics in real-time with customizable dashboards and alerts",
    icon: "📈",
  },
  {
    id: 2,
    title: "Customer Insights",
    description: "Analyze customer behavior patterns to identify opportunities and optimize engagement",
    icon: "👥",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description: "Forecast future sales trends using machine learning algorithms and historical data",
    icon: "🔮",
  },
  {
    id: 4,
    title: "Interactive Visualizations",
    description: "Explore your data through rich, interactive charts and graphs for deeper understanding",
    icon: "📊",
  },
  {
    id: 5,
    title: "Automated Reporting",
    description: "Generate comprehensive reports and share insights with your team automatically",
    icon: "📝",
  },
  {
    id: 6,
    title: "Multi-platform Access",
    description: "Access your sales analytics from any device with our responsive web and mobile design",
    icon: "📱",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Powerful Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our sales analytics platform provides all the tools you need to understand your data and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <Card key={feature.id} className="glass-morphism hover:bg-white/10 transition-colors group">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
