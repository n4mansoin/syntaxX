import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto pt-24 pb-12 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo-spl.png"
                alt="Syntax X Anniversary Logo"
                width={180}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-foreground/40 text-sm max-w-sm leading-relaxed">
              The premier inter-school technology festival, celebrating a decade of excellence in programming, design, and innovation. A community driven by passion and built for the future.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com/syntax_dpsi" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://youtube.com/@syntax" icon={<Youtube className="h-5 w-5" />} />
              <SocialLink href="https://facebook.com/syntax" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="mailto:syntax@dpsi.ac.in" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/leaderboard">Leaderboard</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/members">Our Team</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-6">Legal</h4>
            <ul className="space-y-4">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/admin">Admin Access</FooterLink>
              <FooterLink href="https://dpsi.ac.in">DPSI Global</FooterLink>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/20">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>&copy; {currentYear} Syntax Club</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="text-gold tracking-[0.5em]">Version X Edition</span>
          </div>
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span>Developed with</span>
            <span className="text-accent">❤️</span>
            <span>by <span className="text-gold">Naman</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/40 hover:text-accent hover:border-accent/40 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-foreground/40 hover:text-accent transition-colors">
        {children}
      </Link>
    </li>
  );
}
