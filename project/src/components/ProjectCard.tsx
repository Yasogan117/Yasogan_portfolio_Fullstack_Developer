import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-subtle bg-card transition-colors hover:border-subtle-hover"
    >
      {/* Visual header */}
      <div className="relative h-44 overflow-hidden border-b border-subtle bg-gradient-to-br from-[#0d1018] to-[#111419]">
        <div className="absolute inset-0 dot-bg opacity-40" aria-hidden />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:bg-cyan-500/20" aria-hidden />
        <div className="relative flex h-full items-center justify-center">
          <project.icon className="h-12 w-12 text-cyan-300/80 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-subtle bg-black/30 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur-sm">
          Project {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded border border-subtle bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-white/70"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded border border-subtle bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-muted">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-5 flex-1" />

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
          >
            View Details
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
