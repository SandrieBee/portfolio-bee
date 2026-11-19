import { supabase } from "../lib/supabaseClient";

// Returns published projects in the shape the UI components already use.
export async function fetchProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, slug, title, role, description, year, categories, technologies, github_url, live_url, thumbnail_url",
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    role: project.role,
    description: project.description,
    year: project.year,
    categories: project.categories,
    technologies: project.technologies,
    githubUrl: project.github_url,
    liveUrl: project.live_url,
    thumbnail: project.thumbnail_url,
  }));
}