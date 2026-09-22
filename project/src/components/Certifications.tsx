import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative bg-[#0a0b10]">
      <div className="absolute inset-0 dot-bg opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continuous learning"
          title="Certifications"
          description="Programs and courses that reinforce my foundation in Java programming, leadership, and hackathon-driven innovation."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-subtle bg-card p-6 transition-colors hover:border-subtle-hover"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-500/8 blur-2xl transition-opacity group-hover:bg-cyan-500/16" aria-hidden />

              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/30">
                <cert.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs text-muted">{cert.issuer}</p>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-cyan-300/70">
                <Award className="h-3.5 w-3.5" />
                Certified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
