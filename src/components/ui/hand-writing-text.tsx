"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./hand-writing-text.css";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const reduceMotion = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: reduceMotion ? 0 : 1.35,
          ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
        },
        opacity: { duration: reduceMotion ? 0 : 0.35 },
      },
    },
  };

  return (
    <div className="hand-written-title relative mx-auto w-full max-w-4xl py-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          className="h-full w-full"
        >
          <title>{title}</title>
          <motion.path
            d="M 1100 300 C 1100 145, 890 45, 600 45 C 310 45, 100 145, 100 300 C 100 455, 310 555, 600 555 C 890 555, 1100 455, 1100 300"
            fill="none"
            strokeWidth="8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="hand-writing-stroke"
          />
        </motion.svg>
      </div>
      <div className="hand-writing-content relative z-10 flex h-full flex-col items-start justify-center text-left">
        <motion.h2
          className="hand-writing-heading text-3xl tracking-tight text-white md:text-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: reduceMotion ? 0 : 0.3, duration: reduceMotion ? 0 : 0.55 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="hand-writing-subtitle text-sm text-white/75 md:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: reduceMotion ? 0 : 0.58, duration: reduceMotion ? 0 : 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
