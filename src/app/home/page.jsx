"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    Globe,
    Zap,
    Shield,
    ArrowRight,
    Cpu,
    Layers,
    Workflow,
    Code,
    Server,
    Database,
    Network,
    Lock,
    Send,
    BarChart2,
    Users,
    Briefcase,
    Terminal
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const backgroundTransform = useTransform(
        scrollYProgress,
        [0, 1],
        ['hsl(230, 50%, 10%)', 'hsl(270, 60%, 15%)']
    );

    const solutions = [
        {
            icon: <Briefcase className="w-12 h-12 text-blue-400" />,
            title: "Enterprise Messaging",
            description: "Comprehensive communication solutions for large-scale business operations, integrating advanced AI and multi-channel support.",
            details: [
                "End-to-end enterprise messaging",
                "AI-powered conversation management",
                "Seamless CRM integration",
                "Advanced analytics and reporting"
            ]
        },
        {
            icon: <Network className="w-12 h-12 text-green-400" />,
            title: "Global Communication Infrastructure",
            description: "Robust, scalable API that connects businesses with a global audience through intelligent messaging technologies.",
            details: [
                "Multi-region message routing",
                "99.99% uptime guarantee",
                "Real-time message optimization",
                "Intelligent load balancing"
            ]
        },
        {
            icon: <Server className="w-12 h-12 text-purple-400" />,
            title: "Developer-First Platform",
            description: "Cutting-edge API with comprehensive documentation, SDKs, and tools designed to accelerate your messaging integration.",
            details: [
                "Extensive SDK support",
                "Webhook and event-driven architecture",
                "Interactive API playground",
                "Continuous integration tools"
            ]
        }
    ];

    const techFeatures = [
        {
            icon: <Cpu className="w-10 h-10 text-cyan-400" />,
            title: "AI-Powered Intelligent Routing",
            description: "Advanced machine learning algorithms optimize message delivery and processing in real-time."
        },
        {
            icon: <Lock className="w-10 h-10 text-pink-400" />,
            title: "Military-Grade Security",
            description: "End-to-end encryption and advanced security protocols protect your communication channels."
        },
        {
            icon: <BarChart2 className="w-10 h-10 text-green-400" />,
            title: "Comprehensive Analytics",
            description: "Deep insights into message performance, user engagement, and communication metrics."
        }
    ];

    const pricingTiers = [
        {
            name: "Startup",
            price: "$99",
            features: [
                "10,000 monthly messages",
                "Basic API access",
                "Community support",
                "Standard integrations"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited messages",
                "Advanced AI routing",
                "Dedicated support",
                "Custom integrations"
            ]
        },
        {
            name: "Scale",
            price: "$499",
            features: [
                "100,000 monthly messages",
                "Advanced API access",
                "Priority support",
                "Enterprise features"
            ]
        }
    ];

    return (
        <>
                        <Navbar />


            <div
                ref={ref}
                style={{
                    background: backgroundTransform,
                    perspective: '2000px'
                }}
                className="min-h-screen text-white overflow-x-hidden relative"
            >
                {/* Floating Background Particles */}
                <motion.div
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: 0.3 }}
                    className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                >
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: Math.random() * 3
                            }}
                            animate={{
                                x: [
                                    Math.random() * window.innerWidth,
                                    Math.random() * window.innerWidth,
                                    Math.random() * window.innerWidth
                                ],
                                y: [
                                    Math.random() * window.innerHeight,
                                    Math.random() * window.innerHeight,
                                    Math.random() * window.innerHeight
                                ],
                                opacity: [0.1, 0.5, 0.1]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
                        />
                    ))}
                </motion.div>

                {/* Hero Section */}
                <div className="container mx-auto relative z-10 px-6 pt-24">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 30, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="text-center"
                    >
                        <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                            Next-Generation WhatsApp API
                        </h1>
                        <p className="text-2xl max-w-4xl mx-auto mb-12 text-white/80">
                            Revolutionize communication with our intelligent, scalable, and secure messaging infrastructure. Transform how businesses connect, engage, and grow in the digital ecosystem.
                        </p>

                        <div className="flex justify-center space-x-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-cyan-500 text-black px-10 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-cyan-400 transition text-lg"
                            >
                                <span>Start Your Digital Transformation</span>
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg"
                            >
                                Explore Solutions
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Solutions Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-24"
                    >
                        <h2 className="text-5xl font-bold text-center mb-16 text-white">
                            Comprehensive Messaging Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateX: 10,
                                        boxShadow: `0 20px 50px rgba(0,0,0,0.3)`
                                    }}
                                    className={`
                  p-8 rounded-2xl border border-white/10 
                  bg-gradient-to-br from-white/5 to-white/10 
                  backdrop-blur-lg relative overflow-hidden
                `}
                                >
                                    <div className="absolute inset-0 opacity-20 blur-3xl"
                                        style={{
                                            background: `radial-gradient(circle at center, 
                      hsl(${index * 120}, 70%, 50%) 0%, 
                      transparent 70%)`
                                        }}
                                    />
                                    <div className="relative z-10">
                                        {solution.icon}
                                        <h3 className="text-3xl font-bold mt-6 mb-4 text-white">
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/70 mb-6">
                                            {solution.description}
                                        </p>
                                        <ul className="space-y-3 text-white/60">
                                            {solution.details.map((detail, i) => (
                                                <li key={i} className="flex items-center space-x-2">
                                                    <Zap className="w-4 h-4 text-cyan-400" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="mt-24"
                    >
                        <h2 className="text-5xl font-bold text-center mb-16 text-white">
                            Advanced Technical Capabilities
                        </h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {techFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 10
                                    }}
                                    className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center"
                                >
                                    <div className="flex justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pricing Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-24"
                    >
                        <h2 className="text-5xl font-bold text-center mb-16 text-white">
                            Flexible Pricing Plans
                        </h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {pricingTiers.map((tier, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: `0 25px 50px rgba(0,0,0,0.3)`
                                    }}
                                    className={`
                  p-8 rounded-2xl border 
                  ${tier.name === 'Enterprise'
                                            ? 'border-purple-500 bg-purple-900/20'
                                            : 'border-white/10 bg-white/5'}
                  text-center
                `}
                                >
                                    <h3 className="text-3xl font-bold mb-4 text-white">
                                        {tier.name}
                                    </h3>
                                    <p className="text-4xl font-bold mb-6 text-cyan-400">
                                        {tier.price}
                                        {tier.name !== 'Enterprise' && <span className="text-xl">/month</span>}
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="text-white/70 flex items-center justify-center space-x-2">
                                                <Zap className="w-4 h-4 text-cyan-400" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`
                    px-10 py-3 rounded-full font-semibold transition
                    ${tier.name === 'Enterprise'
                                                ? 'bg-purple-500 text-white hover:bg-purple-600'
                                                : 'bg-cyan-500 text-black hover:bg-cyan-400'}
                  `}
                                    >
                                        {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Interactive Cursor Effect */}
                <motion.div
                    style={{
                        position: 'fixed',
                        top: mousePosition.y,
                        left: mousePosition.x,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <Footer />
            </div>
        </>
    );
};

export default page;