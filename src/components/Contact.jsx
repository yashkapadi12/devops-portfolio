import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const links = [
  { href: `mailto:${profile.email}`, label: "Email me", primary: true },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
];

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-surface-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="scale">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something reliable"
            subtitle="Open to DevOps, platform, and SRE roles — or consulting on pipelines and cloud."
          />
        </Reveal>
        <Reveal className="mt-10" delay={0.08}>
          <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row sm:justify-center">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={reduceMotion ? undefined : { scale: 1.05, y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                animate={
                  link.primary && !reduceMotion
                    ? { boxShadow: ["0 0 0 0 rgba(34,211,238,0)", "0 0 0 12px rgba(34,211,238,0)", "0 0 0 0 rgba(34,211,238,0)"] }
                    : undefined
                }
                transition={
                  link.primary && !reduceMotion
                    ? { duration: 2.5, repeat: Infinity }
                    : undefined
                }
                className={`flex-1 rounded-xl px-6 py-4 text-center text-sm font-semibold transition ${
                  link.primary
                    ? "bg-accent text-surface"
                    : "border border-surface-border font-medium text-slate-300 hover:border-slate-600 hover:text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <motion.p
            className="mt-6 text-center text-sm text-slate-500"
            animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {profile.location}
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
