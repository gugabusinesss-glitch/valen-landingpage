import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-teal-bright hover:shadow-[0_0_40px_-8px_var(--glow)]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted hover:border-teal/60",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type StyleProps = { variant?: Variant; size?: Size };

type ButtonProps = StyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = StyleProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...rest
}: ButtonProps | AnchorProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof (rest as AnchorProps).href === "string") {
    return (
      <a className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
