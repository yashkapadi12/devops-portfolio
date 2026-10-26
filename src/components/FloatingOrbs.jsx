import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  { size: 320, x: "10%", y: "15%", delay: 0, duration: 14 },
  { size: 200, x: "75%", y: "55%", delay: 2, duration: 18 },
  { size: 140, x: "55%", y: "8%", delay: 1, duration: 12 },
];

export function FloatingOrbs({ className = "" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/10 blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -20, 12, 0],
            scale: [1, 1.08, 0.95, 1],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
