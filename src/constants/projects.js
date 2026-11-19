export const PROJECT_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "personal", label: "Personal Projects" },
  { id: "academic", label: "Academic Projects" },
  { id: "web", label: "Web Development" },
  { id: "ai-ml", label: "AI and Machine Learning" },
  { id: "other", label: "Other Projects" },
];

export const CATEGORY_LABELS = Object.fromEntries(
  PROJECT_FILTERS.filter((f) => f.id !== "all").map((f) => [f.id, f.label]),
);

// Temporary data until the Supabase phase.
// Empty fields ("" , [] or null) are hidden on the card.
// NOTE: the categories below are my best guess. Please confirm or correct them.
export const PROJECTS = [
  {
    slug: "gifting-co-website",
    title: "Gifting Co. Website",
    role: "Frontend and Backend Developer",
    description: "",
    technologies: [],
    categories: ["academic", "web"],
    year: null,
    githubUrl: null,
    liveUrl: "https://it-101-project-dei2.vercel.app/login",
    thumbnail: null,
  },
  {
    slug: "stack-game-above-and-beyond",
    title: 'Stack Game: "Above and Beyond"',
    role: "Full-Stack Developer",
    description: "",
    technologies: [],
    categories: ["academic", "web"],
    year: null,
    githubUrl: null,
    liveUrl: "https://ite-18-final-project.vercel.app/",
    thumbnail: null,
  },
  {
    slug: "ojt-online-monitoring-system",
    title: "OJT Online Monitoring System",
    role: "Frontend Developer and Technical Documenter",
    description: "",
    technologies: [],
    categories: ["academic", "web"],
    year: null,
    githubUrl: "https://github.com/ccisojtmonitoringsystem/OJT_Monitoring_System",
    liveUrl: null,
    thumbnail: null,
  },
  {
    slug: "luma-programming-language",
    title: "LUMA Programming Language",
    role: "Compiler Developer",
    description: "",
    technologies: [],
    categories: ["academic", "other"],
    year: null,
    githubUrl: "https://github.com/SandrieBee/LUMA-Programming-Language",
    liveUrl: null,
    thumbnail: null,
  },
];