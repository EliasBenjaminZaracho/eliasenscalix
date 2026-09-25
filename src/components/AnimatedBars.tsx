"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export default function AnimatedBars({
  bars,
  className,
}: {
  bars: number[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGrown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const last = bars.length - 1;

  return (
    <div
      ref={ref}
      className={cn("flex h-36 items-end gap-2.5", className)}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            height: grown ? `${h}%` : "6%",
            transition: `height 900ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
          }}
          className={cn(
            "flex-1 rounded-full",
            i === last
              ? "bg-linear-to-t from-gold to-gold/70"
              : "bg-linear-to-t from-violet-700 to-violet-400",
          )}
        />
      ))}
    </div>
  );
}
