"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, Trophy, School, MessageSquare, ArrowUpRight, Users, GalleryHorizontal, FileText, Download } from 'lucide-react';
import { CountdownTimer } from '@/components/effects/countdown-timer';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import PixelBlast from '@/components/effects/pixel-blast';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const blueprintXRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    if (blueprintXRef.current) {
      anime({
        targets: blueprintXRef.current.querySelectorAll('path, circle'),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: anime.stagger(100),
        opacity: [0, 0.04]
      });
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="space-y-32 pb-24">
      {/* Flagship Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
        
        {/* Main Background Layer Stack */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-workspace" />
          
          {/* Enhanced Primary Pixel Blast Background */}
          <div className="absolute inset-0 opacity-[0.16]">
            <PixelBlast 
              variant="square"
              pixelSize={5}
              color="#3b82f6"
              speed={0.35}
              patternDensity={0.35}
              edgeFade={0.4}
              liquid={true}
              liquidStrength={0.04}
              liquidRadius={1.8}
              rippleIntensityScale={0.8}
            />
          </div>

          {/* Blueprint Layer */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
             <svg 
               ref={blueprintXRef}
               viewBox="0 0 1000 1000" 
               className="w-[120vw] h-[120vh] max-w-none text-white transition-transform duration-1000 ease-out"
               style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
             >
                <path d="M100 100 L900 900" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M900 100 L100 900" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.2" fill="none" />
                <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="0.2" fill="none" />
                <path d="M500 50 L500 70" stroke="currentColor" strokeWidth="1" />
                <path d="M500 930 L500 950" stroke="currentColor" strokeWidth="1" />
                <path d="M50 500 L70 500" stroke="currentColor" strokeWidth="1" />
                <path d="M930 500 L950 500" stroke="currentColor" strokeWidth="1" />
             </svg>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
        </div>

        <div 
          className="max-w-4xl w-full transition-transform duration-500 ease-out z-10"
          style={{ transform: `perspective(1000px) rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)` }}
        >
          <div 
            ref={heroCardRef}
            className="glass-card rounded-[3rem] p-12 md:p-20 border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-6 left-6 blueprint-marker border-t border-l" />
            <div className="absolute top-6 right-6 blueprint-marker border-t border-r" />
            <div className="absolute bottom-6 left-6 blueprint-marker border-b border-l" />
            <div className="absolute bottom-6 right-6 blueprint-marker border-b border-r" />

            <div className="relative z-10 space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">10 Years of Innovation</div>
                
                <h1 className="text-6xl md:text-8xl flex items-center justify-center gap-6 flex-wrap leading-none">
                  <span className="font-body font-bold tracking-tighter text-white/90">Syntax</span>
                  <span className="font-headline text-gold light-sweep px-4" data-text="X">X</span>
                </h1>

                <div className="flex items-center justify-center gap-6 py-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rotate-45 bg-gold" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">10th Anniversary</span>
                    <div className="w-1 h-1 rotate-45 bg-gold" />
                  </div>
                  <div className="h-px w-24 bg-gradient-to-l from-transparent via-accent/30 to-transparent" />
                </div>
              </div>

              <div className="space-y-10">
                <div className="text-[9px] uppercase tracking-[0.6em] text-foreground/40 font-bold">event begins in</div>
                <CountdownTimer targetDate="2026-08-06T09:00:00" />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button size="lg" className="rounded-2xl bg-accent hover:bg-accent/90 text-white px-10 h-16 text-lg font-bold shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScTwK1UyphjTQW6iU2YtSAHtqfTmG_WRuX5RGGhda3LJVIIJg/viewform?usp=sharing&ouid=100331351212398225159" target="_blank">
                    Register Now <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white/10 glass-card px-10 h-16 text-lg font-semibold hover:bg-white/5 transition-all hover:border-white/20" asChild>
                  <Link href="/events">
                    Explore Events
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-6xl text-white">About Syntax</h2>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-xl">
              Syntax is a student-led school club dedicated to fostering a passion for technology and programming. 
              We organize engaging inter-school and intra-school competitions, host skill-building workshops, 
              and provide a collaborative platform for students to learn, create, and excel in the tech world.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild variant="outline" className="rounded-full border-white/10 glass-card px-8 h-12 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                <Link href="/members">
                  Our Team <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-accent/20 glass-card px-8 h-12 text-sm font-bold uppercase tracking-widest text-accent hover:bg-accent/5 transition-all">
                <Link href="/gallery">
                  Club Moments <GalleryHorizontal className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass-card rounded-[3rem] p-4 border-white/5 bg-white/[0.01] overflow-hidden">
              <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden">
                <Image 
                  src="/images/home.png" 
                  alt="Syntax Home" 
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Trophy className="h-10 w-10 text-gold" />}
            title="Elite Competition"
            description="Compete across 14 specialized events from algorithmic programming to cinematography."
            link="/events"
          />
          <FeatureCard
            icon={<School className="h-10 w-10 text-accent" />}
            title="Live Standings"
            description="Track your school's progress in real-time as scores are updated live on our professional board."
            link="/leaderboard"
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-primary" />}
            title="Active Community"
            description="Connect with 500+ student developers and get immediate support on our official Discord."
            link="https://discord.gg/zvQeV3ntA"
            isExternal
          />
        </div>
      </section>

      {/* Brochure Section */}
      <section className="container mx-auto max-w-6xl px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Documentation</div>
            <h2 className="font-headline text-4xl md:text-7xl text-white">Explore Our Brochure</h2>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Dive deep into the rules, event structures, and technical specifications of Syntax X. 
              Our comprehensive brochure contains everything schools and participants need to know.
            </p>
          </div>
          
          {/* PDF Viewer - Centered and Larger */}
          <div className="w-full max-w-5xl aspect-[1/1.414] md:aspect-[1.414/1] mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-gold/20 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative h-full w-full glass-card rounded-[3rem] p-4 flex flex-col items-center justify-center border-white/5 bg-white/[0.01] overflow-hidden min-h-[500px] md:min-h-[700px]">
               <div className="absolute top-8 left-8 blueprint-marker border-t border-l" />
               <div className="absolute bottom-8 right-8 blueprint-marker border-b border-r" />
               
               {mounted ? (
                 <iframe
                   src="/images/brochure.pdf"
                   className="w-full h-full rounded-[2rem] border-0"
                   title="Syntax X Brochure"
                 />
               ) : (
                 <div className="text-foreground/20 uppercase tracking-widest text-xs animate-pulse">
                   Initialising secure document viewer...
                 </div>
               )}
               
               {/* Interactive Light Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="pt-4">
            <Button size="lg" className="rounded-2xl bg-accent hover:bg-accent/90 text-white px-12 h-16 text-sm font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] group" asChild>
              <a href="/images/brochure.pdf" target="_blank" download="Syntax_X_Brochure.pdf">
                <Download className="mr-3 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, isExternal = false }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
  isExternal?: boolean;
}) {
  return (
    <div className="glass-card rounded-[3rem] p-10 group hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border-white/5 bg-white/[0.01]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10" />
      <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left">
        {icon}
      </div>
      <h3 className="font-headline text-2xl mb-4 text-foreground/90">{title}</h3>
      <p className="text-foreground/40 text-sm leading-relaxed mb-10 group-hover:text-foreground/60 transition-colors">{description}</p>
      
      <Link 
        href={link} 
        target={isExternal ? "_blank" : undefined}
        className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-white transition-colors"
      >
        View Details <ArrowUpRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  );
}
