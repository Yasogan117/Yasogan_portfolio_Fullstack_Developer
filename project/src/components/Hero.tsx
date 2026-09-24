import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, ArrowDown } from 'lucide-react';
import { personal, socialLinks } from '@/data/portfolio';
import profilePhoto from '@/assets/profile-photo.jpg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },

  show: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 grid-bg opacity-60"
        aria-hidden
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          left-1/4
          top-1/4
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
        aria-hidden
      />

      {/* Indigo Glow */}
      <div
        className="
          absolute
          bottom-1/4
          right-1/4
          h-[350px]
          w-[350px]
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
        aria-hidden
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid min-h-[70vh] items-center gap-16 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="flex flex-col items-start justify-center gap-6">

            {/* Status Badge */}

            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/[0.06]
                px-4
                py-1.5
                text-xs
                font-medium
                text-cyan-300
              "
            >
              <Sparkles className="h-3.5 w-3.5" />

              {personal.statusBadge}
            </motion.div>

            {/* Name */}

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="
                font-display
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Hi, I'm{' '}

              <span className="gradient-text">
                {personal.name}
              </span>
            </motion.h1>

            {/* Education + Developer Role */}

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="space-y-2"
            >
              <p className="font-display text-xl font-semibold leading-snug text-white/90 sm:text-2xl">
                B.E. Computer Science and Engineering
              </p>

              <p className="font-display text-lg font-medium leading-snug text-cyan-300 sm:text-xl">
                Java Full Stack Developer
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-xl text-base leading-relaxed text-muted"
            >
              {personal.heroSubtext}
            </motion.p>

            {/* Buttons */}

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-3"
            >
              {/* View Projects */}

              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-cyan-400
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-[#08090d]
                  transition-all
                  hover:bg-cyan-300
                  hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]
                "
              >
                View Projects

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />
              </button>

              {/* Contact */}

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-subtle
                  bg-white/[0.03]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <Mail className="h-4 w-4 text-accent" />

                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}

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
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-subtle
                    bg-white/[0.03]
                    text-muted
                    transition-all
                    hover:border-cyan-400/40
                    hover:text-cyan-300
                  "
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Photo + Card Container */}

            <div className="relative flex flex-col items-center">

              {/* ================= PHOTO AREA ================= */}

              <div className="relative">

                {/* Photo Glow */}

                <div
                  className="
                    absolute
                    -inset-10
                    rounded-full
                    bg-cyan-400/15
                    blur-[70px]
                  "
                  aria-hidden
                />

                {/* PHOTO FRAME */}

                <div
                  className="
                    relative
                    h-64
                    w-64
                    overflow-hidden
                    rounded-full
                    border-4
                    border-cyan-400/60
                    bg-[#0b0f17]
                    shadow-[0_0_60px_-10px_rgba(34,211,238,0.7)]
                    sm:h-80
                    sm:w-80
                    lg:h-[380px]
                    lg:w-[380px]
                  "
                >
                  <img
                    src={profilePhoto}
                    alt={personal.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-[center_15%]
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                {/* Cyan Dot */}

                <div
                  className="
                    absolute
                    -right-3
                    top-12
                    h-5
                    w-5
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_25px_rgba(34,211,238,0.9)]
                  "
                />

                {/* Purple Dot */}

                <div
                  className="
                    absolute
                    -bottom-2
                    left-10
                    h-4
                    w-4
                    rounded-full
                    bg-indigo-400
                    shadow-[0_0_20px_rgba(99,102,241,0.9)]
                  "
                />

                {/* Small Ring */}

                <div
                  className="
                    absolute
                    -left-5
                    top-1/2
                    h-10
                    w-10
                    -translate-y-1/2
                    rounded-full
                    border
                    border-cyan-400/30
                  "
                />
              </div>

              {/* ================= DEVELOPER CARD ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="
                  relative
                  z-10
                  mt-6
                  w-[290px]
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#0b0f17]/90
                  px-5
                  py-4
                  text-center
                  shadow-[0_0_35px_-12px_rgba(34,211,238,0.6)]
                  backdrop-blur-xl
                  sm:w-[320px]
                "
              >
                {/* Available */}

                <div className="mb-2 flex items-center justify-center gap-2">

                  <span
                    className="
                      h-2.5
                      w-2.5
                      animate-pulse
                      rounded-full
                      bg-green-400
                      shadow-[0_0_10px_rgba(74,222,128,0.8)]
                    "
                  />

                  <span className="text-xs font-medium text-green-300">
                    Available for Opportunities
                  </span>
                </div>

                {/* Role */}

                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Java Full Stack Developer
                </h3>

                {/* Technologies */}

                <p className="mt-2 text-xs text-gray-400">
                  Java • Spring Boot • MySQL • React
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-2
          text-xs
          text-muted
          transition-colors
          hover:text-white
          md:flex
        "
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}