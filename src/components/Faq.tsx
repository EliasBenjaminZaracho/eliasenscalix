"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "@/components/icons";

type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-paper">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
              aria-expanded={open}
            >
              <span className="font-serif text-lg font-semibold tracking-tight text-ink">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  open
                    ? "rotate-180 border-violet-600 bg-violet-600 text-white"
                    : "border-ink/15 text-muted",
                )}
              >
                <ChevronDownIcon className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:px-8 md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}