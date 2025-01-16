'use client';

import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4"
          >
            Hierarchical AI Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A revolutionary approach to AI task management with specialized instances working in harmony
          </motion.p>
        </div>

        {/* Hierarchical Structure Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* LII Section */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">Leading Inference Instance (LII)</h3>
              <p className="text-gray-300">Central control unit that manages the main objective and orchestrates task distribution</p>
            </div>
          </div>

          {/* PII Sections */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Parent Inference Instance (PII)</h3>
              <p className="text-gray-400">Manages intermediate tasks and coordinates child instances</p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Task decomposition</li>
                <li>• Resource allocation</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>
          </div>

          {/* CPM Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Context Package Manager (CPM)</h3>
              <p className="text-gray-400">Efficient package management system for optimal task execution</p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Core system packages</li>
                <li>• Community packages</li>
                <li>• Enterprise solutions</li>
              </ul>
            </div>
          </div>

          {/* CII Section */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Child Inference Instance (CII)</h3>
              <p className="text-gray-400">Specialized instances for executing specific subtasks</p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Focused execution</li>
                <li>• Optimized performance</li>
                <li>• Real-time reporting</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Network Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-gray-800/50"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">LLM Independence</h3>
            <p className="text-gray-400">
              Flexible architecture supporting multiple AI models, allowing each instance to use the most suitable LLM for its specific task.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-gray-800/50"
          >
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Decentralized Computing</h3>
            <p className="text-gray-400">
              Distributed network of compute providers earning NRL tokens while contributing to the advancement of AI capabilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
