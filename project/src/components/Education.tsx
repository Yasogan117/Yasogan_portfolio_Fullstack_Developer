import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
        />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" aria-hidden />

          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-5"
              >
                {/* Node */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-subtle bg-card text-cyan-300">
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-subtle bg-card p-6 transition-colors hover:border-subtle-hover">
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <p className="mt-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-xs font-medium text-cyan-300">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
