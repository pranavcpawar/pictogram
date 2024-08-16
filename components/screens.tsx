"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { animate , motion, useAnimationControls } from "framer-motion";

export function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  if (isLoading) return <Loader isLoading={isLoading} onComplete={() => setIsLoading(false)} />;

  return (
    <div className="bg-black box-border min-h-dvh w-full flex flex-1 flex-col relative z-0 items-stretch">
      <div className="flex flex-row-reverse flex-auto justify-center">
        <div className="min-w-[45vw] justify-center p-[16px]">
          {children}
        </div>
        <div className="min-h-[45vh] relative z-0 md:flex hidden flex-col justify-center p-[20px] box-border w-full items-center">
          <div className="max-h-[380px] h-[50%] max-w-full items-center flex flex-col w-full justify-center">
            <Image src="/logo.svg" alt="pictogram logo" className="flex flex-col justify-center" width={264} height={264} priority />
          </div>
        </div>
      </div>
      <div className="text-[#d9d9d9] text-xs w-full text-center">
        <h3 className="py-[6px] px-[8px] w-full"> © {new Date().getFullYear()} Pictogram</h3>
      </div>
    </div>
  );
};

const variants = {
  hidden: { 
    width: 0 
  },

  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      type: "tween",
    },
  },
};

function Loader({ onComplete, isLoading }: { onComplete: () => void, isLoading: boolean }) {

  const controls = useAnimationControls();

  useEffect(() => {
    async function animation() {
      animate(isLoading, false, {
        duration: 1,
        ease: "easeIn",
        onComplete() {
          onComplete();
        },
      });
      if (isLoading) controls.start("visible"); else controls.start("hidden");
    };
    animation();

    const timeout = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timeout);

  },[onComplete, controls, isLoading]);

  return (
    <div className="top-0 left-0 right-0 bottom-0 fixed z-1 flex justify-center items-center">
      <div className="w-[240px] h-[240px] flex flex-col space-y-2 justify-center items-center">
        <Image id="logo" src="/logo-colored.svg" alt="pictogram logo" width={64} height={64} priority />
        <div className="w-[33%] h-[4px] rounded bg-[#242426]">
          <motion.div initial="hidden" variants={variants} animate={controls} className=" h-full rounded bg-[#808080]" />
        </div>
      </div>
    </div>
  );
};