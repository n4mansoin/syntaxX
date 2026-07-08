"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsletterPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new primary feature: Leaderboard
    router.replace('/leaderboard');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <p className="text-foreground/40 animate-pulse uppercase tracking-[0.5em] text-[10px] font-bold">
        Redirecting to Live Leaderboard...
      </p>
    </div>
  );
}
