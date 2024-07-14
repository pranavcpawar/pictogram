"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CursorVariants = {
  blinking: {
    opacity: [0,0,1,1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    },
  },
};

function CursorBlink() {
  return (
    <motion.div
      variants={CursorVariants}
      animate="blinking"
      className="h-[30px] w-[2px] translate-y-1 translate-x-1 inline-block bg-[#ca2c92] rounded-full"
     />
  );
};

export function IntroAnimation({ texts } : { texts: string[] }) {
  const count = useMotionValue(0);
  const base = useTransform(count, (index) => texts[index] || "" );
  const round = useMotionValue(0);
  const rounded = useTransform(round, (value) => Math.round(value));
  const display = useTransform(rounded, (index) => base.get().slice(0, index));

  const updateThisRound = useMotionValue(true);
  useEffect(() => {
    animate(round, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updateThisRound.get() === true && latest > 0) {
          updateThisRound.set(false);
        } else if (updateThisRound.get() === false && latest === 0) {
          if(count.get() === texts.length - 1) count.set(0); else count.set(count.get() + 1);
          updateThisRound.set(true);
        }
      },
    })
  },[count, round, updateThisRound, texts]);

  return (
    <span className="inline-block items-center">
      <motion.span className="inline-block">
        {display}
      </motion.span>
      <CursorBlink />
    </span>
  );
};