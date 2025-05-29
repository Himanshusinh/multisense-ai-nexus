
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "multisenceai7@gmail.com",
      description: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 7203907017",
      description: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Ahmedabad",
      description: "Our headquarters"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 7203907017",
      description: "Quick support available"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 text-slate-900 tracking-tight">
            Let's Build the
            <span className="font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Future Together</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Ready to transform your business with AI? Our experts are here to discuss 
            your challenges and create tailored solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h3>
                        <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                        <p className="text-slate-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl rounded-2xl">
              <CardHeader className="p-8 pb-6">
                <CardTitle className="text-2xl font-light text-slate-900 tracking-tight">Send us a message</CardTitle>
                <p className="text-slate-600 font-light">We'd love to hear about your project and discuss how we can help.</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 mb-2 font-medium text-sm">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white border-slate-300 focus:border-blue-500 rounded-lg h-12"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-2 font-medium text-sm">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white border-slate-300 focus:border-blue-500 rounded-lg h-12"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 mb-2 font-medium text-sm">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white border-slate-300 focus:border-blue-500 rounded-lg h-12"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 mb-2 font-medium text-sm">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white border-slate-300 focus:border-blue-500 rounded-lg resize-none"
                      placeholder="Tell us more about your project, goals, and how we can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium group"
                  >
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
