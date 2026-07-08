
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CursorBacklight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Set initial position to center only once after mount, if not already moved
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2});
    setIsVisible(true); 
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMounted, isVisible]); // isVisible ensures event listeners are correctly managed

  if (!isMounted) {
    return null; 
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 rounded-full pointer-events-none transition-opacity duration-300 ease-out',
        'bg-blue-500/20 dark:bg-accent/20', 
        'blur-3xl', 
        'w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        zIndex: 5,
        // transition: 'transform 0.05s linear', // Optional: for smoother blob movement
      }}
    />
  );
}
