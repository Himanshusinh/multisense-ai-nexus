
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
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "AppointX",
      description: "AI-based appointment management and scheduling platform that optimizes booking efficiency.",
      icon: Calendar,
      features: ["Smart Scheduling", "AI Optimization", "Calendar Integration", "Automated Reminders"],
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "WildMind AI",
      description: "Research-focused product for creative content generation and strategy powered by advanced AI models.",
      icon: Brain,
      features: ["Content Generation", "Strategy Planning", "Creative Insights", "Brand Voice Training"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Innovative AI-powered solutions designed to transform how businesses operate and engage with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="bg-slate-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group hover:scale-105 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{product.name}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => scrollToSection('#about')}
                  >
                    Learn More
                  </Button>
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${product.color} hover:opacity-90 group`}
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
