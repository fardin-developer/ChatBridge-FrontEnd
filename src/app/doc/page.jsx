"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Users, Key, Code, Database, Lock } from 'lucide-react';

const ApiDocs = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const endpoints = {
        send: {
            method: 'POST',
            path: '/send',
            description: 'Send a single WhatsApp message',
            params: {
                to: 'Recipient phone number',
                message: 'Message content',
                sessionId: 'Session identifier'
            }
        },
        sendBulk: {
            method: 'POST',
            path: '/send-bulk',
            description: 'Send multiple WhatsApp messages',
            params: {
                messages: 'Array of message objects'
            }
        },
        getQr: {
            method: 'POST',
            path: '/get_qr_code',
            description: 'Generate QR code for WhatsApp authentication',
            params: {
                token: 'Authentication token'
            }
        },
        register: {
            method: 'POST',
            path: '/register',
            description: 'Register a new user account',
            params: {
                email: 'User email',
                name: 'User name',
                password: 'User password'
            }
        },
        createApiKey: {
            method: 'POST',
            path: '/apikey/create',
            description: 'Generate new API key'
        },
        login: {
            method: 'POST',
            path: '/login',
            description: 'Authenticate user',
            params: {
                email: 'User email',
                password: 'User password'
            }
        },
        webhook: {
            method: 'POST',
            path: '/{apiKey}',
            description: 'Configure webhook for WhatsApp events',
            params: {
                webhookUrl: 'URL to receive webhook notifications'
            }
        }
    };

    const tabVariants = {
        active: {
            backgroundColor: 'rgba(8, 145, 178, 0.1)',
            borderColor: 'rgba(8, 145, 178, 0.6)',
            color: '#fff'
        },
        inactive: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(8, 145, 178, 0.2)',
            color: 'rgba(255, 255, 255, 0.6)'
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <div className="mb-8 inline-block relative">
                        <motion.div
                            className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent relative">
                            WhatsApp API Documentation
                        </h1>
                    </div>

                    <motion.p
                        className="text-xl max-w-3xl mx-auto mb-12 text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="bg-white/5 px-2 py-1 rounded-md">Enterprise-Grade</span>{" "}
                        Messaging Infrastructure with Secure Architecture
                    </motion.p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full md:w-64"
                    >
                        <div className="space-y-3 sticky top-6">
                            <motion.button
                                variants={tabVariants}
                                animate={activeTab === 'overview' ? 'active' : 'inactive'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab('overview')}
                                className="w-full px-4 py-3 rounded-xl font-medium border-2 flex items-center gap-3 transition-all"
                            >
                                <Terminal className="w-5 h-5 text-cyan-400" />
                                <span>Overview</span>
                            </motion.button>

                            <motion.button
                                variants={tabVariants}
                                animate={activeTab === 'authentication' ? 'active' : 'inactive'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab('authentication')}
                                className="w-full px-4 py-3 rounded-xl font-medium border-2 flex items-center gap-3 transition-all"
                            >
                                <Key className="w-5 h-5 text-cyan-400" />
                                <span>Authentication</span>
                            </motion.button>

                            <motion.button
                                variants={tabVariants}
                                animate={activeTab === 'endpoints' ? 'active' : 'inactive'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab('endpoints')}
                                className="w-full px-4 py-3 rounded-xl font-medium border-2 flex items-center gap-3 transition-all"
                            >
                                <Code className="w-5 h-5 text-cyan-400" />
                                <span>Endpoints</span>
                            </motion.button>

                            <motion.button
                                variants={tabVariants}
                                animate={activeTab === 'examples' ? 'active' : 'inactive'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab('examples')}
                                className="w-full px-4 py-3 rounded-xl font-medium border-2 flex items-center gap-3 transition-all"
                            >
                                <Database className="w-5 h-5 text-cyan-400" />
                                <span>Examples</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="flex-1">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <motion.div
                                    custom={0}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/30 blur-3xl rounded-full" />
                                    <h3 className="text-2xl font-bold text-white mb-4 relative">Introduction</h3>
                                    <p className="text-white/80 relative">
                                        This API provides a robust interface for sending WhatsApp messages, managing sessions,
                                        and handling user authentication. Built with enterprise-grade security and scalability
                                        in mind.
                                    </p>
                                </motion.div>

                                <motion.div
                                    custom={1}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                                    <h3 className="text-2xl font-bold text-white mb-4 relative">Base URL</h3>
                                    <code className="bg-black/70 p-3 rounded-lg text-cyan-400 block font-mono relative">
                                        http://localhost:3000
                                    </code>
                                </motion.div>

                                <motion.div
                                    custom={2}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
                                    <h3 className="text-2xl font-bold text-white mb-4 relative">API Version</h3>
                                    <p className="text-white/80 relative">
                                        Current version: <code className="bg-black/70 px-2 py-1 rounded text-cyan-400 font-mono">1.0.0</code>
                                    </p>
                                </motion.div>
                            </div>
                        )}

                        {activeTab === 'authentication' && (
                            <div className="space-y-6">
                                <motion.div
                                    custom={0}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <Lock className="w-6 h-6 text-cyan-400" />
                                        <h3 className="text-2xl font-bold text-white relative">Authentication Methods</h3>
                                    </div>

                                    <div className="space-y-6 relative">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 text-white">API Key Authentication</h4>
                                            <p className="text-white/80 mb-3">
                                                Most endpoints require an API key for authentication. Generate your API key using
                                                the /apikey/create endpoint after registration.
                                            </p>
                                            <div className="mt-3 p-4 bg-black/70 rounded-lg">
                                                <p className="text-sm text-cyan-400/80 mb-2">Example API key header:</p>
                                                <code className="text-green-400 font-mono">
                                                    X-API-Key: your_api_key_here
                                                </code>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 text-white">Session Authentication</h4>
                                            <p className="text-white/80">
                                                WhatsApp sessions are managed through QR code authentication. Use the /get_qr_code
                                                endpoint to initiate a new session.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        {activeTab === 'endpoints' && (
                            <div className="space-y-6">
                                {Object.entries(endpoints).map(([key, endpoint], i) => (
                                    <motion.div
                                        key={key}
                                        custom={i}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />

                                        <div className="flex items-center gap-3 mb-4 relative">
                                            <span className="px-3 py-1 rounded-md text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-black">
                                                {endpoint.method}
                                            </span>
                                            <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                                        </div>

                                        <p className="text-white/80 mb-4 relative">{endpoint.description}</p>

                                        {endpoint.params && (
                                            <div className="relative">
                                                <h4 className="font-semibold mb-2 text-white">Parameters:</h4>
                                                <div className="bg-black/70 p-4 rounded-lg">
                                                    {Object.entries(endpoint.params).map(([paramName, paramDesc]) => (
                                                        <div key={paramName} className="mb-2">
                                                            <code className="text-purple-400 font-mono">{paramName}</code>
                                                            <span className="text-white/60 ml-2">{paramDesc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'examples' && (
                            <div className="space-y-6">
                                <motion.div
                                    custom={0}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

                                    <div className="flex items-center gap-3 mb-4">
                                        <Send className="w-5 h-5 text-cyan-400" />
                                        <h3 className="text-2xl font-bold text-white relative">Send a message</h3>
                                    </div>

                                    <div className="mb-4 relative">
                                        <h4 className="text-lg font-medium mb-2 text-white">Request</h4>
                                        <pre className="bg-black/70 p-4 rounded-lg overflow-x-auto text-sm">
                                            <code className="text-green-400 font-mono">
                                                {`POST /send HTTP/1.1
Host: localhost:3000
Content-Type: application/json
X-API-Key: your_api_key_here

{
  "to": "+1234567890",
  "message": "Hello from the API!",
  "sessionId": "session_12345"
}`}
                                            </code>
                                        </pre>
                                    </div>

                                    <div className="relative">
                                        <h4 className="text-lg font-medium mb-2 text-white">Response</h4>
                                        <pre className="bg-black/70 p-4 rounded-lg overflow-x-auto text-sm">
                                            <code className="text-green-400 font-mono">
                                                {`HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "messageId": "msg_67890",
  "timestamp": "2025-02-24T15:30:45Z"
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </motion.div>

                                <motion.div
                                    custom={1}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative border-2 border-cyan-400/20 bg-black/30 rounded-xl p-6 backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />

                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-5 h-5 text-cyan-400" />
                                        <h3 className="text-2xl font-bold text-white relative">Send bulk messages</h3>
                                    </div>

                                    <div className="mb-4 relative">
                                        <h4 className="text-lg font-medium mb-2 text-white">Request</h4>
                                        <pre className="bg-black/70 p-4 rounded-lg overflow-x-auto text-sm">
                                            <code className="text-green-400 font-mono">
                                                {`POST /send-bulk HTTP/1.1
Host: localhost:3000
Content-Type: application/json
X-API-Key: your_api_key_here

{
  "messages": [
    {
      "to": "+1234567890",
      "message": "Hello user 1!",
      "sessionId": "session_12345"
    },
    {
      "to": "+9876543210",
      "message": "Hello user 2!",
      "sessionId": "session_12345"
    }
  ]
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiDocs;