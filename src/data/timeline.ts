export interface TimelineYear {
  year: number;
  achievement: string;
  accentColor: string; // CSS hsl string for the accent color that year
  bgColor: string; // CSS hsl string for background tint
  description?: string;
}

export const timelineData: TimelineYear[] = [
  {
    year: 2016,
    achievement: "The Beginning",
    accentColor: "120, 60%, 50%", // green — retro terminal origins
    bgColor: "120, 30%, 5%",
    description: "SYNTAX was born. A small group of students with big ideas.",
  },
  {
    year: 2017,
    achievement: "Growing Community",
    accentColor: "180, 60%, 45%", // teal
    bgColor: "180, 30%, 5%",
    description: "Membership grew. The first inter-school competition was held.",
  },
  {
    year: 2018,
    achievement: "New Competitions",
    accentColor: "200, 70%, 50%", // cyan
    bgColor: "200, 30%, 5%",
    description: "Expanded from coding to design, gaming, and quizzing events.",
  },
  {
    year: 2019,
    achievement: "Bigger Stage",
    accentColor: "220, 70%, 55%", // blue
    bgColor: "220, 30%, 6%",
    description: "SYNTAX went multi-school. Hundreds of participants joined the arena.",
  },
  {
    year: 2020,
    achievement: "Virtual Innovation",
    accentColor: "260, 60%, 55%", // purple
    bgColor: "260, 30%, 5%",
    description: "The pandemic pushed us online. We adapted and thrived virtually.",
  },
  {
    year: 2021,
    achievement: "Back Stronger",
    accentColor: "160, 60%, 45%", // mint
    bgColor: "160, 25%, 5%",
    description: "Hybrid events. Stronger community. Record participation numbers.",
  },
  {
    year: 2022,
    achievement: "Expanding Horizons",
    accentColor: "30, 80%, 55%", // warm orange
    bgColor: "30, 25%, 6%",
    description: "New categories: hackathons, filmmaking, audio production.",
  },
  {
    year: 2023,
    achievement: "More Schools",
    accentColor: "340, 65%, 55%", // rose
    bgColor: "340, 25%, 5%",
    description: "Multiple schools across Delhi-NCR joined the SYNTAX ecosystem.",
  },
  {
    year: 2024,
    achievement: "Innovation Continues",
    accentColor: "210, 80%, 55%", // electric blue
    bgColor: "210, 30%, 6%",
    description: "Designathon and surprise events added. The biggest edition yet.",
  },
  {
    year: 2025,
    achievement: "Preparing the Future",
    accentColor: "190, 70%, 50%", // soft cyan
    bgColor: "190, 25%, 5%",
    description: "Building toward the tenth anniversary. Every year led to this moment.",
  },
  {
    year: 2026,
    achievement: "Version X",
    accentColor: "210, 100%, 50%", // bold blue — current accent
    bgColor: "210, 30%, 6%",
    description: "Ten years of innovation, creativity, competition, and growth.",
  },
];
