import { supabase } from "../lib/supabaseClient";

// Returns published projects in the shape the UI components use.
// Each project has an `images` list: [{ url, alt }], ordered by sort_order.
export async function fetchProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, slug, title, role, description, year, categories, technologies, github_url, live_url, thumbnail_url, project_images(image_url, alt_text, sort_order)",
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("sort_order", {
      referencedTable: "project_images",
      ascending: true,
    });

  if (error) throw error;

  return data.map((project) => {
    const gallery = project.project_images.map((image, index) => ({
      url: image.image_url,
      alt: image.alt_text || `${project.title} screenshot ${index + 1}`,
    }));

    // Fall back to the single thumbnail when a project has no gallery rows.
    const images =
      gallery.length > 0
        ? gallery
        : project.thumbnail_url
          ? [{ url: project.thumbnail_url, alt: `${project.title} preview` }]
          : [];

    return {
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
      images,
    };
  });
}