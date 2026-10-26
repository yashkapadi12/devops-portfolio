import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PipelineFlow() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % pipelineSteps.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-surface-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="left">
          <SectionHeading
            eyebrow="How it works"
            title="From code to customers"
            subtitle="A calm, repeatable path — no chaos, no guesswork. Each step is automated and visible."
          />
        </Reveal>

        <Reveal className="mt-14" delay={0.1} variant="scale">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/50 p-6 sm:p-10"
            animate={reduceMotion ? undefined : { boxShadow: ["0 4px 24px rgba(0,0,0,0.2)", "0 4px 32px rgba(34,211,238,0.08)", "0 4px 24px rgba(0,0,0,0.2)"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.div
              className="pointer-events-none absolute -left-20 top-0 h-full w-40 bg-gradient-to-r from-accent/10 to-transparent"
              animate={reduceMotion ? undefined : { x: ["0%", "800%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between">
              {pipelineSteps.map((step, index) => {
                const isActive = index === active;
                return (
                  <div key={step.id} className="relative flex flex-1 flex-col items-center text-center">
                    {index < pipelineSteps.length - 1 && (
                      <div
                        className="absolute left-[calc(50%+28px)] top-6 hidden h-0.5 w-[calc(100%-56px)] bg-surface-border lg:block"
                        aria-hidden
                      >
                        <motion.div
                          className="h-full origin-left bg-accent/70"
                          initial={{ scaleX: 0 }}
                          animate={
                            reduceMotion
                              ? { scaleX: isActive ? 1 : 0.3 }
                              : { scaleX: index < active ? 1 : index === active ? 0.65 : 0.12 }
                          }
                          transition={{ duration: 0.55 }}
                        />
                      </div>
                    )}
                    <motion.div
                      animate={
                        isActive && !reduceMotion
                          ? {
                              scale: [1, 1.12, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(34,211,238,0)",
                                "0 0 0 8px rgba(34,211,238,0.15)",
                                "0 0 0 0 rgba(34,211,238,0)",
                              ],
                            }
                          : { scale: 1, boxShadow: "0 0 0 0 rgba(34,211,238,0)" }
                      }
                      transition={{ duration: 0.6 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-sm font-medium ${
                        isActive
                          ? "border-accent bg-accent/15 text-accent"
                          : "border-surface-border text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </motion.div>
                    <motion.p
                      animate={isActive ? { color: "#f8fafc" } : { color: "#94a3b8" }}
                      className="mt-3 text-sm font-semibold"
                    >
                      {step.label}
                    </motion.p>
                    <p className="mt-1 max-w-[140px] text-xs text-slate-500">{step.plain}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
