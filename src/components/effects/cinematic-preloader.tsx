"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import anime from "animejs";
import Image from "next/image";
import { CRTEffects } from "./crt-effects";

// ─── Scene color configurations ───────────────────────────────────────────
interface SceneConfig {
  bg: string;          // CSS background color
  accent: string;      // CSS accent color
  text: string;        // CSS text color
  gridOpacity: number;
  scanlinesOpacity: number;
  vignetteOpacity: number;
}

const SCENES: SceneConfig[] = [
  // Screen 1 - 2016: Retro pixel
  { bg: "#0a0a0a", accent: "120, 60%, 50%", text: "210, 10%, 60%", gridOpacity: 0.08, scanlinesOpacity: 0.06, vignetteOpacity: 0.4 },
  // Screen 2 - 2018: Early evolution
  { bg: "#0d0d10", accent: "200, 70%, 50%", text: "210, 10%, 65%", gridOpacity: 0.05, scanlinesOpacity: 0.03, vignetteOpacity: 0.3 },
  // Screen 3 - 2021: Modern interface
  { bg: "#0a0a12", accent: "210, 80%, 55%", text: "210, 10%, 75%", gridOpacity: 0.04, scanlinesOpacity: 0, vignetteOpacity: 0.2 },
  // Screen 4 - 2024: Premium design
  { bg: "#06060e", accent: "210, 100%, 55%", text: "210, 10%, 80%", gridOpacity: 0.02, scanlinesOpacity: 0, vignetteOpacity: 0.15 },
  // Screen 5 - SYNTAX X: Final
  { bg: "#050508", accent: "210, 100%, 55%", text: "210, 10%, 90%", gridOpacity: 0, scanlinesOpacity: 0, vignetteOpacity: 0.1 },
];

// ─── SVG Illustration Components ─────────────────────────────────────────

/** Screen 1: Retro pixel computer (2016) */
function Screen1Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* CRT Monitor */}
      <rect x="100" y="40" width="200" height="160" rx="4" stroke="hsl(120, 60%, 50%)" strokeWidth="3" fill="rgba(10,10,10,0.6)" />
      {/* Monitor screen glow */}
      <rect x="112" y="52" width="176" height="120" rx="2" fill="rgba(51, 255, 51, 0.03)" />
      {/* Screen bezels */}
      <rect x="112" y="52" width="176" height="120" rx="2" stroke="hsl(120, 60%, 30%)" strokeWidth="1.5" opacity="0.5" />
      {/* CRT curvature line */}
      <path d="M112 172 C 150 165, 250 165, 288 172" stroke="hsl(120, 60%, 30%)" strokeWidth="0.5" opacity="0.3" />
      {/* Blinking green cursor in screen */}
      <rect x="150" y="80" width="8" height="14" fill="hsl(120, 60%, 50%)" className="cursor-blink" opacity="0.8" />
      {/* Screen text lines */}
      <line x1="130" y1="102" x2="220" y2="102" stroke="hsl(120, 60%, 35%)" strokeWidth="1.5" opacity="0.4" />
      <line x1="130" y1="116" x2="250" y2="116" stroke="hsl(120, 60%, 35%)" strokeWidth="1.5" opacity="0.3" />
      <line x1="130" y1="130" x2="190" y2="130" stroke="hsl(120, 60%, 35%)" strokeWidth="1.5" opacity="0.2" />
      {/* Monitor stand */}
      <rect x="180" y="200" width="40" height="16" rx="2" fill="hsl(120, 60%, 50%)" opacity="0.6" />
      <rect x="160" y="216" width="80" height="8" rx="2" fill="hsl(120, 60%, 50%)" opacity="0.4" />
      
      {/* Pixel Keyboard */}
      <rect x="120" y="238" width="160" height="48" rx="2" stroke="hsl(30, 70%, 50%)" strokeWidth="2" fill="rgba(10,10,10,0.4)" />
      {/* Key rows */}
      {[0,1,2].map(row => (
        <g key={`row-${row}`}>
          {[0,1,2,3,4,5,6,7,8,9].slice(0, row === 2 ? 6 : 10).map((col, i) => (
            <rect key={`k-${row}-${i}`}
              x={128 + i * (row === 2 ? 20 : 14)} y={244 + row * 14}
              width={row === 2 ? 16 : 10} height={10} rx={1}
              fill="hsl(30, 70%, 50%)" opacity={0.3 + row * 0.05}
            />
          ))}
        </g>
      ))}
      
      {/* Pixel Mouse */}
      <rect x="300" y="250" width="24" height="32" rx="6" stroke="hsl(30, 70%, 50%)" strokeWidth="2" fill="rgba(10,10,10,0.4)" />
      <line x1="312" y1="254" x2="312" y2="262" stroke="hsl(30, 70%, 50%)" strokeWidth="1.5" opacity="0.6" />
      {/* Mouse cable */}
      <path d="M312 250 Q 312 240, 290 238" stroke="hsl(30, 70%, 50%)" strokeWidth="1" opacity="0.4" fill="none" />
      
      {/* Floppy Disk icon */}
      <rect x="60" y="250" width="24" height="24" rx="2" stroke="hsl(40, 60%, 60%)" strokeWidth="1.5" fill="rgba(10,10,10,0.4)" opacity="0.7" />
      <rect x="64" y="258" width="8" height="8" rx="1" fill="hsl(40, 60%, 60%)" opacity="0.4" />
      
      {/* Year label */}
      <text x="200" y="300" textAnchor="middle" fill="hsl(210, 10%, 40%)" fontSize="12" fontFamily="monospace" letterSpacing="4" opacity="0.6">2016</text>
    </svg>
  );
}

/** Screen 2: Cleaner retro (2018) */
function Screen2Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor - cleaner, sharper corners */}
      <rect x="105" y="40" width="190" height="155" rx="3" stroke="hsl(200, 70%, 50%)" strokeWidth="2" fill="rgba(13,13,16,0.5)" />
      <rect x="115" y="52" width="170" height="115" rx="1" stroke="hsl(200, 70%, 35%)" strokeWidth="1" opacity="0.5" />
      {/* Brighter screen area */}
      <rect x="115" y="52" width="170" height="115" rx="1" fill="rgba(0, 150, 255, 0.02)" />
      {/* UI elements inside screen - cleaner windows */}
      <rect x="125" y="62" width="60" height="40" rx="2" stroke="hsl(200, 70%, 45%)" strokeWidth="1" opacity="0.4" />
      <rect x="125" y="62" width="60" height="8" rx="1" fill="hsl(200, 70%, 45%)" opacity="0.2" />
      <rect x="195" y="62" width="80" height="25" rx="2" stroke="hsl(200, 70%, 45%)" strokeWidth="1" opacity="0.4" />
      <line x1="130" y1="110" x2="250" y2="110" stroke="hsl(200, 70%, 40%)" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="122" x2="230" y2="122" stroke="hsl(200, 70%, 40%)" strokeWidth="1" opacity="0.2" />
      <line x1="130" y1="134" x2="260" y2="134" stroke="hsl(200, 70%, 40%)" strokeWidth="1" opacity="0.15" />
      {/* Monitor stand */}
      <rect x="183" y="195" width="34" height="12" rx="2" fill="hsl(200, 70%, 50%)" opacity="0.5" />
      <rect x="165" y="207" width="70" height="6" rx="2" fill="hsl(200, 70%, 50%)" opacity="0.3" />
      
      {/* Keyboard - thinner */}
      <rect x="125" y="235" width="150" height="40" rx="3" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" fill="rgba(13,13,16,0.3)" />
      {[0,1,2].map(row => (
        <g key={`kr-${row}`}>
          {Array.from({length: row === 2 ? 6 : 9}).map((_, i) => (
            <rect key={`kb-${row}-${i}`}
              x={132 + i * 15} y={241 + row * 12}
              width={11} height={8} rx={1.5}
              fill="hsl(200, 70%, 50%)" opacity={0.2 + row * 0.04}
            />
          ))}
        </g>
      ))}
      
      {/* Mouse - sleeker */}
      <ellipse cx="305" cy="258" rx="11" ry="15" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" fill="rgba(13,13,16,0.3)" />
      <line x1="305" y1="246" x2="305" y2="254" stroke="hsl(200, 70%, 50%)" strokeWidth="1" opacity="0.5" />
      
      {/* Folder icon */}
      <rect x="65" y="248" width="22" height="18" rx="2" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" fill="rgba(13,13,16,0.3)" opacity="0.6" />
      <rect x="65" y="248" width="10" height="4" rx="1" fill="hsl(200, 70%, 50%)" opacity="0.3" />
      
      {/* Year */}
      <text x="200" y="300" textAnchor="middle" fill="hsl(210, 10%, 50%)" fontSize="12" fontFamily="monospace" letterSpacing="4" opacity="0.5">2018</text>
    </svg>
  );
}

/** Screen 3: Modern flat design (2021) */
function Screen3Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blueprint grid dots */}
      {Array.from({length: 8}).map((_, row) => (
        Array.from({length: 10}).map((_, col) => (
          <circle key={`dot-${row}-${col}`} cx={40 + col * 36} cy={32 + row * 32} r="1" fill="hsl(210, 80%, 55%)" opacity={0.15} />
        ))
      ))}
      {/* Blueprint grid lines */}
      {Array.from({length: 5}).map((_, i) => (
        <line key={`hl-${i}`} x1="40" y1={64 + i * 64} x2="360" y2={64 + i * 64} stroke="hsl(210, 80%, 55%)" strokeWidth="0.5" opacity={0.08} />
      ))}
      {Array.from({length: 6}).map((_, i) => (
        <line key={`vl-${i}`} x1={72 + i * 64} y1="32" x2={72 + i * 64} y2="288" stroke="hsl(210, 80%, 55%)" strokeWidth="0.5" opacity={0.08} />
      ))}
      
      {/* Flat monitor */}
      <rect x="110" y="45" width="180" height="140" rx="2" stroke="hsl(210, 80%, 55%)" strokeWidth="1.5" fill="rgba(10,10,18,0.4)" />
      <rect x="118" y="55" width="164" height="108" rx="1" fill="rgba(0, 100, 255, 0.02)" />
      {/* Modern UI elements inside screen */}
      {/* Top bar */}
      <rect x="118" y="55" width="164" height="12" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.12" />
      <rect x="126" y="59" width="40" height="4" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.3" />
      <rect x="248" y="59" width="12" height="4" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.2" />
      <rect x="264" y="59" width="12" height="4" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.2" />
      {/* Content cards */}
      <rect x="126" y="75" width="70" height="50" rx="3" stroke="hsl(210, 80%, 55%)" strokeWidth="1" opacity="0.3" />
      <rect x="126" y="75" width="70" height="10" rx="2" fill="hsl(210, 80%, 55%)" opacity="0.08" />
      <line x1="132" y1="92" x2="180" y2="92" stroke="hsl(210, 80%, 55%)" strokeWidth="1" opacity="0.2" />
      <line x1="132" y1="100" x2="170" y2="100" stroke="hsl(210, 80%, 55%)" strokeWidth="1" opacity="0.15" />
      <line x1="132" y1="108" x2="185" y2="108" stroke="hsl(210, 80%, 55%)" strokeWidth="1" opacity="0.1" />
      
      <rect x="204" y="75" width="70" height="50" rx="3" stroke="hsl(210, 80%, 55%)" strokeWidth="1" opacity="0.3" />
      <rect x="204" y="75" width="70" height="10" rx="2" fill="hsl(210, 80%, 55%)" opacity="0.08" />
      
      {/* Bottom bar */}
      <rect x="118" y="145" width="164" height="18" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.06" />
      <circle cx="128" cy="154" r="3" fill="hsl(210, 80%, 55%)" opacity="0.3" />
      <rect x="140" y="152" width="60" height="4" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.15" />
      
      {/* Thin stand */}
      <rect x="185" y="185" width="30" height="8" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.5" />
      <rect x="170" y="193" width="60" height="4" rx="1" fill="hsl(210, 80%, 55%)" opacity="0.3" />
      
      {/* Minimal keyboard */}
      <rect x="130" y="228" width="140" height="32" rx="2" stroke="hsl(210, 80%, 55%)" strokeWidth="1" fill="rgba(10,10,18,0.3)" />
      {/* Keys */}
      {[0,1,2].map(row => (
        Array.from({length: row === 2 ? 6 : 10}).map((_, i) => (
          <rect key={`k3-${row}-${i}`}
            x={138 + i * 13} y={234 + row * 10}
            width={9} height={6} rx={1}
            fill={row === 1 && i === 4 ? "hsl(210, 80%, 55%)" : "hsl(210, 80%, 55%)"}
            opacity={row === 1 && i === 4 ? 0.4 : 0.15}
          />
        ))
      ))}
      
      {/* Code bracket icon */}
      <path d="M68 252 L58 264 L68 276" stroke="hsl(0, 0%, 80%)" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88 252 L98 264 L88 276" stroke="hsl(0, 0%, 80%)" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Year */}
      <text x="200" y="305" textAnchor="middle" fill="hsl(210, 10%, 60%)" fontSize="12" fontFamily="system-ui" letterSpacing="4" opacity="0.5">2021</text>
    </svg>
  );
}

/** Screen 4: Glassmorphism premium (2024) */
function Screen4Illustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient mesh background */}
      <defs>
        <radialGradient id="mesh-glow-4" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="hsl(210, 100%, 55%)" stopOpacity="0.08" />
          <stop offset="50%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.03" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id="glass-blur-4">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id="soft-glow-4">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="400" height="320" fill="url(#mesh-glow-4)" />
      
      {/* Floating glass card 1 */}
      <rect x="115" y="50" width="170" height="130" rx="12" stroke="rgba(0, 150, 255, 0.15)" strokeWidth="1" fill="rgba(255,255,255,0.03)" filter="url(#glass-blur-4)" />
      {/* Inner glass elements */}
      <rect x="130" y="65" width="140" height="8" rx="3" fill="rgba(0, 150, 255, 0.15)" />
      <rect x="130" y="82" width="100" height="4" rx="2" fill="rgba(0, 150, 255, 0.08)" />
      <rect x="130" y="92" width="80" height="4" rx="2" fill="rgba(0, 150, 255, 0.06)" />
      {/* Glass card 2 */}
      <rect x="140" y="105" width="120" height="40" rx="8" stroke="rgba(0, 200, 255, 0.1)" strokeWidth="1" fill="rgba(255,255,255,0.02)" filter="url(#glass-blur-4)" />
      <rect x="150" y="115" width="60" height="4" rx="2" fill="rgba(0, 200, 255, 0.1)" />
      <rect x="150" y="125" width="40" height="4" rx="2" fill="rgba(0, 200, 255, 0.06)" />
      
      {/* Floating card 3 - sidebar */}
      <rect x="85" y="75" width="24" height="60" rx="6" stroke="rgba(0, 150, 255, 0.08)" strokeWidth="1" fill="rgba(255,255,255,0.02)" filter="url(#glass-blur-4)" opacity="0.7" />
      <circle cx="97" cy="84" r="3" fill="rgba(0, 150, 255, 0.15)" />
      <circle cx="97" cy="96" r="3" fill="rgba(0, 150, 255, 0.08)" />
      <circle cx="97" cy="108" r="3" fill="rgba(0, 150, 255, 0.08)" />
      
      {/* Glowing accent line */}
      <rect x="115" y="180" width="170" height="2" rx="1" fill="hsl(210, 100%, 55%)" opacity="0.4" filter="url(#soft-glow-4)" />
      
      {/* Glassmorphism floating element bottom */}
      <rect x="145" y="210" width="110" height="30" rx="8" stroke="rgba(0, 200, 255, 0.08)" strokeWidth="1" fill="rgba(255,255,255,0.02)" filter="url(#glass-blur-4)" />
      <circle cx="158" cy="225" r="5" fill="rgba(0, 200, 255, 0.12)" />
      <rect x="170" y="221" width="50" height="4" rx="2" fill="rgba(0, 200, 255, 0.08)" />
      <rect x="170" y="229" width="30" height="3" rx="1.5" fill="rgba(0, 200, 255, 0.05)" />
      
      {/* Cyan accent dot */}
      <circle cx="200" cy="40" r="2" fill="hsl(180, 100%, 60%)" opacity="0.4" filter="url(#soft-glow-4)" />
      
      {/* Year */}
      <text x="200" y="288" textAnchor="middle" fill="hsl(210, 10%, 65%)" fontSize="12" fontFamily="system-ui" letterSpacing="4" opacity="0.5" fontWeight="500">2024</text>
    </svg>
  );
}

/** Screen 5: SYNTAX X Logo - this is just the background context, the logo is rendered separately via next/image */
function Screen5Background({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Minimal dark gradient */}
      <defs>
        <radialGradient id="logo-spotlight" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="hsl(210, 100%, 55%)" stopOpacity="0.12" />
          <stop offset="40%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ambient-glow" cx="50%" cy="48%" r="35%">
          <stop offset="0%" stopColor="hsl(180, 100%, 60%)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id="logo-glow-filter">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect x="0" y="0" width="400" height="320" fill="url(#logo-spotlight)" />
      <rect x="0" y="0" width="400" height="320" fill="url(#ambient-glow)" />
      {/* Subtle horizontal light sweep */}
      <rect x="0" y="158" width="400" height="4" rx="2" fill="hsl(210, 100%, 55%)" opacity="0.04" filter="url(#logo-glow-filter)" />
    </svg>
  );
}

// ─── Background Grid Component ───────────────────────────────────────────
function BackgroundGrid({ opacity, variant }: { opacity: number; variant: "pixel" | "thin" | "blueprint" | "mesh" | "none" }) {
  if (variant === "none" || opacity === 0) return null;
  
  const style: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity,
    transition: "opacity 800ms ease-in-out",
  };

  if (variant === "pixel") {
    style.backgroundImage = `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 24px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 24px)
    `;
    style.backgroundSize = "24px 24px";
  } else if (variant === "thin") {
    style.backgroundImage = `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px)
    `;
    style.backgroundSize = "32px 32px";
  } else if (variant === "blueprint") {
    style.backgroundImage = `
      repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(0, 100, 255, 0.04) 39px, rgba(0, 100, 255, 0.04) 40px),
      repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(0, 100, 255, 0.04) 39px, rgba(0, 100, 255, 0.04) 40px)
    `;
    style.backgroundSize = "40px 40px";
    style.backgroundPosition = "center center";
  } else if (variant === "mesh") {
    style.background = `radial-gradient(ellipse at 50% 45%, rgba(0, 100, 255, 0.03) 0%, transparent 70%)`;
  }

  return <div style={style} />;
}

// ─── Main Preloader Component ────────────────────────────────────────────

export function CinematicPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isReturnVisitor, setIsReturnVisitor] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [exitPhase, setExitPhase] = useState(false);
  const [fadeOutProgress, setFadeOutProgress] = useState(0);
  
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const scenesRef = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<anime.AnimeInstance | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoadedSyntaxPreloader");
    if (hasLoaded) {
      setIsReturnVisitor(true);
      return;
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (prefersReducedMotion) {
      // Simple fade: show logo briefly, then exit
      if (bgRef.current) bgRef.current.style.backgroundColor = SCENES[4].bg;
      setCurrentScene(4);
      setTimeout(() => {
        setExitPhase(true);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("hasLoadedSyntaxPreloader", "true");
        }, 400);
      }, 600);
      return;
    }

    // ── Build the animation timeline ──
    const tl = anime.timeline({ easing: "easeInOutQuad", autoplay: false });
    timelineRef.current = tl;

    const screens = scenesRef.current;
    const bg = bgRef.current;
    const logo = logoRef.current;
    const tagline = taglineRef.current;
    if (!screens || !bg) return;

    // Screen durations and crossfade lengths
    const STAGE_DURATION = 1200;    // each screen visible for 1.2s
    const CROSSFADE = 800;          // crossfade between screens
    const LOGO_HOLD = 2000;         // Screen 5 visible for 2s
    const FINAL_HOLD = 1000;        // Hold before transition
    const EXIT_DURATION = 600;      // Final fade out

    const S1_START = 0;
    const S1_FADE_IN = 400;
    const S1_TO_S2 = S1_START + STAGE_DURATION;
    const S2_FADE_IN = S1_TO_S2;
    const S2_TO_S3 = S2_FADE_IN + STAGE_DURATION;
    const S3_FADE_IN = S2_TO_S3;
    const S3_TO_S4 = S3_FADE_IN + STAGE_DURATION;
    const S4_FADE_IN = S3_TO_S4;
    const S4_TO_S5 = S4_FADE_IN + STAGE_DURATION;
    const S5_FADE_IN = S4_TO_S5;
    const S5_END = S5_FADE_IN + LOGO_HOLD;
    const FINAL_START = S5_END + FINAL_HOLD;
    const TOTAL_END = FINAL_START + EXIT_DURATION;

    // Helper: crossfade scenes
    const crossfade = (from: number, to: number, duration: number, start: number) => {
      if (screens[from]) {
        tl.add({ targets: screens[from], opacity: [1, 0], duration, easing: "easeInOutQuad" }, start);
      }
      if (screens[to]) {
        tl.add({ targets: screens[to], opacity: [0, 1], duration, easing: "easeInOutQuad" }, start);
      }
    };

    // Scene 1: fade in
    if (screens[0]) {
      tl.add({
        targets: screens[0], opacity: [0, 1], duration: S1_FADE_IN, easing: "easeOutQuad",
        begin: () => setCurrentScene(0),
      }, 0);
    }

    // Crossfade Scene 1 → 2
    crossfade(0, 1, CROSSFADE, S1_TO_S2 - CROSSFADE * 0.3);
    tl.add({
      targets: bg, backgroundColor: [SCENES[0].bg, SCENES[1].bg],
      duration: CROSSFADE, easing: "easeInOutQuad",
      begin: () => setCurrentScene(1),
    }, S1_TO_S2 - CROSSFADE * 0.3);

    // Crossfade Scene 2 → 3
    crossfade(1, 2, CROSSFADE, S2_TO_S3 - CROSSFADE * 0.3);
    tl.add({
      targets: bg, backgroundColor: [SCENES[1].bg, SCENES[2].bg],
      duration: CROSSFADE, easing: "easeInOutQuad",
      begin: () => setCurrentScene(2),
    }, S2_TO_S3 - CROSSFADE * 0.3);

    // Crossfade Scene 3 → 4
    crossfade(2, 3, CROSSFADE, S3_TO_S4 - CROSSFADE * 0.3);
    tl.add({
      targets: bg, backgroundColor: [SCENES[2].bg, SCENES[3].bg],
      duration: CROSSFADE, easing: "easeInOutQuad",
      begin: () => setCurrentScene(3),
    }, S3_TO_S4 - CROSSFADE * 0.3);

    // Crossfade Scene 4 → 5 (logo appears)
    crossfade(3, 4, CROSSFADE, S4_TO_S5 - CROSSFADE * 0.3);
    tl.add({
      targets: bg, backgroundColor: [SCENES[3].bg, SCENES[4].bg],
      duration: CROSSFADE, easing: "easeInOutQuad",
      begin: () => setCurrentScene(4),
    }, S4_TO_S5 - CROSSFADE * 0.3);

    // Logo fade in with slight scale (98% → 100%)
    if (logo) {
      tl.add({
        targets: logo, opacity: [0, 1], scale: [0.98, 1],
        duration: 800, easing: "easeOutQuad",
      }, S4_TO_S5 + 200);
    }

    // Tagline "10 YEARS OF INNOVATION" fade in
    if (tagline) {
      tl.add({
        targets: tagline, opacity: [0, 1], translateY: [8, 0],
        duration: 600, easing: "easeOutQuad",
      }, S4_TO_S5 + 600);
    }

    // Final transition: fade out everything
    tl.add({
      targets: rootRef.current,
      opacity: [1, 0],
      duration: EXIT_DURATION,
      easing: "easeInOutQuad",
      begin: () => {
        setExitPhase(true);
        // Animate fade out progress for overlay effects
        setFadeOutProgress(0);
      },
      update: (anim) => setFadeOutProgress(anim.progress),
      complete: () => {
        sessionStorage.setItem("hasLoadedSyntaxPreloader", "true");
        setIsVisible(false);
      },
    }, FINAL_START);

    tl.play();

    return () => {
      if (timelineRef.current) timelineRef.current.pause();
    };
  }, [isMounted, prefersReducedMotion]);

  if (isReturnVisitor) return null;
  if (!isVisible) return null;

  const gridVariants: ("pixel" | "thin" | "blueprint" | "mesh" | "none")[] = ["pixel", "thin", "blueprint", "mesh", "none"];

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: SCENES[currentScene].bg,
        transition: "opacity 600ms ease-in-out",
      }}
    >
      {/* Background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ backgroundColor: SCENES[0].bg }}
      />

      {/* Grid overlay */}
      <BackgroundGrid opacity={SCENES[currentScene].gridOpacity} variant={gridVariants[currentScene]} />

      {/* Scanlines (Screen 1 only) */}
      {currentScene === 0 && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)`,
          opacity: 0.8,
          backgroundSize: "100% 4px",
        }} />
      )}

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,${0.3 + currentScene * 0.02}) 100%)`,
        opacity: SCENES[currentScene].vignetteOpacity,
      }} />

      {/* CRT Effects for Screen 1 */}
      {currentScene === 0 && (
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }}>
          <CRTEffects visible={true} showNoise={true} />
        </div>
      )}

      {/* Illustrations container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-8">
        {/* Screen 1: Retro pixel computer (2016) */}
        <div
          ref={(el) => { scenesRef.current[0] = el; }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Screen1Illustration className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>

        {/* Screen 2: Cleaner retro (2018) */}
        <div
          ref={(el) => { scenesRef.current[1] = el; }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Screen2Illustration className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>

        {/* Screen 3: Modern flat design (2021) */}
        <div
          ref={(el) => { scenesRef.current[2] = el; }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Screen3Illustration className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>

        {/* Screen 4: Glassmorphism (2024) */}
        <div
          ref={(el) => { scenesRef.current[3] = el; }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Screen4Illustration className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>

        {/* Screen 5: SYNTAX X Logo */}
        <div
          ref={(el) => { scenesRef.current[4] = el; }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div
              ref={logoRef}
              className="relative"
              style={{ opacity: 0, transform: "scale(0.98)" }}
            >
              <Image
                src="/images/logo-spl.png"
                alt="SYNTAX X 10th Anniversary"
                width={280}
                height={100}
                className="h-auto w-[200px] md:w-[280px] object-contain"
                priority
              />
              {/* Soft circular glow behind logo */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full"
                  style={{
                    background: "radial-gradient(circle, hsla(210, 100%, 55%, 0.08) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
            {/* Tagline */}
            <div
              ref={taglineRef}
              className="text-center"
              style={{ opacity: 0 }}
            >
              <p className="text-[10px] md:text-xs tracking-[0.25em] font-medium"
                style={{ color: "hsla(210, 10%, 80%, 0.7)" }}>
                10 YEARS OF INNOVATION
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit overlay for final blend */}
      {exitPhase && (
        <div className="absolute inset-0 pointer-events-none z-20" style={{
          opacity: fadeOutProgress / 100,
          background: "transparent",
        }} />
      )}
    </div>
  );
}
