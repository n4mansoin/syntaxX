"use client";

import { useEffect, useRef, useState } from 'react';
import { 
  Puzzle, 
  PenTool, 
  Gamepad2, 
  Cpu, 
  Film, 
  Camera, 
  Presentation, 
  Terminal, 
  CircleHelp, 
  Music, 
  Zap, 
  MessageSquare,
  MapPin,
  Users,
  Award,
  LucideIcon
} from "lucide-react";
import { cn } from '@/lib/utils';

interface EventChipProps {
  icon: React.ReactNode;
  label: string;
}

function EventChip({ icon, label }: EventChipProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 shadow-inner">
      <span className="text-accent/60">{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider text-foreground/50 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

interface Event {
  title: string;
  tagline: string;
  description: string;
  mode: string;
  classes: string;
  teamSize: string;
  icon: LucideIcon;
}

const events: Event[] = [
  {
    title: "Cryptic Hunt",
    tagline: "Crack the clues. Beat the clock.",
    description: "Race against teams across schools to solve a chain of cryptic puzzles. Every clue unlocks the next, and speed is everything. Only the fastest minds reach the finish.",
    mode: "Online",
    classes: "5-12",
    teamSize: "Team",
    icon: Puzzle
  },
  {
    title: "Creative",
    tagline: "Build a brand that stands out.",
    description: "Transform ideas into compelling visual identities. Design with purpose, creativity, and strategy to communicate a brand that leaves a lasting impression.",
    mode: "Hybrid",
    classes: "9-12",
    teamSize: "Team",
    icon: PenTool
  },
  {
    title: "Gaming",
    tagline: "Skill decides the champion.",
    description: "Compete in fast-paced multiplayer matches where teamwork, strategy, and precision determine who advances to the finals.",
    mode: "Hybrid",
    classes: "9-12",
    teamSize: "Team",
    icon: Gamepad2
  },
  {
    title: "Hack-a-thon",
    tagline: "Turn ideas into innovation.",
    description: "Design and develop a solution to a real-world challenge. Impress the judges with creativity, functionality, user experience, and technical execution.",
    mode: "Online",
    classes: "9-12",
    teamSize: "Team",
    icon: Cpu
  },
  {
    title: "Movie Making",
    tagline: "Tell stories through film.",
    description: "Create a short film that combines storytelling, cinematography, and editing into a memorable visual experience. Every frame should have purpose.",
    mode: "Online",
    classes: "9-12",
    teamSize: "Team",
    icon: Film
  },
  {
    title: "Photography",
    tagline: "Capture the extraordinary.",
    description: "Freeze a moment that tells a story. Showcase creativity, technical excellence, and composition through the lens of your camera.",
    mode: "Offline",
    classes: "7-12",
    teamSize: "Individual",
    icon: Camera
  },
  {
    title: "PowerPoint",
    tagline: "Present with impact.",
    description: "Turn information into an engaging visual presentation. Balance creativity, originality, and clarity while delivering ideas with confidence.",
    mode: "Offline",
    classes: "5-8",
    teamSize: "Individual",
    icon: Presentation
  },
  {
    title: "Programming",
    tagline: "Code. Solve. Conquer.",
    description: "Solve algorithmic challenges under pressure. Efficient logic, clean implementation, and passing every test case are the keys to victory.",
    mode: "Offline",
    classes: "8-12",
    teamSize: "Team",
    icon: Terminal
  },
  {
    title: "Senior Quiz",
    tagline: "Knowledge under pressure.",
    description: "Put your awareness, logic, and speed to the test in a quiz covering technology, science, current affairs, and beyond.",
    mode: "Offline",
    classes: "10-12",
    teamSize: "Team",
    icon: CircleHelp
  },
  {
    title: "Splice",
    tagline: "Produce the perfect sound.",
    description: "Transform raw samples into an original musical production. Creativity, technical skill, and sound design will define the winning track.",
    mode: "Online",
    classes: "9-12",
    teamSize: "Team",
    icon: Music
  },
  {
    title: "Surprise Event",
    tagline: "Expect the unexpected.",
    description: "No hints. No preparation. Step into a challenge revealed only on the day of the event and adapt your way to victory.",
    mode: "Offline",
    classes: "10-12",
    teamSize: "Individual",
    icon: Zap
  },
  {
    title: "Group Discussion",
    tagline: "Ideas shape the future.",
    description: "Engage in thought-provoking discussions that test communication, critical thinking, leadership, and the ability to defend your perspective.",
    mode: "Offline",
    classes: "9-12",
    teamSize: "Individual",
    icon: MessageSquare
  }
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = event.icon;

  return (
    <div
      ref={cardRef}
      style={{ 
        transitionDelay: `${(index % 3) * 80}ms`,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0)' : 'blur(4px)'
      }}
      className={cn(
        "group relative flex flex-col h-full rounded-[1.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-md transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      )}
    >
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10 opacity-40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10 opacity-40 pointer-events-none" />

      <div className="flex flex-col flex-grow p-8">
        <div className="relative mx-auto mb-8 w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent border border-white/10 group-hover:border-accent/40 transition-colors" />
          <div className="absolute inset-[-4px] rounded-full border border-white/[0.03] animate-pulse" />
          {Icon && <Icon className="relative z-10 w-7 h-7 text-accent/80 group-hover:scale-105 group-hover:text-accent transition-all duration-500" />}
        </div>

        <div className="text-center space-y-3 mb-8">
          <h3 className="font-headline text-2xl text-foreground/90 group-hover:text-white transition-colors">
            {event.title}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/70 group-hover:text-accent transition-colors">
            {event.tagline}
          </p>
          <div className="h-px w-12 bg-accent/20 mx-auto my-2 group-hover:w-24 transition-all duration-500" />
          <p className="text-sm leading-relaxed text-foreground/40 line-clamp-3 group-hover:text-foreground/60 transition-colors">
            {event.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap justify-center gap-2">
          <EventChip icon={<MapPin className="h-3 w-3" />} label={event.mode} />
          <EventChip icon={<Award className="h-3 w-3" />} label={`Classes ${event.classes}`} />
          <EventChip icon={<Users className="h-3 w-3" />} label={event.teamSize} />
        </div>
      </div>
    </div>
  );
}

export default function ScheduleEventsPage() {
  return (
    <div className="relative min-h-screen pb-24">
      {/* Page Background Layering */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-[0.02]">
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-white">
            <path d="M0 0 L1000 1000" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M1000 0 L0 1000" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/3 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <header className="relative text-center mb-24 max-w-3xl mx-auto">
          {/* Blueprint X Header Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] -z-10">
             <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M10 10 L90 90 M90 10 L10 90" stroke="currentColor" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.1" fill="none" />
             </svg>
          </div>

          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">Anniversary Edition</div>
            <h1 className="font-headline text-6xl md:text-8xl text-white">
              EVENTS
            </h1>
            <p className="text-foreground/50 text-lg leading-relaxed font-medium">
              Explore twelve competitions designed to challenge creativity, innovation, logic, and technical excellence.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}