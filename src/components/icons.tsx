import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type P = SVGProps<SVGSVGElement>;

export function MapPinIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 5.5-8 11.5-8 11.5S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function SearchIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function SparkIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
      <path d="M12 8.2 13.4 11l2.8 1.4-2.8 1.4L12 16.4l-1.4-2.6L7.8 12.4 10.6 11 12 8.2Z" />
    </svg>
  );
}

export function WebIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M7 6.4h.01M10 6.4h.01" />
    </svg>
  );
}

export function ServerIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M10.5 7.5H17M10.5 16.5H17" />
    </svg>
  );
}

export function TrendIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l5.5-5.5 3.5 3.5L20 7" />
      <path d="M15.5 7H20v4.5" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function DashIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M7 12h10" />
    </svg>
  );
}

export function ArrowRightIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a13 13 0 0 0 5.6 5.6l1.6-2.2L20 15v4a1.6 1.6 0 0 1-1.7 1.6A16.6 16.6 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />
    </svg>
  );
}

export function CalendarIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="m9.5 15 1.8 1.8L15 13.5" />
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.6l2.9 5.9 6.5 1-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.1 1.1-6.5L2.6 9.5l6.5-1L12 2.6Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ShieldIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.6v5.3c0 4.4 3 8.2 7 9.6 4-1.4 7-5.2 7-9.6V5.6L12 3Z" />
      <path d="m9 11.6 2 2 4-4" />
    </svg>
  );
}

export function UsersIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 4.8a3.4 3.4 0 0 1 0 6.4M17.7 13.7a5.5 5.5 0 0 1 2.8 4.8" />
    </svg>
  );
}

export function ClockIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ZapIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}