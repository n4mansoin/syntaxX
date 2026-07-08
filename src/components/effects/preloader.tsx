
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import anime from 'animejs';
import Image from 'next/image';

/**
 * Blueprint to Reality Preloader - Syntax X 10th Anniversary
 */

export function Preloader() {
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const logoImageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const pathData = "m 103.00517,228.0098 c -1.06398,-0.61489 -6.713067,-3.53651 -12.553524,-6.4925 -5.840457,-2.95598 -16.154626,-8.15897 -22.920374,-11.5622 -6.765748,-3.40322 -13.947083,-7.03133 -15.958521,-8.06247 -2.011439,-1.03114 -7.02853,-3.57565 -11.149091,-5.65448 -4.120562,-2.07882 -7.735889,-4.24951 -8.03406,-4.82375 -0.298172,-0.57424 -0.480074,-8.15289 -0.404227,-16.84143 0.07585,-8.68854 0.175313,-16.01617 0.221034,-16.28363 0.04572,-0.26745 0.756381,-0.36346 1.579242,-0.21334 0.822861,0.15011 8.079001,3.66106 16.124756,7.80212 8.045754,4.14105 17.770478,9.11101 21.610498,11.04436 3.840019,1.93335 9.525242,4.77728 12.633829,6.31985 3.108587,1.54256 6.848866,3.45901 8.31173,4.25877 1.462864,0.79976 5.127197,2.70299 8.142958,4.22939 5.48321,2.77528 5.48321,2.77528 8.31173,1.41287 1.55569,-0.74932 8.36414,-4.35401 15.12989,-8.01041 6.76574,-3.65639 14.48493,-7.74145 17.15375,-9.07791 2.66882,-1.33645 4.50567,-2.42991 4.0819,-2.42991 -0.42377,0 -5.00112,-2.23494 -10.1719,-4.96653 -5.17077,-2.73159 -11.19674,-5.90092 -13.39104,-7.04295 -2.1943,-1.14203 -6.31278,-3.32241 -9.15219,-4.84528 -2.83941,-1.52286 -6.43008,-3.43276 -7.97926,-4.24421 -1.54919,-0.81145 -7.305035,-3.82553 -12.790776,-6.69796 -5.485742,-2.87243 -11.320577,-5.9543 -12.966299,-6.84861 -1.645723,-0.89431 -4.189112,-2.23635 -5.651976,-2.98232 -1.462865,-0.74597 -11.187589,-5.85059 -21.610498,-11.34362 -10.42291,-5.49302 -19.090723,-10.10068 -19.261808,-10.23925 -0.171084,-0.13856 -0.363458,-7.61404 -0.427496,-16.612169 -0.103054,-14.480203 0.0091,-16.462421 0.976001,-17.24949 0.60084,-0.489091 4.832714,-2.818853 9.404165,-5.177249 4.571452,-2.358395 11.603175,-6.05107 15.626053,-8.205943 4.022877,-2.154874 10.306545,-5.499041 13.963706,-7.431482 3.657161,-1.932442 7.846273,-4.149332 9.309137,-4.926421 1.462865,-0.77709 5.352754,-2.848638 8.644199,-4.60344 3.291445,-1.754803 7.480557,-3.987004 9.309138,-4.960448 1.828584,-0.973444 4.072744,-1.773298 4.987034,-1.777453 0.91429,-0.0042 2.41041,0.366357 3.3247,0.82336 0.91429,0.457002 4.35534,2.206879 7.64679,3.888615 3.29144,1.681736 8.22861,4.253802 10.97148,5.715704 2.74287,1.461901 6.18393,3.215378 7.64679,3.896615 1.46287,0.681237 7.2977,3.657736 12.9663,6.614442 5.6686,2.956706 12.99955,6.735551 16.29099,8.397434 3.29145,1.661882 8.15381,4.151748 10.80525,5.533035 4.8208,2.511431 4.8208,2.511431 4.8208,18.545381 0,15.534109 -0.0426,16.055629 -1.36745,16.729419 -1.09603,0.55743 -1.85494,0.42007 -3.8234,-0.69199 -1.35077,-0.76311 -13.67677,-7.50646 -27.39113,-14.985238 -13.71435,-7.478775 -28.43891,-15.509912 -32.72123,-17.84697 -4.28233,-2.337058 -7.95646,-4.087253 -8.16475,-3.889322 -0.20828,0.197931 -0.79659,0.418161 -1.30736,0.489401 -0.51077,0.07124 -8.805527,4.692519 -18.432795,10.269509 -9.627268,5.576991 -18.102568,10.565973 -18.834,11.086627 -1.29035,0.918508 -1.264856,0.968545 0.857753,1.683492 1.203197,0.405271 4.365679,1.807931 7.027739,3.117021 2.662059,1.3091 5.417903,2.67684 6.124099,3.03943 0.706195,0.36259 6.819604,3.27648 13.585352,6.47532 6.765752,3.19883 17.687362,8.44299 24.270252,11.65368 6.58289,3.21068 21.84323,10.61471 33.91186,16.4534 12.06863,5.83868 22.84063,11.09101 23.93778,11.67184 1.99481,1.05605 1.99481,1.05605 1.99481,19.91836 0,18.8623 0,18.8623 -8.31173,23.23443 -4.57145,2.40467 -14.745,7.79387 -22.6079,11.976 -7.8629,4.18214 -16.98918,9.08559 -20.28062,10.89657 -3.29145,1.81097 -9.05217,4.91594 -12.80161,6.89992 -3.74943,1.98399 -7.37624,3.70956 -8.05956,3.83462 -0.68333,0.12506 -2.11294,-0.27572 -3.17692,-0.89061 z";

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoadedSyntaxV10');
    if (hasLoaded) {
      setIsFinished(true);
      return;
    }
    setIsMounted(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (!isMounted || isFinished) return;

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }

    const timeline = anime.timeline({
      easing: 'easeInOutQuart'
    });

    timeline
      .add({
        targets: '.blueprint-element',
        opacity: [0, 0.4],
        duration: 800,
        delay: anime.stagger(100)
      })
      .add({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=400')
      .add({
        targets: logoImageRef.current,
        opacity: [0, 1],
        scale: [0.98, 1],
        duration: 2000,
        easing: 'easeOutExpo',
        offset: 3000
      })
      .add({
        targets: '.blueprint-element, .blueprint-path',
        opacity: 0,
        duration: 1000,
        offset: 3500
      })
      .add({
        targets: '.shimmer-pass',
        translateX: ['0%', '300%'],
        duration: 2200,
        easing: 'easeInOutQuad',
        offset: 4500
      })
      .add({
        targets: captionRef.current,
        opacity: [0, 0.6],
        translateY: [10, 0],
        duration: 1000,
        offset: 5000
      })
      .add({
        duration: 1500, 
        complete: () => {
          anime({
            targets: '.preloader-root',
            opacity: 0,
            duration: 1500,
            easing: 'linear',
            complete: () => {
              setIsFinished(true);
              sessionStorage.setItem('hasLoadedSyntaxV10', 'true');
              document.body.style.overflow = '';
            }
          });
        }
      });

  }, [isMounted, isFinished]);

  if (isFinished) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0C] font-body preloader-root transition-colors duration-1000"
    )}>
      {/* Background Engineering Workspace */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.3) 0%, transparent 70%)',
          backgroundSize: '100% 100%'
        }} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute h-px w-full bg-cyan-500/10 blueprint-element opacity-0" />
        <div className="absolute w-px h-full bg-cyan-500/10 blueprint-element opacity-0" />
        <div className="absolute rounded-full border border-cyan-500/5 w-[300px] h-[300px] blueprint-element opacity-0" />
        <div className="absolute rounded-full border border-cyan-500/5 w-[450px] h-[450px] blueprint-element opacity-0" />
      </div>

      <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        <svg viewBox="0 0 210 297" className="absolute inset-0 w-full h-full pointer-events-none blueprint-path">
          <path 
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="rgba(103, 232, 249, 0.8)"
            strokeWidth="0.5"
          />
        </svg>

        <div ref={logoImageRef} className="relative w-full h-full flex items-center justify-center opacity-0">
          <Image
            src="/images/logo-spl.png"
            alt="Syntax 10th Anniversary Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            priority
          />
          
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none z-20"
            style={{
              maskImage: 'url(/images/logo-spl.png)',
              WebkitMaskImage: 'url(/images/logo-spl.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          >
            <div 
              className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg] shimmer-pass" 
              style={{ left: '-100%' }}
            />
          </div>
        </div>
      </div>

      <div ref={captionRef} className="mt-12 opacity-0 text-center">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/80 font-medium">
          Version X
        </p>
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2 font-mono">
          10th Anniversary Edition
        </p>
      </div>
    </div>
  );
}
