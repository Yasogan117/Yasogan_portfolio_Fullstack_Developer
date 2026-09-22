import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactInfo, personal } from '@/data/portfolio';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) {
      e.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors ${
      hasError
        ? 'border-rose-400/40 focus:border-rose-400/60'
        : 'border-subtle focus:border-cyan-400/40'
    }`;

  return (
    <section id="contact" className="section-pad relative bg-[#0a0b10]">
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
      <div
        className="absolute left-1/2 top-1/4 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Build Something Together"
          description="I'm always interested in learning, building, and exploring opportunities in software development."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-subtle bg-card p-8">
              <h3 className="font-display text-base font-semibold text-white">
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Feel free to reach out via any of the channels below — whether it's an opportunity,
                a collaboration, or just to connect.
              </p>
              <div className="mt-2 space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-lg border border-subtle bg-white/[0.02] px-4 py-3 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/30">
                      <item.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-medium text-white/85">{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-2 rounded-lg border border-amber-400/15 bg-amber-400/[0.04] px-4 py-3 text-xs text-amber-200/70">
                This contact form opens your email client. No data is stored or sent to a server.
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-subtle bg-card p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/85">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={fieldClass(errors.name)}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/85">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={fieldClass(errors.email)}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/85">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={`${fieldClass(errors.message)} resize-none`}
                    placeholder="Tell me about the opportunity or project..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-[#08090d] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </button>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5" />
                    Your email client should now be open with the message pre-filled.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
