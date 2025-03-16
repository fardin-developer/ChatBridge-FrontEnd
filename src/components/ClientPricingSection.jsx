"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Warehouse } from "lucide-react";

const ClientPricingSection = () => {
  const features = [
    "Unlimited Messages",
    "No Pay-Per-Use Fees",
    "Multi-Device Support",
    "24/7 API Availability",
    "Message Templates",
    "Media Support",
    "Group Messaging",
  ];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      price: 300,
      range: "0-10 instances",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shadowColor: "blue-500/20",
      delay: 0.2,
    },
    {
      name: "Business",
      description: "Ideal for growing businesses with multiple needs",
      price: 250,
      range: "10-20 instances",
      icon: <Warehouse className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      shadowColor: "indigo-500/20",
      popular: true,
      delay: 0.4,
    },
    {
      name: "Enterprise",
      description: "Best value for large-scale operations",
      price: 200,
      range: "20+ instances",
      icon: <Warehouse className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shadowColor: "gray-700/20",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include our full feature set with no hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-black/20 backdrop-blur-lg border ${
                plan.popular ? "border-purple-500/50" : "border-cyan-400/20"
              } p-6 flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name} Plan</h3>
                <p className="text-white/60">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <div className="text-white/60 ml-2 mb-1">
                    <div>per instance</div>
                    <div>per month</div>
                  </div>
                </div>
                <div className="mt-2 text-sm bg-white/5 inline-block px-3 py-1 rounded-full">
                  For {plan.range}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <Check className="w-3 h-3 text-gray-100" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "https://app.chatlinker.cloud"}
                className={`mt-8 w-full py-3 px-6 rounded-xl font-medium bg-gradient-to-r ${plan.color} text-gray-100`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-white/60 max-w-3xl mx-auto"
        >
          <p className="text-lg">
            Need a custom solution for your enterprise? 
            <a href="/contact" className="text-cyan-400 ml-1 hover:underline">Contact our sales team</a> for tailored pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPricingSection;