import React from 'react';
import { 
  Send, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Solutions", 
        "Features", 
        "Pricing", 
        "Integrations"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us", 
        "Careers", 
        "Press", 
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation", 
        "Blog", 
        "Support", 
        "Status"
      ]
    }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-lg text-white py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Logo Section - Full Width */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Send className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <span className="text-xl sm:text-2xl font-bold">WhatsApp API</span>
          </div>
          <p className="text-white/70 mb-4 text-sm sm:text-base">
            Revolutionizing global communication through intelligent, secure messaging infrastructure.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[Linkedin, Twitter].map((Icon, index) => (
              <a 
                key={index}
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Grid Section - Two Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 text-cyan-400">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li 
                    key={linkIndex}
                    className="text-sm sm:text-base text-white/70 hover:text-cyan-400 cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 text-cyan-400">
              Stay Updated
            </h4>
            <div className="flex space-x-2 mb-3">
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-full border border-white/20 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <button
                className="bg-cyan-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-cyan-400 transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <p className="text-xs text-white/50">
              Subscribe for updates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-16 pt-6 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/50">
            © 2024 WhatsApp API. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;