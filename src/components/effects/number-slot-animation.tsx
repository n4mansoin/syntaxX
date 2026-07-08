
"use client";

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface NumberSlotAnimationProps {
  target: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function NumberSlotAnimation({ target, duration = 1500, delay = 0, className }: NumberSlotAnimationProps) {
  const [currentNumber, setCurrentNumber] = useState(1);
  const numberRef = useRef({ value: 1 });

  useEffect(() => {
    const animation = anime({
      targets: numberRef.current,
      value: target,
      round: 1,
      duration: duration,
      easing: 'easeOutExpo',
      delay: delay,
      update: () => {
        setCurrentNumber(numberRef.current.value);
      }
    });

    return () => {
      // It's good practice to pause the animation on unmount
      // to prevent memory leaks if the component unmounts mid-animation.
      animation.pause();
    };
  }, [target, duration, delay]);

  return (
    <span className={cn(className)}>
      {String(currentNumber).padStart(2, '0')}
    </span>
  );
}
