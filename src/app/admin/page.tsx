"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, ShieldCheck, Database, RefreshCcw, Send, Settings, UserPlus, FileEdit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      toast({
        title: "Results Published",
        description: "The live leaderboard has been updated successfully.",
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <header className="mb-16">
        <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-4">
          <ShieldCheck className="h-4 w-4" /> Secure Control Center
        </div>
        <h1 className="font-headline text-5xl md:text-6xl">Syntax <span className="text-gold">Command</span></h1>
        <p className="text-foreground/50 mt-4 max-w-2xl text-lg">
          Version X Administration Interface. Manage event parameters, publish results, and oversee the championship infrastructure.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Work Area */}
        <div className="lg:col-span-2 space-y-10">
          <Card className="glass-card rounded-[2.5rem] border-white/5 bg-white/[0.02]">
            <CardHeader className="p-10 pb-6">
              <CardTitle className="flex items-center gap-4 text-3xl font-headline">
                <Trophy className="h-8 w-8 text-gold" /> Result Entry
              </CardTitle>
              <CardDescription className="text-base">Assign championship points for a completed event category.</CardDescription>
            </CardHeader>
            <CardContent className="p-10 pt-4 space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-foreground/60 text-xs font-bold uppercase tracking-widest">Select Event Category</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-accent">
                      <SelectValue placeholder="Championship Event" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/10 rounded-xl">
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="graphics">Graphics Design</SelectItem>
                      <SelectItem value="designathon">Designathon</SelectItem>
                      <SelectItem value="splice">Splice (Audio)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label className="text-gold text-xs font-bold uppercase tracking-widest">Gold Position (1st)</Label>
                  <Input className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:border-gold" placeholder="School Name" />
                </div>
                <div className="space-y-3">
                  <Label className="text-slate-400 text-xs font-bold uppercase tracking-widest">Silver Position (2nd)</Label>
                  <Input className="bg-white/5 border-white/10 rounded-2xl h-14 px-6" placeholder="School Name" />
                </div>
                <div className="space-y-3">
                  <Label className="text-amber-700 text-xs font-bold uppercase tracking-widest">Bronze Position (3rd)</Label>
                  <Input className="bg-white/5 border-white/10 rounded-2xl h-14 px-6" placeholder="School Name" />
                </div>
              </div>
              <Button onClick={handleUpdate} className="w-full bg-accent hover:bg-accent/90 rounded-2xl h-16 text-lg font-bold shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all hover:scale-[1.01]" disabled={isUpdating}>
                {isUpdating ? <RefreshCcw className="h-5 w-5 animate-spin mr-3" /> : <Send className="h-5 w-5 mr-3" />}
                Sync Results to Live Database
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
             <AdminToolCard icon={<FileEdit className="text-primary"/>} title="Event Parameters" desc="Edit eligibility, modes and descriptions." />
             <AdminToolCard icon={<UserPlus className="text-accent"/>} title="School Registry" desc="Add or update school profiles and logos." />
          </div>
        </div>

        {/* Sidebar Diagnostics */}
        <div className="space-y-10">
           <Card className="glass-card rounded-[2.5rem] border-white/5 overflow-hidden relative bg-white/[0.02]">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -z-10" />
             <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                  <Settings className="h-3 w-3" /> Global Configuration
                </CardTitle>
             </CardHeader>
             <CardContent className="p-8 pt-4 space-y-8">
                <div className="space-y-5">
                  <PointConfigRow label="Gold Medal" value="100" color="text-gold" />
                  <PointConfigRow label="Silver Medal" value="70" color="text-slate-400" />
                  <PointConfigRow label="Bronze Medal" value="50" color="text-amber-700" />
                  <PointConfigRow label="Participation" value="10" color="text-foreground/40" />
                </div>
                <Button variant="outline" className="w-full border-gold/20 text-gold hover:bg-gold/10 text-[10px] uppercase font-bold tracking-widest rounded-xl h-10">
                  Refactor Scoring Logic
                </Button>
             </CardContent>
           </Card>

           <Card className="glass-card rounded-[2.5rem] border-white/5 bg-white/[0.02]">
             <CardHeader className="p-8 pb-4">
               <CardTitle className="text-xs font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                 <Database className="h-3 w-3" /> System Health
               </CardTitle>
             </CardHeader>
             <CardContent className="p-8 pt-4 grid grid-cols-2 gap-4">
                 <StatBoxSmall label="Sync Latency" value="12ms" />
                 <StatBoxSmall label="Active Nodes" value="48" />
                 <StatBoxSmall label="DB Uptime" value="99.9%" />
                 <StatBoxSmall label="Version" value="X.1.0" />
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}

function AdminToolCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="glass-card rounded-[2rem] border-white/5 hover:border-white/15 transition-all cursor-pointer group bg-white/[0.01]">
      <CardContent className="p-8 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <p className="text-xs text-foreground/40 leading-relaxed">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function PointConfigRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-foreground/50 font-medium">{label}</span>
      <span className={cn("font-bold", color)}>{value} pts</span>
    </div>
  );
}

function StatBoxSmall({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 text-center border border-white/5">
      <div className="text-lg font-headline text-white mb-1">{value}</div>
      <div className="text-[8px] uppercase tracking-widest text-foreground/30 font-bold">{label}</div>
    </div>
  );
}
