"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function Typewriter({
  words,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  holdMs = 2200,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdMs?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, holdMs]);

  return (
    <span className={cn("break-words", className)}>
      {text}
      <span className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.08em] animate-pulse bg-violet-500" />
    </span>
  );
}
