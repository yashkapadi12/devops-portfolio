import { motion, useReducedMotion } from "framer-motion";
import { profile, heroStats } from "../data/portfolio";
import { useHeroPhoto } from "../hooks/useHeroPhoto";
import { AnimatedLines, ShimmerText } from "./AnimatedText";
import { FloatingOrbs } from "./FloatingOrbs";
import { HeroPhotoBackground } from "./HeroPhotoBackground";
import { Reveal } from "./Reveal";

const btnMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.04, y: -2 },
  tap: { scale: 0.98 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroPhoto = useHeroPhoto();

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <HeroPhotoBackground />
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 font-mono text-sm text-accent"
            >
              <motion.span
                className="inline-block h-2 w-2 rounded-full bg-accent"
                animate={reduceMotion ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {profile.title}
            </motion.p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <AnimatedLines
                lines={["Reliable software delivery,"]}
                stagger={0.1}
              />
              <AnimatedLines
                className="mt-1"
                lines={[
                  <>
                    <ShimmerText>explained clearly</ShimmerText>
                  </>,
                ]}
                stagger={0.12}
              />
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                variants={btnMotion}
                initial="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : "tap"}
                className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-glow"
              >
                See my work
              </motion.a>
              <motion.a
                href="#how-it-works"
                variants={btnMotion}
                initial="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : "tap"}
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm"
              >
                How DevOps helps
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative mt-14 hidden lg:col-span-5 lg:mt-0 lg:block"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-glow"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroPhoto})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-semibold text-white">{profile.name}</p>
                <p className="text-sm text-slate-400">{profile.location}</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-4 top-8 rounded-xl border border-accent/30 bg-surface/80 px-4 py-2 font-mono text-xs text-accent backdrop-blur-md"
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              CI/CD • Cloud • SRE
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} variant="scale">
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6, boxShadow: "0 12px 40px rgba(34,211,238,0.12)" }
                }
                className="rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-card backdrop-blur-md"
              >
                <motion.p
                  className="text-3xl font-semibold text-white"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + i * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-sm font-medium text-slate-200">{stat.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{stat.plain}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-accent"
        >
          Scroll
          <span className="block h-8 w-5 rounded-full border border-slate-600 p-1">
            <motion.span
              className="mx-auto block h-1.5 w-1 rounded-full bg-accent"
              animate={reduceMotion ? undefined : { y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
