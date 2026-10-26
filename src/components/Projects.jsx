import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/portfolio";
import { DualExplain } from "./DualExplain";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="right">
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            subtitle="Real outcomes: faster delivery, fewer outages, clearer ownership."
          />
        </Reveal>
        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.06}
              variant={i % 2 === 0 ? "left" : "right"}
            >
              <motion.article
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, borderColor: "rgba(34,211,238,0.25)" }
                }
                className="rounded-2xl border border-surface-border bg-surface-raised/30 p-6 sm:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ti * 0.05 }}
                      className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-accent/40 hover:text-accent"
                    >
                      View on GitHub
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
                <div className="mt-6">
                  <DualExplain plain={project.plain} technical={project.technical} />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
