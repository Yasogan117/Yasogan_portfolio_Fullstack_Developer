import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center gap-2 rounded-full border border-subtle bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent"
        >
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.05 }}
        className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className={`max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
