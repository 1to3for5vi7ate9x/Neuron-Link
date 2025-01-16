'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-80" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Neuron Link
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Open-source Reasoning Agent Operating System (RAO) revolutionizing hierarchical AI task management
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
            >
              Launch Dashboard
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-800 rounded-lg font-semibold text-white shadow-lg hover:shadow-gray-500/30 transition-all duration-200"
            >
              View Documentation
            </motion.button>
          </div>

          {/* Core Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Leading Inference',
                description: 'Centralized control instance managing main objectives and task distribution',
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Context Management',
                description: 'Efficient package management ensuring focused and optimized task execution',
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M8 12h8" />
                  </svg>
                )
              },
              {
                title: 'Decentralized Network',
                description: 'Distributed compute resources powered by NRL tokens and provider incentives',
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm flex flex-col items-center text-center"
              >
                <div className="text-blue-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
