
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, Brain, ArrowRight } from "lucide-react";

export const ProductsSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      name: "CartX",
      description: "Smart retail trolley that auto-detects items and auto-generates bills using advanced AI vision technology.",
      icon: ShoppingCart,
      features: ["Auto Item Detection", "Instant Billing", "Inventory Management", "Customer Analytics"],
      color: "text-blue-600"
    },
    {
      name: "AppointX",
      description: "AI-based appointment management and scheduling platform that optimizes booking efficiency.",
      icon: Calendar,
      features: ["Smart Scheduling", "AI Optimization", "Calendar Integration", "Automated Reminders"],
      color: "text-green-600"
    },
    {
      name: "WildMind AI",
      description: "Research-focused product for creative content generation and strategy powered by advanced AI models.",
      icon: Brain,
      features: ["Content Generation", "Strategy Planning", "Creative Insights", "Brand Voice Training"],
      color: "text-purple-600"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Innovative AI-powered solutions designed to transform how businesses operate and engage with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`h-8 w-8 ${product.color}`} />
                </div>
                <CardTitle className="text-2xl font-light text-gray-900 mb-4">{product.name}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => scrollToSection('#about')}
                  >
                    Learn More
                  </Button>
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
