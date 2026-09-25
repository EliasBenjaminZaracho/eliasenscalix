import Image from "next/image";
import { cn } from "@/lib/cn";

export default function Logo({
  className,
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/scalix.png"
        alt="Scalix"
        width={2135}
        height={736}
        className="h-8 w-auto md:h-9"
        priority
      />
    </span>
  );
}
