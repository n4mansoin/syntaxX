"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Medal, Trophy, TrendingUp, TrendingDown, Minus, Info, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { NumberSlotAnimation } from '@/components/effects/number-slot-animation';
import { CountdownTimer } from '@/components/effects/countdown-timer';

const TARGET_DATE = "2026-07-25T00:00:00";

interface Achievement {
  event: string;
  rank: 1 | 2 | 3;
}

interface School {
  id: string;
  rank: number;
  name: string;
  logo: string;
  points: number;
  trend: 'up' | 'down' | 'stable';
  medals: {
    gold: number;
    silver: number;
    bronze: number;
  };
  achievements: Achievement[];
}

const mockSchools: School[] = [
  {
    id: "1",
    rank: 1,
    name: "Modern School, Barakhamba Road",
    logo: "https://picsum.photos/seed/ms1/100/100",
    points: 850,
    trend: 'stable',
    medals: { gold: 5, silver: 3, bronze: 2 },
    achievements: [
      { event: "Programming", rank: 1 },
      { event: "Hackathon", rank: 1 },
      { event: "Graphics Design", rank: 2 },
    ]
  },
  {
    id: "2",
    rank: 2,
    name: "Delhi Public School, R.K. Puram",
    logo: "https://picsum.photos/seed/dpsrk/100/100",
    points: 790,
    trend: 'up',
    medals: { gold: 4, silver: 4, bronze: 3 },
    achievements: [
      { event: "Quizzing", rank: 1 },
      { event: "Splice", rank: 1 },
      { event: "Movie Making", rank: 3 },
    ]
  },
  {
    id: "3",
    rank: 3,
    name: "Step by Step School, Noida",
    logo: "https://picsum.photos/seed/sbs/100/100",
    points: 620,
    trend: 'down',
    medals: { gold: 2, silver: 5, bronze: 1 },
    achievements: [
      { event: "Designathon", rank: 1 },
      { event: "Photography", rank: 2 },
    ]
  },
];

export default function LeaderboardPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const target = new Date(TARGET_DATE);
      setIsLive(now >= target);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isLive) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
        <header className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-gold text-[10px] font-bold uppercase tracking-widest border-gold/20">
            <Trophy className="h-3 w-3" /> System Activation Pending
          </div>
          <h1 className="font-headline text-5xl md:text-8xl">Live <span className="text-gold">Standings</span></h1>
          <p className="text-foreground/50 max-w-xl mx-auto leading-relaxed">
            The Syntax X leaderboard infrastructure is currently in standby. Real-time school rankings will be activated as the competition progresses.
          </p>
        </header>

        <div className="w-full max-w-4xl">
          <div className="glass-card rounded-[3rem] p-12 md:p-20 border-white/5 relative overflow-hidden group text-center">
            {/* Blueprint Corner Brackets */}
            <div className="absolute top-6 left-6 blueprint-marker border-t border-l" />
            <div className="absolute top-6 right-6 blueprint-marker border-t border-r" />
            <div className="absolute bottom-6 left-6 blueprint-marker border-b border-l" />
            <div className="absolute bottom-6 right-6 blueprint-marker border-b border-r" />

            <div className="relative z-10 space-y-10">
              <div className="text-[9px] uppercase tracking-[0.6em] text-foreground/40 font-bold">leaderboard will be active in</div>
              <CountdownTimer targetDate={TARGET_DATE} />
            </div>
            
            {/* Subtle Gradient Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5 pointer-events-none" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <header className="text-center mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-gold text-[10px] font-bold uppercase tracking-widest border-gold/20">
          <Trophy className="h-3 w-3" /> Live Standings
        </div>
        <h1 className="font-headline text-5xl md:text-8xl">Championship <span className="text-gold">Race</span></h1>
        <p className="text-foreground/50 max-w-xl mx-auto leading-relaxed">
          Tracking the best performing schools across all 14 Syntax X events. Scores are updated in real-time as results are published.
        </p>
      </header>

      <div className="space-y-6">
        {mockSchools.map((school) => (
          <div key={school.id} className="group">
            <Card className={cn(
              "glass-card rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer border-white/5 relative",
              expandedId === school.id ? "ring-1 ring-accent/40 shadow-2xl bg-white/[0.04]" : "hover:bg-white/[0.05] hover:translate-x-1",
              school.rank === 1 && "border-gold/30 shadow-[0_0_40px_rgba(255,191,0,0.1)]"
            )} onClick={() => setExpandedId(expandedId === school.id ? null : school.id)}>
              {school.rank === 1 && (
                <div className="absolute top-0 right-10 bg-gold text-gold-foreground px-4 py-1.5 rounded-b-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Star className="h-3 w-3 fill-gold-foreground" /> Current Champion
                </div>
              )}
              
              <CardContent className="p-0">
                <div className="flex items-center p-8 md:p-10 gap-4 md:gap-12">
                  {/* Rank & Trend */}
                  <div className="flex flex-col items-center justify-center min-w-[80px]">
                    <span className={cn(
                      "font-headline text-4xl md:text-6xl",
                      school.rank === 1 ? "text-gold" : "text-foreground/80"
                    )}>
                      {school.rank}
                    </span>
                    <div className="mt-3">
                      {school.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-500 animate-pulse" />}
                      {school.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-500" />}
                      {school.trend === 'stable' && <Minus className="h-5 w-5 text-foreground/20" />}
                    </div>
                  </div>

                  {/* School Info */}
                  <div className="flex-grow flex items-center gap-8">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-3xl overflow-hidden glass-card p-3 border-white/10 group-hover:border-accent/40 transition-all duration-500">
                      <img src={school.logo} alt={school.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg md:text-2xl text-foreground/90 group-hover:text-white transition-colors">{school.name}</h3>
                      <div className="flex gap-6 opacity-60">
                         <MedalDisplay count={school.medals.gold} type="gold" />
                         <MedalDisplay count={school.medals.silver} type="silver" />
                         <MedalDisplay count={school.medals.bronze} type="bronze" />
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right min-w-[150px]">
                    <div className="text-4xl md:text-6xl font-headline text-accent group-hover:text-primary transition-colors flex items-end justify-end">
                      <NumberSlotAnimation target={school.points} />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold mt-2">
                      Points Standing
                    </div>
                  </div>

                  <div className="hidden md:block">
                    {expandedId === school.id ? <ChevronUp className="h-7 w-7 text-foreground/20" /> : <ChevronDown className="h-7 w-7 text-foreground/20" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === school.id && (
                  <div className="px-10 pb-12 md:px-32 animate-in slide-in-from-top-6 duration-700">
                    <div className="h-px bg-white/5 mb-12" />
                    <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-6 flex items-center gap-3">
                          <Medal className="h-4 w-4 text-gold" /> Event Victories
                        </h4>
                        <div className="space-y-5">
                          {school.achievements.map((ach, idx) => (
                            <div key={idx} className="flex items-center justify-between glass-card p-5 rounded-[1.5rem] border-white/5 hover:border-white/10 transition-colors bg-white/[0.01]">
                              <span className="text-sm font-semibold text-foreground/80">{ach.event}</span>
                              <Badge variant={ach.rank === 1 ? 'default' : ach.rank === 2 ? 'secondary' : 'outline'} className={cn(
                                "text-[10px] uppercase font-bold tracking-widest px-3 py-1",
                                ach.rank === 1 && "bg-gold text-gold-foreground"
                              )}>
                                {ach.rank === 1 ? 'Gold' : ach.rank === 2 ? 'Silver' : 'Bronze'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-6 flex items-center gap-3">
                          <Info className="h-4 w-4 text-accent" /> Performance Analysis
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          <StatBox label="Events Participated" value="14 / 14" />
                          <StatBox label="Consistency Index" value="Elite" />
                          <StatBox label="Win Probability" value="85%" />
                          <StatBox label="Recent Form" value="🔥 Gold" />
                        </div>
                        <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-white/[0.01] text-xs leading-relaxed text-foreground/40 italic">
                          "Demonstrating exceptional technical prowess across all categories. A strong contender for the Syntax X overall trophy."
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            {school.rank === 1 && (
               <div className="w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-4 blur-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MedalDisplay({ count, type }: { count: number; type: 'gold' | 'silver' | 'bronze' }) {
  const colors = {
    gold: "text-gold drop-shadow-[0_0_8px_rgba(255,191,0,0.3)]",
    silver: "text-slate-400",
    bronze: "text-amber-700",
  };
  return (
    <div className="flex items-center gap-2">
      <Medal className={cn("h-5 w-5", colors[type])} />
      <span className="text-sm font-bold">{count}</span>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card p-8 rounded-[2rem] text-center border-white/5 hover:border-accent/30 transition-all group bg-white/[0.01]">
      <div className="text-2xl font-headline text-white mb-3 group-hover:text-accent transition-colors">{value}</div>
      <div className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">{label}</div>
    </div>
  );
}
