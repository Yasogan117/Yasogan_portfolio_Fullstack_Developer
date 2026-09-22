import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievement, leadershipRoles } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Leadership"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Featured award */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-2xl gradient-border p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.06] text-amber-300">
                <achievement.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">
                {achievement.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{achievement.institution}</p>
            </div>
          </motion.div>

          {/* Leadership roles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="h-full rounded-2xl border border-subtle bg-card p-8">
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-widest text-accent">
                Leadership Roles
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {leadershipRoles.map((role, i) => (
                  <motion.div
                    key={role.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center gap-3 rounded-xl border border-subtle bg-white/[0.02] p-5 text-center transition-colors hover:border-subtle-hover"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300">
                      <role.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-white/85">
                      {role.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
