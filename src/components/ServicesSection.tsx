
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Search, Share2, Bot } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      name: "Custom AI Solutions",
      description: "Tailored artificial intelligence solutions designed to meet your specific business needs and challenges.",
      icon: Cpu,
      benefits: ["Increased Efficiency", "Cost Reduction", "Automated Processes", "Data-Driven Insights"]
    },
    {
      name: "SEO Optimization",
      description: "Advanced search engine optimization strategies to boost your online visibility and organic traffic.",
      icon: Search,
      benefits: ["Higher Rankings", "Increased Traffic", "Better ROI", "Competitive Edge"]
    },
    {
      name: "Social Media Marketing",
      description: "Comprehensive social media management and campaign strategies to grow your brand presence.",
      icon: Share2,
      benefits: ["Brand Awareness", "Engagement Growth", "Lead Generation", "Community Building"]
    },
    {
      name: "AI Chatbots & Automation",
      description: "Intelligent chatbots and automation systems to enhance customer support and streamline operations.",
      icon: Bot,
      benefits: ["24/7 Support", "Quick Response", "Cost Effective", "Scalable Solution"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              AI & Digital Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive suite of AI-powered services and digital marketing solutions to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className="bg-slate-800/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group hover:scale-105 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">{service.name}</CardTitle>
                <CardDescription className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-teal-500/50 text-teal-400 hover:bg-teal-500/10"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-lg px-8 py-6"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
