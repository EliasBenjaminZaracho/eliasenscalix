import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "outline" | "soft" | "gold" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-700/20",
  outline:
    "border border-ink/15 text-ink hover:border-violet-600 hover:text-violet-700",
  soft: "bg-violet-100 text-violet-800 hover:bg-violet-200",
  gold: "bg-gold text-ink hover:bg-gold-deep shadow-md shadow-gold/30",
  light:
    "bg-white text-ink hover:bg-violet-50 shadow-md shadow-black/10 border border-ink/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-[3.25rem] px-8 text-base gap-2",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon = false,
  className,
  children,
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600",
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      {children}
      {icon && <ArrowRightIcon className="h-4 w-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <button className={cls}>{inner}</button>;
}