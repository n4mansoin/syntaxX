"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, CalendarDays, Users, Mail, Menu, X, GalleryHorizontal, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className={cn("h-5 w-5", className)}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,40.6,90.4a68.66,68.66,0,0,1-10.8-9.94,83.84,83.84,0,0,0,19.08,9.91,77.53,77.53,0,0,0,29.93,0,83.64,83.64,0,0,0,19.08-9.91,68.88,68.88,0,0,1-10.8,9.94,77.54,77.54,0,0,0,7.91,5.95A105.26,105.26,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S53.89,46,53.8,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.12,46,96.12,53,91.11,65.69,84.69,65.69Z"/>
  </svg>
);

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navLinks: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/events', label: 'Events', icon: CalendarDays },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/members', label: 'Members', icon: Users },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ item }: { item: NavItem }) => (
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 group overflow-hidden',
        pathname === item.href
          ? 'text-accent shadow-[0_0_15px_rgba(59,130,246,0.15)] bg-white/5'
          : 'text-foreground/60 hover:text-primary hover:bg-white/5'
      )}
    >
      <item.icon className={cn("h-3.5 w-3.5", pathname === item.href ? "text-accent" : "text-foreground/40 group-hover:text-primary")} />
      <span>{item.label}</span>
      {pathname === item.href && (
        <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      )}
    </Link>
  );

  return (
    <header className={cn(
      "fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full px-4 pointer-events-none transition-all duration-500 ease-in-out",
      scrolled ? "translate-y-4 max-w-5xl" : "translate-y-8 max-w-6xl"
    )}>
      <div className={cn(
        "w-full glass-nav rounded-full px-8 py-3.5 flex items-center justify-between shadow-2xl border-white/10 transition-all duration-500 pointer-events-auto",
        scrolled && "py-2.5 px-6"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/images/logo-spl.png"
            alt="Syntax X Anniversary Logo"
            width={160}
            height={54}
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => <NavLink key={item.label} item={item} />)}
        </nav>

        <div className="flex items-center gap-5">
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden sm:flex glass-card rounded-full bg-accent hover:bg-accent/90 text-white font-bold tracking-widest uppercase text-[10px] shadow-lg transition-transform hover:scale-105 active:scale-95 border-white/10 px-6 h-10"
          >
            <a href="https://discord.gg/zvQeV3ntA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <DiscordIcon className="h-4 w-4" />
              <span className="hidden lg:inline">Join Discord</span>
            </a>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full mt-4 px-2 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto max-w-xl">
          <nav className="glass-nav rounded-[2rem] p-6 flex flex-col gap-2 shadow-2xl border-white/10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all',
                  pathname === item.href
                    ? 'bg-accent/10 text-accent border border-accent/20'
                    : 'text-foreground/70 hover:bg-white/5 border border-transparent'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button
                asChild
                className="w-full rounded-2xl bg-accent text-white h-12 font-bold tracking-widest uppercase"
              >
                <a href="https://discord.gg/zvQeV3ntA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <DiscordIcon className="h-5 w-5" />
                  Join Discord
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
