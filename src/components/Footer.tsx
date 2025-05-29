
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "News & Press"],
    Products: ["CartX", "AppointX", "WildMind AI", "Custom Solutions"],
    Services: ["AI Development", "SEO Services", "Social Media", "Consulting"],
    Support: ["Documentation", "Help Center", "Contact Us", "System Status"]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Multisence AI
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Pioneering the future of AI-powered solutions. We blend cutting-edge technology 
              with intuitive design to create tools that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Multisence AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
