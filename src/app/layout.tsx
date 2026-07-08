import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer'; 
import { Toaster } from "@/components/ui/toaster";
import { CursorBacklight } from '@/components/effects/cursor-backlight';
import { Preloader } from '@/components/effects/preloader';
import ShapeGrid from '@/components/effects/shape-grid';

export const metadata: Metadata = {
  title: 'Syntax X | 10th Anniversary',
  description: 'Join Syntax X - Celebrating 10 years of school coding competitions, tech workshops, and student innovation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground min-h-screen flex flex-col bg-workspace">
        <div className="grain-overlay" />
        <Preloader />
        
        {/* Global ShapeGrid Background - Layered behind content but above body background */}
        <div className="fixed inset-0 z-[-5] pointer-events-none opacity-[0.21]">
          <ShapeGrid 
            speed={0.4} 
            squareSize={60}
            direction='diagonal'
            borderColor='rgba(255, 255, 255, 0.12)'
            hoverFillColor='rgba(59, 130, 246, 0.15)'
            shape='square'
            hoverTrailAmount={10}
          />
        </div>

        <Navbar />
        <main className="flex-grow pt-24 relative">
          <CursorBacklight />
          {children}
        </main>
        <Footer /> 
        <Toaster />
      </body>
    </html>
  );
}
