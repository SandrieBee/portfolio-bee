// Category options for the project filters. These ids must match the
// check constraint on projects.categories in the database.
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