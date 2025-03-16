import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | ChatLinker - WhatsApp API',
  description: 'Learn about ChatLinker, our mission, and how we provide enterprise-grade WhatsApp API solutions for businesses of all sizes.',
  keywords: 'ChatLinker, WhatsApp API, about us, messaging infrastructure, WhatsApp integration',
  openGraph: {
    title: 'About ChatLinker - WhatsApp API Provider',
    description: 'Enterprise-grade WhatsApp messaging infrastructure designed for scale and reliability.',
    images: 'https://chatlinker.cloud/og-image.png',
    url: 'https://chatlinker.cloud/about',
  },
  alternates: {
    canonical: 'https://chatlinker.cloud/about',
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent inline-block mb-6">
              About ChatLinker
            </h1>
            <p className="text-xl text-white/70">
              Building the future of enterprise messaging, one API at a time
            </p>
          </div>
          
          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Story</h2>
            <div className="space-y-4 text-white/80">
              <p>
                ChatLinker was founded with a clear mission: to simplify enterprise WhatsApp messaging and make it accessible to businesses of all sizes. What started as a solution to our own communication challenges quickly evolved into a comprehensive platform trusted by companies across industries.
              </p>
              <p>
                Our team combines expertise in messaging protocols, cloud infrastructure, and API design to create a service that prioritizes reliability, security, and ease of use. We believe that powerful communication tools shouldn't require technical complexity.
              </p>
            </div>
          </section>
          
          {/* Core Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Reliability First</h3>
                <p className="text-white/80">
                  We build our infrastructure with redundancy and resilience in mind. Your messages are too important to fail.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Developer Experience</h3>
                <p className="text-white/80">
                  Our APIs are designed to be intuitive, well-documented, and easy to integrate into your existing workflows.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-white/80">
                  No hidden fees or confusing pricing structures. You always know exactly what you're paying for.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Security By Design</h3>
                <p className="text-white/80">
                  We implement industry-leading security practices at every level of our service, from API authentication to data storage.
                </p>
              </div>
            </div>
          </section>
          
          {/* Technology Stack Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Technology</h2>
            <div className="space-y-4 text-white/80">
              <p>
                ChatLinker is built on a modern, scalable architecture designed for high performance and reliability. Our infrastructure leverages containerized microservices, distributed databases, and intelligent load balancing to ensure your messages are delivered quickly and reliably.
              </p>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="text-center mt-20">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your business messaging?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/#pricing" 
                className="px-8 py-3 border border-cyan-400/50 rounded-lg hover:border-cyan-400 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}