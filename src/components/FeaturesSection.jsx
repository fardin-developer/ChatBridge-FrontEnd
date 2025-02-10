import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Simplified WhatsApp API Access
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: "Quick Setup",
              description: "Start sending and receiving messages instantly without complex verifications."
            },
            {
              icon: '💼',
              title: "Personal & Business Accounts",
              description: "Supports both personal and business WhatsApp accounts."
            },
            {
              icon: '⚡',
              title: "Immediate API Access",
              description: "Seamlessly integrate the API for message automation and broadcasting."
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-cyan-400/10 rounded-2xl backdrop-blur-lg">
              <div className="mb-6 text-4xl">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;