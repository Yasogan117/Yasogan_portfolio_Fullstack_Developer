import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-[#0a0b10]">
      <div className="absolute inset-0 dot-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          description="A categorized view of the technologies and tools I use to build backend systems and AI-powered applications."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-subtle bg-card p-5 transition-colors hover:border-subtle-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.06]">
                  <cat.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-subtle bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
