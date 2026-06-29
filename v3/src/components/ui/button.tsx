import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "ghost" | "outline";

interface BaseProps {
  size?: Size;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.9375rem] gap-2",
  lg: "h-13 px-7 text-base gap-2",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cream text-ink hover:bg-cream/90 active:bg-cream/95 shadow-soft",
  ghost:
    "bg-transparent text-cream/75 hover:bg-cream/[0.08] hover:text-cream active:bg-cream/10",
  outline:
    "bg-transparent border border-cream/20 text-cream hover:bg-cream/[0.06] active:bg-cream/10",
};

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold leading-none tracking-[-0.01em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 select-none whitespace-nowrap";

export function Button({
  size = "md",
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizeClasses[size], variantClasses[variant], className);

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
