import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects"
          description="Hands-on backend projects built with Spring Boot, REST APIs, and database integration — demonstrating layered architecture and real-world CRUD operations."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-subtle bg-[#0d0f14] p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-muted transition-colors hover:text-white"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-subtle bg-white/[0.03] text-cyan-300">
                  <selected.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{selected.title}</h3>
                  <p className="text-xs text-muted">Project</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/85">{selected.description}</p>

              {/* Tech stack */}
              <div className="mt-6">
                <h4 className="mb-3 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  <Layers className="h-3.5 w-3.5" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-subtle bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div className="mt-6">
                <h4 className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  Key Features
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {selected.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical highlights */}
              <div className="mt-6">
                <h4 className="mb-3 font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/80">
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                  >
                    <Github className="h-4 w-4 text-accent" />
                    GitHub
                  </a>
                )}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                  >
                    <ExternalLink className="h-4 w-4 text-accent" />
                    Live Demo
                  </a>
                )}
                {!selected.github && !selected.demo && (
                  <p className="text-xs text-muted">
                    Repository and demo links will be added when available.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
