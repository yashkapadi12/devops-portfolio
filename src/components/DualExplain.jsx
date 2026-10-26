import { motion, useReducedMotion } from "framer-motion";

const cardHover = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: { y: -4 },
};

export function DualExplain({ plain, technical }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={reduceMotion ? undefined : "hover"}
        variants={cardHover}
        className="rounded-xl border border-surface-border bg-surface-raised/80 p-5 transition-shadow hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]"
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-emerald-400/90">
          In simple terms
        </p>
        <p className="text-sm leading-relaxed text-slate-300">{plain}</p>
      </motion.div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.06 }}
        whileHover={reduceMotion ? undefined : "hover"}
        variants={cardHover}
        className="rounded-xl border border-surface-border bg-surface-raised/80 p-5 transition-shadow hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)]"
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent">
          For engineers
        </p>
        <p className="font-mono text-sm leading-relaxed text-slate-400">{technical}</p>
      </motion.div>
    </div>
  );
}
