
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            🚀 Leading AI Innovation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 text-slate-900 leading-tight tracking-tight">
            Future-Forward
            <br />
            <span className="font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming businesses through cutting-edge artificial intelligence. 
            We create intelligent, scalable solutions that drive real results and meaningful innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group font-medium"
              onClick={() => scrollToSection('#products')}
            >
              Explore Solutions
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-10 py-4 rounded-lg font-medium"
              onClick={() => scrollToSection('#contact')}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-light text-blue-600 mb-2">150+</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">AI Models Deployed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-light text-blue-600 mb-2">98%</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-light text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">System Uptime</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-light text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
