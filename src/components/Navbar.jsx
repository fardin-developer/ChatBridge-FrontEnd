"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, Book, Info, Mail, TagIcon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Documentation", icon: <Book className="w-5 h-5" />, href: "/doc" },
    { label: "Pricing", icon: <TagIcon className="w-5 h-5" />, href: "/#pricing" },
    { label: "About Us", icon: <Info className="w-5 h-5" />, href: "/about" },
    { label: "Contact Us", icon: <Mail className="w-5 h-5" />, href: "/contact" },
  ];

  return (
    <nav
      // initial={{ opacity: 0, y:  }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3 cursor-pointer" title="Go to Home">
          <motion.div whileHover={{ scale: 1.1 }} role="presentation">
            <Send className="w-8 h-8 text-cyan-400" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white">Chat Linker</h1>
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={item.action}
              whileHover={{ scale: 1.1 }}
              className="text-white/70 hover:text-white flex items-center space-x-2 transition cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold hidden md:flex items-center space-x-2"
          onClick={() => window.location.href = "https://app.chatlinker.cloud"}
        >
          <span>Get Started</span>
        </motion.button>

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gray-900 mt-2 p-4 rounded-md"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.action}
                  className="text-white flex items-center space-x-2 hover:text-gray-300 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="https://app.chatlinker.cloud"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}