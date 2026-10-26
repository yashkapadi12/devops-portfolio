import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({ eyebrow, title, subtitle }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2 font-mono text-xs uppercase tracking-widest text-accent"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div
        className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15 }}
      />
      {subtitle && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base leading-relaxed text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
