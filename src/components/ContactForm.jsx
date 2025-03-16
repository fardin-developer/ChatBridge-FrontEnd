// app/contact/ContactForm.jsx (client component)
"use client";

import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    status: null, // null = not submitted, 'submitting', 'success', 'error'
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      setFormStatus({
        status: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        status: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setFormStatus({
      status: 'submitting',
      message: 'Sending your message...'
    });
    
    try {
      const response = await fetch('https://api.chatlinker.cloud/api/v1/contact-us/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      
      setFormStatus({
        status: 'success',
        message: 'Your message has been sent successfully! We\'ll be in touch soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        status: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent inline-block mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions about our WhatsApp API? Looking for a custom solution? We're here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-cyan-400">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@chatlinker.cloud" className="text-white/70 hover:text-cyan-400 transition-colors">
                      contact@chatlinker.cloud
                    </a>
                  </div>
                </div>
                
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support Hours</h3>
                    <p className="text-white/70">
                      Monday - Sunday<br />
                      9:00 AM - 9:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-black/30 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
                <h3 className="font-bold mb-3 flex items-center">
                  <Send className="w-5 h-5 mr-2 text-cyan-400" />
                  Quick Response Guarantee
                </h3>
                <p className="text-white/70">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please mark your subject as "Urgent" when emailing us.
                </p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.status === 'submitting'}
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus.status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
                
                {formStatus.status && (
                  <div className={`p-4 rounded-lg mt-6 ${
                    formStatus.status === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    formStatus.status === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}