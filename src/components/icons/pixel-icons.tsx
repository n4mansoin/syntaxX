"use client";

import React from "react";

// ─── Icon definitions: each icon has a pixel variant and a modern variant ──
// All icons use a 32×32 viewBox for consistency

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// 1. Monitor / Screen
export const IconMonitor: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    {/* Pixel variant - hidden by default, shown via CSS */}
    <g className="icon-pixel">
      <rect x="4" y="6" width="24" height="16" fill="currentColor" rx="0" />
      <rect x="4" y="6" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="22" width="4" height="3" fill="currentColor" />
      <rect x="10" y="25" width="12" height="2" fill="currentColor" />
    </g>
    {/* Modern variant - hidden by default, shown via CSS */}
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="4" y="5" width="24" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="22" width="6" height="3" rx="1" fill="currentColor" />
      <line x1="8" y1="25" x2="24" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </g>
  </svg>
);

// 2. Folder
export const IconFolder: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="2" y="7" width="28" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="2" y="7" width="12" height="4" fill="currentColor" />
      <rect x="6" y="13" width="8" height="2" fill="currentColor" opacity="0.5" />
      <rect x="6" y="17" width="16" height="2" fill="currentColor" opacity="0.5" />
      <rect x="6" y="21" width="12" height="2" fill="currentColor" opacity="0.5" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <path d="M2 25V9c0-1.1.9-2 2-2h8l4 4h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="6" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <line x1="6" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </g>
  </svg>
);

// 3. Floppy Disk
export const IconFloppy: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="4" y="4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="6" y="6" width="12" height="10" fill="currentColor" opacity="0.3" />
      <rect x="18" y="6" width="8" height="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="18" width="16" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="20" width="4" height="4" fill="currentColor" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="4" y="4" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="6" width="10" height="8" rx="1" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      <rect x="20" y="6" width="6" height="5" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="9" y="18" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="11" cy="21" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

// 4. Circuit Board
export const IconCircuit: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="3" y="3" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <circle cx="24" cy="16" r="2" fill="currentColor" />
      <circle cx="8" cy="24" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="24" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="4" width="3" height="2" fill="currentColor" />
      <rect x="4" y="14" width="3" height="2" fill="currentColor" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="3" y="3" width="26" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
      <circle cx="24" cy="16" r="2.5" fill="currentColor" />
      <circle cx="8" cy="24" r="2.5" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8 L14 14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M18 14 L24 16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M8 24 L14 18" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
      <rect x="19" y="5" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="5" y="15" width="2" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
    </g>
  </svg>
);

// 5. Joystick
export const IconJoystick: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="6" y="6" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="6" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="12" width="8" height="4" fill="currentColor" />
      <rect x="20" y="12" width="8" height="4" fill="currentColor" />
      <circle cx="16" cy="6" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="6" r="1.5" fill="currentColor" />
      <rect x="14" y="18" width="4" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="24" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="5" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="19" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="11" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
      <rect x="17" y="11" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="16" cy="5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="5" r="2" fill="currentColor" />
      <rect x="14" y="18" width="4" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="24" width="10" height="3" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

// 6. Robot
export const IconRobot: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="8" y="6" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="8" width="4" height="4" fill="currentColor" />
      <rect x="18" y="8" width="4" height="4" fill="currentColor" />
      <rect x="14" y="13" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="6" y="12" width="3" height="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="23" y="12" width="3" height="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="18" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="18" width="4" height="8" fill="currentColor" opacity="0.3" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="9" y="5" width="14" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="1.8" fill="currentColor" />
      <circle cx="20" cy="9" r="1.8" fill="currentColor" />
      <rect x="14.5" y="11.5" width="3" height="2.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="11" width="4" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="11" width="4" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="17" width="12" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="13" cy="21" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="19" cy="21" r="1" fill="currentColor" opacity="0.4" />
    </g>
  </svg>
);

// 7. CPU / Microchip
export const IconCPU: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="8" y="8" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="10" height="10" fill="currentColor" opacity="0.3" />
      <rect x="14" y="4" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="14" y="24" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="14" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="24" y="14" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="8" y="4" width="3" height="2" fill="currentColor" />
      <rect x="21" y="4" width="3" height="2" fill="currentColor" />
      <rect x="8" y="26" width="3" height="2" fill="currentColor" />
      <rect x="21" y="26" width="3" height="2" fill="currentColor" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="8" y="8" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="10" height="10" rx="1" fill="currentColor" opacity="0.12" />
      <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="6" x2="10" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="22" y1="6" x2="22" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="10" y1="24" x2="10" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="22" y1="24" x2="22" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 8. Terminal Window
export const IconTerminal: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="3" y="5" width="26" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="5" width="26" height="5" fill="currentColor" opacity="0.3" />
      <rect x="5" y="7" width="3" height="2" fill="currentColor" />
      <rect x="9" y="7" width="3" height="2" fill="currentColor" />
      <rect x="13" y="7" width="3" height="2" fill="currentColor" />
      <path d="M6 14 L10 17 L6 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="21" width="8" height="2" fill="currentColor" opacity="0.4" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="3" y="5" width="26" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="5" width="26" height="5" rx="3" fill="currentColor" opacity="0.1" />
      <circle cx="6.5" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="13.5" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
      <path d="M6 14 L10 17 L6 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </g>
  </svg>
);

// 9. Chip / Processor
export const IconChip: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <rect x="6" y="6" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="14" height="14" fill="currentColor" opacity="0.3" />
      <circle cx="16" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="14" y="4" width="4" height="2" fill="currentColor" />
      <rect x="14" y="26" width="4" height="2" fill="currentColor" />
      <rect x="4" y="14" width="2" height="4" fill="currentColor" />
      <rect x="26" y="14" width="2" height="4" fill="currentColor" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <rect x="7" y="7" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="12" height="12" rx="1" fill="currentColor" opacity="0.1" />
      <circle cx="16" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="25" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="5" x2="12" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <line x1="20" y1="5" x2="20" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </g>
  </svg>
);

// 10. Code Bracket / Gear (replacing "toolbar" - used as a generic tech icon)
export const IconCode: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 32 32" className={className} style={style}>
    <g className="icon-pixel">
      <path d="M8 10 L3 16 L8 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 10 L29 16 L24 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="13" y1="8" x2="19" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="6" width="4" height="2" fill="currentColor" />
      <rect x="14" y="24" width="4" height="2" fill="currentColor" />
    </g>
    <g className="icon-modern" style={{ display: "none" }}>
      <path d="M7 10 L3 16 L7 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 10 L29 16 L25 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="8" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// ─── Map of all icons for easy iteration ───────────────────────────────────
export const PIXEL_ICONS = [
  { id: "monitor", Component: IconMonitor },
  { id: "folder", Component: IconFolder },
  { id: "floppy", Component: IconFloppy },
  { id: "circuit", Component: IconCircuit },
  { id: "joystick", Component: IconJoystick },
  { id: "robot", Component: IconRobot },
  { id: "cpu", Component: IconCPU },
  { id: "terminal", Component: IconTerminal },
  { id: "chip", Component: IconChip },
  { id: "code", Component: IconCode },
];
