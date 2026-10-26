import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useHeroPhoto } from "../hooks/useHeroPhoto";

export function HeroPhotoBackground() {
  const reduceMotion = useReducedMotion();
  const src = useHeroPhoto();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);

  return (
    <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
      <motion.div
        className="absolute inset-[-8%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${src})` }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12],
                x: ["0%", "-2%"],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 22,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
        }
      />

      <div className="absolute inset-0 bg-surface/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/88 to-surface/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-surface/60" />
      <div className="hero-grid absolute inset-0 opacity-[0.35]" aria-hidden />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-teal-500/5"
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
