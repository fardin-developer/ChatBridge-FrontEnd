"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Rocket, Terminal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ClientHeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const router = useRouter();

  return (
    <section className="relative h-auto flex items-center justify-center">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-56 md:mt-[20rem]"
        >
          <div className="mb-10 inline-block relative">
            <motion.div
              className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent relative">
              Affordable WhatsApp API
            </h2>
          </div>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-white/5 px-2 py-1 rounded-md">Enterprise-Grade</span>{" "}
            Messaging Infrastructure
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              href="https://app.chatlinker.cloud"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500/90 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-cyan-400 transition-all"
            >
              <Rocket className="w-6 h-6" />
              <span className="text-lg">Create Your Instance</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { router.push('/doc') }}
              className="border-2 border-cyan-400/30 bg-black/30 px-8 py-4 rounded-xl font-bold flex items-center gap-3 backdrop-blur-lg hover:border-cyan-400/60 transition-all"
            >
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Explore API Docs</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating API Preview */}
        <motion.div
          className="mx-auto max-w-4xl mt-24 md:mt-44"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Background Blur */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-2xl" />

          {/* Code Block Container */}
          <div className="bg-black/30 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-xl">
            {/* Window Buttons */}
            <div className="flex gap-4 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            {/* Code Block */}
            <pre className="text-cyan-400 font-mono whitespace-pre-wrap break-words text-sm md:text-base">
              <code>
                {`const response = await fetch("https://api.chatlinker.cloud/v1/message/send", {
  method: "POST",
  headers: {
    "x-api-key": "your-api-key",
    "instance-key": "your-instance-key",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    to: "919864972356",
    message: "Hello from the WhatsApp API!",
  })
});`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientHeroSection;