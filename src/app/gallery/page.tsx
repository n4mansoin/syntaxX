
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import placeholderImages from '@/app/lib/placeholder-images.json';

/**
 * GalleryPage - Syntax X 10th Anniversary
 * Implements a strict, gapless Bento grid for high-end visual storytelling.
 */
export default function GalleryPage() {
  const galleryImages = placeholderImages.gallery.map((image) => {
    let spanClass = "col-span-1 row-span-1";
    
    // Explicit Bento Span Logic: Specific containers are enlarged
    // to create a professional mosaic effect without gaps.
    if (image.id === 1) spanClass = "md:col-span-2 md:row-span-2"; // Big Hero Square
    if (image.id === 4) spanClass = "md:col-span-2"; // Wide Horizontal
    if (image.id === 5) spanClass = "md:row-span-2"; // Tall Vertical
    if (image.id === 8) spanClass = "md:col-span-2 md:row-span-2"; // Big Hero Square 2
    if (image.id === 11) spanClass = "md:col-span-2"; // Wide Horizontal 2
    if (image.id === 13) spanClass = "md:row-span-2"; // Tall Vertical 2
    if (image.id === 17) spanClass = "md:col-span-2"; // Wide Horizontal 3
    if (image.id === 19) spanClass = "md:row-span-2"; // Tall Vertical 3
    
    return {
      ...image,
      spanClass
    };
  });

  return (
    <div className="relative min-h-screen pb-24">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <header className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <div className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">Visual Archive</div>
          <h1 className="font-headline text-6xl md:text-8xl text-white">
            GALLERY
          </h1>
          <p className="text-foreground/50 text-lg leading-relaxed">
            A curated journey through ten years of technical excellence, creativity, and the vibrant community of Syntax.
          </p>
        </header>

        {/* 
          Bento Grid Implementation:
          - grid-flow-dense: Ensures that gaps are automatically filled by smaller items.
          - auto-rows: Sets a fixed height for cells to maintain structural integrity.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] grid-flow-dense">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] glass-card transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
                image.spanClass
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Blueprint Design Polish */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 opacity-40 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 opacity-40 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                
                {/* Identifier Label */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-white/10 group-hover:text-accent/50 transition-colors pointer-events-none uppercase">
                  SYNTAX_X_{image.id.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
