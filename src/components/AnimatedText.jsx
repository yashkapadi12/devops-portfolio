import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: (stagger = 0.06) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.12 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedLines({ lines, className = "", as: Tag = "div", stagger = 0.08 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={stagger}
      style={{ display: "block" }}
    >
      {lines.map((line, i) => (
        <motion.span key={i} variants={item} className="block">
          {line}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function ShimmerText({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      className={`${className} ${reduceMotion ? "text-gradient" : "text-gradient shimmer-text"}`}
    >
      {children}
    </span>
  );
}
