
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, Brain, ArrowRight, CheckCircle } from "lucide-react";

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
      description: "Revolutionary smart retail solution with AI-powered item detection and automated billing system for seamless shopping experiences.",
      icon: ShoppingCart,
      features: ["Computer Vision Detection", "Real-time Billing", "Inventory Analytics", "Customer Insights"],
      color: "from-blue-500 to-blue-600",
      badge: "Retail AI"
    },
    {
      name: "AppointX",
      description: "Intelligent appointment management platform that optimizes scheduling through advanced AI algorithms and predictive analytics.",
      icon: Calendar,
      features: ["Smart Scheduling AI", "Calendar Integration", "Automated Notifications", "Analytics Dashboard"],
      color: "from-emerald-500 to-emerald-600",
      badge: "Business AI"
    },
    {
      name: "WildMind AI",
      description: "Advanced creative intelligence platform for content generation, strategic planning, and brand voice development.",
      icon: Brain,
      features: ["Content Generation", "Strategic Planning", "Brand Voice AI", "Creative Analytics"],
      color: "from-purple-500 to-purple-600",
      badge: "Creative AI"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Our Products
          </div>
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 text-slate-900 tracking-tight">
            AI-Powered
            <span className="font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Cutting-edge AI products designed to transform how businesses operate, 
            engage customers, and drive sustainable growth in the digital era.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center p-8 pb-6">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                    {product.badge}
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-slate-900 mb-4 tracking-tight">{product.name}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed font-light">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
                    onClick={() => scrollToSection('#about')}
                  >
                    Learn More
                  </Button>
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group/btn shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
