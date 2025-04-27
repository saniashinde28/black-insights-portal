
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    company: "TechStream Corp",
    quote: "The sales analytics dashboard transformed how we track performance. We've increased revenue by 27% since implementation.",
    author: "Sarah Johnson",
    title: "VP of Sales",
    image: "https://images.unsplash.com/photo-1487958449943-2229e9be8625?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    company: "Global Retail Solutions",
    quote: "Being able to visualize our sales data in real-time has given us a competitive edge in a challenging market.",
    author: "Michael Chen",
    title: "Sales Director",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    company: "Innovate Partners",
    quote: "The predictive analytics feature helped us identify emerging trends months in advance, allowing us to adjust our strategy accordingly.",
    author: "Elena Rodriguez",
    title: "Chief Revenue Officer",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Success Stories
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how our clients have transformed their sales performance
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-morphism overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2/5">
                        <img
                          src={study.image}
                          alt={study.company}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <CardContent className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                        <p className="text-xl italic text-white/90 mb-6">
                          "{study.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-lg">{study.author}</p>
                          <p className="text-white/70">{study.title}</p>
                          <p className="text-white/90 font-medium mt-1">{study.company}</p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
