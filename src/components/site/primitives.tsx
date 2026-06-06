import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}

export function LambdaMark({
  size = 26,
  variant = "cream",
  className,
}: {
  size?: number;
  variant?: "cream" | "ink";
  className?: string;
}) {
  return (
    <Image
      src={`/brand/lambda-${variant}.png`}
      alt="λ"
      width={Math.round(size * 0.669)}
      height={size}
      className={className}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LambdaMark size={24} />
      <span className="h-5 w-px bg-border" />
      <span className="text-lg font-semibold uppercase tracking-[0.25em] text-foreground">
        Valen
      </span>
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-teal-bright",
        className,
      )}
    >
      <span className="h-px w-7 bg-teal/60" />
      {children}
    </span>
  );
}
