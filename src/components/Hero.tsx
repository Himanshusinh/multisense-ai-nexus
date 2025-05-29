
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 leading-tight">
            Future-Forward
            <br />
            <span className="text-blue-600 font-normal">AI Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Blending cutting-edge artificial intelligence with intuitive design to create 
            powerful, user-centric tools that solve real-world problems across industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 group shadow-lg"
              onClick={() => scrollToSection('#products')}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              onClick={() => scrollToSection('#contact')}
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-1">100+</div>
              <div className="text-gray-600 text-sm">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-1">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
