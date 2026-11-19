// Category options for the certificate filters. These ids must match the
// check constraint on certificates.category in the database.
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