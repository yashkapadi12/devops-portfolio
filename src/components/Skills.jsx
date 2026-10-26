import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Reveal, StaggerItem, StaggerReveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 border-t border-surface-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="scale">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & tools"
            subtitle="Technologies I use daily — with a plain-English note on why each area matters."
          />
        </Reveal>
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <motion.article
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        borderColor: "rgba(34,211,238,0.35)",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                      }
                }
                className="group h-full rounded-2xl border border-surface-border bg-surface-raised/40 p-6 shadow-card"
              >
                <motion.div
                  className="mb-3 h-1 w-10 rounded-full bg-accent/60"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <p className="mt-2 text-sm text-slate-400">{group.plain}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={reduceMotion ? undefined : { scale: 1.06, y: -2 }}
                      className="rounded-md border border-surface-border bg-surface px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors group-hover:border-accent/20"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
