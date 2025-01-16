'use client';

import { motion } from 'framer-motion';

interface Phase {
  phase: string;
  title: string;
  items: string[];
}

export default function Roadmap() {
  const phases: Phase[] = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      items: [
        'Core RAO System Architecture',
        'Basic Instance Management',
        'Context Package Manager (CPM)',
        'Network Infrastructure'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Network Growth',
      items: [
        'Provider Network Expansion',
        'Advanced Task Distribution',
        'Community Package Repository',
        'Performance Optimization'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Integration',
      items: [
        'Enterprise Solutions',
        'Advanced Security Features',
        'Custom Instance Templates',
        'Enhanced Monitoring Tools'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Advanced Features',
      items: [
        'AI Model Marketplace',
        'Cross-Instance Learning',
        'Automated Optimization',
        'Advanced Analytics Dashboard'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4"
          >
            Project Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our journey towards building the next generation of AI infrastructure
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Phase Card */}
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 h-full">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-400">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {phase.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((listItem, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + itemIndex * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-emerald-400 mt-1">•</span>
                      <span className="text-gray-300">{listItem}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
