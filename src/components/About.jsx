import { whatIsDevOps } from "../data/portfolio";
import { DualExplain } from "./DualExplain";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="What I do as a DevOps engineer"
            subtitle="Same story, two lenses — whether you're hiring, partnering, or learning."
          />
        </Reveal>
        <Reveal className="mt-12" delay={0.08}>
          <DualExplain plain={whatIsDevOps.plain} technical={whatIsDevOps.technical} />
        </Reveal>
      </div>
    </section>
  );
}
