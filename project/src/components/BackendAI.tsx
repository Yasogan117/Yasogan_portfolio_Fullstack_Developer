import { motion } from 'framer-motion';
import { ArrowDown, Brain, Workflow } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { backendFlow, aiTechnologies } from '@/data/portfolio';

export default function BackendAI() {
  return (
    <section id="backend-ai" className="section-pad relative bg-[#0a0b10]">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="Backend + AI"
          description="The intersection of structured backend engineering and modern AI tooling — where layered architecture meets intelligent application design."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Backend flow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-subtle bg-card p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300">
                <Workflow className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-white">
                Request Processing Flow
              </h3>
            </div>

            <div className="space-y-1">
              {backendFlow.map((step, i) => (
                <div key={step.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 rounded-lg border border-subtle bg-white/[0.02] px-4 py-3 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-subtle bg-white/[0.03] text-xs font-semibold text-cyan-300">
                      {i + 1}
                    </span>
                    <step.icon className="h-4.5 w-4.5 text-muted" />
                    <span className="text-sm font-medium text-white/90">{step.label}</span>
                  </motion.div>
                  {i < backendFlow.length - 1 && (
                    <div className="flex justify-center py-0.5" aria-hidden>
                      <ArrowDown className="h-4 w-4 text-cyan-400/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI technologies */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-subtle bg-card p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-indigo-300">
                <Brain className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-white">
                AI &amp; Generative AI Technologies
              </h3>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-muted">
              AI capabilities are layered on top of the backend stack — Spring AI connects LLMs to
              Spring applications, RAG grounds responses in real data, and MCP provides a standard
              protocol for connecting models to external tools.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {aiTechnologies.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-3 rounded-lg border border-subtle bg-white/[0.02] p-4 transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/[0.04]"
                >
                  <tech.icon className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm font-medium text-white/90">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
