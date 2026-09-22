import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personal, socialLinks, footerText } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-subtle bg-[#08090d]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2"
              aria-label="Back to top"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] font-display text-xs font-bold text-accent">
                YS
              </span>
              <span className="font-display text-sm font-semibold text-white/90">
                {personal.name}
              </span>
            </a>
            <p className="text-xs text-muted">{footerText}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
