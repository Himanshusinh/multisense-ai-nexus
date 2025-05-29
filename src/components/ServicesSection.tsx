
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Search, Share2, Bot } from "lucide-react";

export const ServicesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            AI & Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive suite of AI-powered services and digital marketing solutions to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-normal text-gray-900 mb-3">{service.name}</CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => scrollToSection('#contact')}
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
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
            onClick={() => scrollToSection('#contact')}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
