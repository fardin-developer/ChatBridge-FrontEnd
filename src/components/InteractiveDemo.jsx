"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const InteractiveDemo = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
                    {/* Left Column - Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Our Offerings
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/80">
                            Experiment with our API directly in the browser. See real results as you build.
                        </p>

                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            {['Multiple Instances', 'High volume messges', 'Full Instances Encryption', '24*7 WP service'].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.25 }}
                                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="p-2 bg-cyan-400/10 rounded-lg shrink-0">
                                        <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                    </div>
                                    <span className="font-mono text-sm sm:text-base">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Code Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="order-1 lg:order-2 bg-black/30 border border-cyan-400/20 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl overflow-x-auto"
                    >
                        <div className="mb-4 sm:mb-6 flex gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="p-3 sm:p-4 bg-gray-900 rounded-lg">
                                <code className="text-cyan-400 text-sm sm:text-base">POST /v3/messages</code>
                                <pre className="text-white/70 mt-2 text-sm sm:text-base overflow-x-auto whitespace-pre-wrap">
                                    {`{
  "channel": "whatsapp",
  "content": "Hello Quantum!"
}`}
                                </pre>
                            </div>
                            <div className="p-3 sm:p-4 bg-gray-900 rounded-lg">
                                <code className="text-green-400 text-sm sm:text-base">Response 200 OK</code>
                                <pre className="text-white/70 mt-2 text-sm sm:text-base overflow-x-auto whitespace-pre-wrap">
                                    {`{
  "status": "quantum_encrypted",
  "id": "msg_QBz9vXK..."
}`}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;