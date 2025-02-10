"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Send, 
  Code, 
  Shield, 
  Book, 
  GitHub, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', icon: <Send className="w-5 h-5" /> },
    { label: 'Developers', icon: <Code className="w-5 h-5" /> },
    { label: 'Documentation', icon: <Book className="w-5 h-5" /> }
  ];

  return (
    <nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <Send className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white">
            Chat Bridge
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <motion.a 
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white/70 hover:text-white flex items-center space-x-2 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.a>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold flex items-center space-x-2"
          >
            <span>Get Started</span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    whileHover={{ x: 10 }}
                    className="block text-white/70 hover:text-white flex items-center space-x-3"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full bg-cyan-500 text-black px-6 py-3 rounded-full font-semibold"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



export { Navbar };