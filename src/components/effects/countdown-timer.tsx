"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-4 md:gap-10 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="group relative">
        {/* Card Background & Effects */}
        <div className={cn(
          "glass-card w-20 h-24 md:w-32 md:h-36 rounded-[2rem] flex items-center justify-center relative overflow-hidden transition-all duration-500",
          "hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:border-accent/40",
          "bg-gradient-to-b from-white/[0.05] to-transparent"
        )}>
          {/* Subtle Blueprint Accents on the Card */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 opacity-40" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 opacity-40" />
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-accent/[0.02] group-hover:bg-accent/10 transition-colors duration-500" />
          
          {/* The Digit */}
          <span className="font-headline text-4xl md:text-6xl text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:text-white">
            {String(value).padStart(2, '0')}
          </span>
          
          {/* Bottom Edge Light */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/30 mt-6 font-bold group-hover:text-accent transition-colors duration-500">
        {label}
      </span>
    </div>
  );
}

function TimeSeparator() {
  return (
    <div className="flex flex-col gap-4 mb-10 opacity-20">
      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
    </div>
  );
}