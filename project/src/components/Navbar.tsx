import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-subtle bg-[#08090d]/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#home');
            }}
            className="group flex items-center gap-2"
            aria-label="Yasogan S — home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] font-display text-sm font-bold text-accent transition-colors group-hover:border-cyan-400/40">
              YS
            </span>
            <span className="hidden font-display text-sm font-semibold text-white/90 sm:block">
              {personal.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-white'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              className="hidden items-center gap-2 rounded-lg border border-subtle bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] sm:inline-flex"
            >
              <FileDown className="h-4 w-4 text-accent" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-72 border-l border-subtle bg-[#0d0f14] p-6 pt-24"
              role="dialog"
              aria-modal="true"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active === link.href
                          ? 'bg-cyan-400/[0.08] text-white'
                          : 'text-muted hover:bg-white/[0.03] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick('#contact');
                    }}
                    className="flex items-center gap-2 rounded-lg border border-subtle bg-white/[0.03] px-4 py-3 text-sm font-medium text-white"
                  >
                    <FileDown className="h-4 w-4 text-accent" />
                    Resume
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
