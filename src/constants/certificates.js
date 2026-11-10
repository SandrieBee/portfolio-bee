export const CERTIFICATE_FILTERS = [
  { id: "all", label: "All" },
  { id: "data-science", label: "Data Science and Analytics" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "programming", label: "Programming and Software Development" },
  { id: "cybersecurity", label: "Cybersecurity and Networking" },
  { id: "seminars", label: "Seminars and Webinars" },
  { id: "other", label: "Other Professional Development" },
];

export const CERTIFICATE_CATEGORY_LABELS = Object.fromEntries(
  CERTIFICATE_FILTERS.filter((f) => f.id !== "all").map((f) => [f.id, f.label]),
);

// Temporary data until the Supabase phase. Empty fields are hidden.
// PLEASE VERIFY every entry below and delete any that are wrong.
export const CERTIFICATES = [
  {
    id: "data-science-job-simulation",
    title: "Data Science Job Simulation",
    issuer: "British Airways (via Forage)",
    issuedDate: "2026-08-05",
    hours: null,
    description: "",
    category: "data-science",
    imageUrl: null,
    certificateUrl: null,
  },
  {
    id: "data-science-essentials-python",
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    issuedDate: "2026-04-04",
    hours: null,
    description: "",
    category: "data-science",
    imageUrl: null,
    certificateUrl: null,
  },
  {
    id: "data-analytics-essentials",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    issuedDate: "2026-06-08",
    hours: null,
    description: "",
    category: "data-science",
    imageUrl: null,
    certificateUrl: null,
  },

{
    id: "devfest-2025-participation",
    title: "DevFest 2025 Certificate of Participation",
    issuer: "Google Developer Group - Cagayan de Oro",
    issuedDate: null,
    dateLabel: "December 5-6, 2025",
    hours: null,
    description: "",
    category: "seminars",
    imageUrl: "/certificates/devfest-2025.png",
    certificateUrl: null,
},

];