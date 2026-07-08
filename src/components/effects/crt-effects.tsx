"use client";

import { cn } from "@/lib/utils";

interface CRTEffectsProps {
  visible?: boolean;
  className?: string;
  showNoise?: boolean;
}

export function CRTEffects({
  visible = true,
  className,
  showNoise = true,
}: CRTEffectsProps) {
  if (!visible) return null;

  return (
    <div className={cn("crt-overlay", className)}>
      {/* Scanlines provided by .crt-overlay::before */}
      {/* Vignette provided by .crt-overlay::after */}
      {/* Extra noise texture layer */}
      {showNoise && <div className="noise-overlay" />}
    </div>
  );
}
