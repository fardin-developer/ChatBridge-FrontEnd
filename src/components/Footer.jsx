import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Send, 
  Code, 
  Shield, 
  Book, 
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
      <footer className="bg-black/20 backdrop-blur-lg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold">WhatsApp API</span>
              </div>
              <p className="text-white/70 mb-6">
                Revolutionizing global communication through intelligent, secure messaging infrastructure.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                {[ Linkedin, Twitter].map((Icon, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-white/70 hover:text-white"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
  
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold mb-6 text-cyan-400">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 10, color: 'rgb(34 211 238)' }}
                      className="text-white/70 hover:text-cyan-400 cursor-pointer"
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
  
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-cyan-400">
                Stay Updated
              </h4>
              <div className="flex space-x-2 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 rounded-full border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-cyan-500 text-black px-6 py-3 rounded-full"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-white/50">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-16 pt-6 border-t border-white/10 text-center">
            <p className="text-white/50">
              © 2024 WhatsApp API. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer