import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github, Sparkles, ArrowDown } from 'lucide-react';
import { personal, socialLinks, heroCodeLines, heroApiLines, heroAiLines } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

function CodeCard({
  title,
  lines,
  delay,
}: {
  title: string;
  lines: { text: string; color: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="rounded-xl border border-subtle bg-[#0d0f14]/80 p-4 backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-[11px] font-medium text-muted">{title}</span>
      </div>
      <pre className="font-mono-code text-[12px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={line.color}>
            {line.text}
          </div>
        ))}
      </pre>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background grid + glows */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/8 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {personal.statusBadge}
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-1.5"
          >
            <p className="font-display text-xl font-semibold leading-snug text-white/90 sm:text-2xl">
              Java Backend Developer
            </p>
            <p className="font-display text-lg font-medium leading-snug text-muted sm:text-xl">
              Building Scalable &amp; AI-Powered Applications
            </p>
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl text-base leading-relaxed text-muted"
          >
            {personal.heroSubtext}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#08090d] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <Mail className="h-4 w-4 text-accent" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 pt-2"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right visual — floating code cards */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative space-y-4"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <CodeCard title="Application.java" lines={heroCodeLines} delay={0.2} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="ml-8"
            >
              <CodeCard title="REST API" lines={heroApiLines} delay={0.4} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="ml-2"
            >
              <CodeCard title="AI Integration" lines={heroAiLines} delay={0.6} />
            </motion.div>

            {/* Connection dots */}
            <div className="absolute -left-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-cyan-400/40 to-transparent xl:block" aria-hidden />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-muted transition-colors hover:text-white md:flex"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
