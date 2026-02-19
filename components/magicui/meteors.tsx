"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const toFixedString = (value: number, digits = 5) => value.toFixed(digits);

export function Meteors({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) {
  const meteorStyles = React.useMemo(
    () =>
      [...new Array(number)].map((_, index) => {
        const seed = index + number * 13 + angle * 7;
        const left = pseudoRandom(seed);
        const delay = pseudoRandom(seed + 1);
        const duration = pseudoRandom(seed + 2);
        const delaySeconds = delay * (maxDelay - minDelay) + minDelay;
        const durationSeconds =
          duration * (maxDuration - minDuration) + minDuration;

        return {
          "--angle": `${-angle}deg`,
          top: "-5%",
          left: `${Math.floor(left * 100)}%`,
          animationDelay: `${toFixedString(delaySeconds, 5)}s`,
          animationDuration: `${toFixedString(durationSeconds, 2)}s`,
        };
      }),
    [angle, maxDelay, maxDuration, minDelay, minDuration, number]
  );

  return (
    <>
      {meteorStyles.map((style, index) => (
        <span
          key={index}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-cyan-500 shadow-[0_0_0_1px_#ffffff18]",
            className
          )}
        >
          <span className="pointer-events-none absolute top-1/2 -z-10 h-px w-[60px] -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-transparent" />
        </span>
      ))}
    </>
  );
}
