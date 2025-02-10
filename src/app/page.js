"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Globe, Zap, Shield, ArrowRight, Cpu, Layers,
  Workflow, Code, Server, Database, Network, Lock, Send,
  BarChart2, Users, Briefcase, Terminal, Rocket, InfinityIcon,
  BrainCircuit, BlocksIcon, CloudLightning, Satellite
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
  // ... existing state and ref declarations ...
  const ref = useRef(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({ container: ref });

  // New holographic grid effect
  const holographicGrid = useRef(null);
  const { scrollYProgress: gridScroll } = useScroll({ target: holographicGrid });
  const gridTransform = useTransform(gridScroll, [0, 1], [0, -100]);

  // Add parallax layers
  const parallaxLayers = [
    { depth: 0.2, scale: 1.2, blur: 0 },
    { depth: 0.4, scale: 1.4, blur: 2 },
    { depth: 0.6, scale: 1.6, blur: 4 },
  ];

  // Neural Network Visualization
  const NeuralNetwork = () => {
    const [nodes, setNodes] = useState([]);
  
    useEffect(() => {
      const generateNodes = () =>
        [...Array(15)].map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 2,
        }));
  
      setNodes(generateNodes()); // Generate nodes only on the client
    }, []);
  
    return (
      <div className="absolute inset-0 w-full opacity-30">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        ))}
      </div>
    );
  };

  // Enhanced Hero Section
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <main ref={ref} className="flex-grow text-white overflow-x-hidden relative bg-gray-900">



        {/* Holographic Interface Grid */}
 

        {/* Neural Network Visualization */}
        <NeuralNetwork />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mb-8 inline-block relative">
                <motion.div
                  className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent relative">
                  Advanced WhatsApp API
                </h1>
              </div>

              <motion.p
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-white/5 px-2 py-1 rounded-md">Enterprise-Grade</span> Messaging Infrastructure
              </motion.p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500/90 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-cyan-400 transition-all"
                >
                  <Rocket className="w-6 h-6" />
                  <span className="text-lg">Launch Your Network</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-400/30 bg-black/30 px-8 py-4 rounded-xl font-bold flex items-center gap-3 backdrop-blur-lg hover:border-cyan-400/60 transition-all"
                >
                  <Terminal className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">Explore API Docs</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Floating API Preview */}
            <motion.div
              className="mt-20 mx-auto max-w-4xl relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-2xl" />
              <div className="relative bg-black/30 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex gap-4 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <code className="text-cyan-400 font-mono">
                  {`const whatsappAPI = new WhatsAppAPI({ auth: 'api-key', accountType: 'private', AI: true, throughput: '1M/sec' });`}
                </code>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp API */}
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
                  icon: <BrainCircuit className="w-12 h-12 text-purple-400" />,
                  title: "Quick Setup",
                  description:
                    "Start sending and receiving messages instantly without the need for complex verifications or approvals."
                },
                {
                  icon: <BlocksIcon className="w-12 h-12 text-cyan-400" />,
                  title: "Personal & Business Accounts",
                  description:
                    "Supports both personal and business WhatsApp accounts for versatile communication needs."
                },
                {
                  icon: <CloudLightning className="w-12 h-12 text-green-400" />,
                  title: "Immediate API Access",
                  description:
                    "Seamlessly integrate the API for message automation, broadcasting, and two-way communication."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-cyan-400/10 rounded-2xl backdrop-blur-lg"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Live Analytics Preview */}
            <motion.div
              className="mt-20 bg-black/30 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Real-Time Usage Analytics</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="h-64 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl p-4">
                <div className="flex gap-4 h-full">
                  {/* Live chart animation */}
                  <motion.div
                    className="w-1/4 bg-cyan-400/20 rounded-lg relative overflow-hidden"
                    animate={{ height: ['20%', '80%', '20%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-1/4 bg-purple-400/20 rounded-lg relative overflow-hidden"
                    animate={{ height: ['50%', '30%', '50%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-1/4 bg-green-400/20 rounded-lg relative overflow-hidden"
                    animate={{ height: ['70%', '40%', '70%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Interactive API Demo Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Interactive API Playground
                  </span>
                </h2>
                <p className="text-xl mb-8 text-white/80">
                  Experiment with our API directly in the browser. See real results as you build.
                </p>

                <div className="space-y-6">
                  {['Multi-Channel Support', 'AI Moderation', 'Blockchain Audit', 'Quantum Encryption'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="p-2 bg-cyan-400/10 rounded-lg">
                        <Terminal className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/30 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-xl">
                <div className="mb-6 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <code className="text-cyan-400">POST /v3/messages</code>
                    <pre className="text-white/70 mt-2">{`{ "channel": "whatsapp", "content": "Hello Quantum!" }`}</pre>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <code className="text-green-400">Response 200 OK</code>
                    <pre className="text-white/70 mt-2">{`{ "status": "quantum_encrypted", "id": "msg_QBz9vXK..." }`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Quantum-Secure Architecture
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lattice-Based Cryptography",
                  icon: <Lock className="w-8 h-8 text-cyan-400" />,
                  description: "Post-quantum encryption algorithms resistant to Shor's algorithm attacks"
                },
                {
                  title: "Zero-Knowledge Proofs",
                  icon: <Satellite className="w-8 h-8 text-purple-400" />,
                  description: "Message verification without exposing content metadata"
                },
                {
                  title: "Holographic Audit Trails",
                  icon: <InfinityIcon className="w-8 h-8 text-green-400" />,
                  description: "Immutable message logs stored across decentralized nodes"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-cyan-400/10 rounded-2xl backdrop-blur-lg"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 z-50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border-t border-cyan-400/30">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Rocket className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Ready for Quantum Messaging?</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-500 px-6 py-3 rounded-lg font-bold flex items-center gap-2"
            >
              <Terminal className="w-5 h-5" />
              Start Free Trial
            </motion.button>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default page;