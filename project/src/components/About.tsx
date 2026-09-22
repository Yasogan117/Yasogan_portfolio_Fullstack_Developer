import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { summary, aboutHighlights } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border h-full rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-white/85">
                {summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['CRUD Operations', 'Database Connectivity', 'Layered Architecture', 'Scalable Applications'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-subtle bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Highlights card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-subtle bg-card p-8">
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-widest text-accent">
                Focus Areas
              </h3>
              <ul className="space-y-4">
                {aboutHighlights.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300">
                      <item.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-medium text-white/85">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
