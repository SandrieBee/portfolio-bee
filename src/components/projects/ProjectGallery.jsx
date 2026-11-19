import { useState } from "react";
import FilterPills from "../ui/FilterPills";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import SectionStatus from "../ui/SectionStatus";
import ProjectCard from "./ProjectCard";
import { PROJECT_FILTERS } from "../../constants/projects";
import { useProjects } from "../../hooks/useProjects";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: projects, loading, error, retry } = useProjects();

  const visibleProjects = !projects
    ? []
    : activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="Personal and academic projects. Use the filters to browse by category."
      />

      {loading && (
        <SectionStatus status="loading" message="Loading projects..." />
      )}

      {error && (
        <SectionStatus
          status="error"
          message="Projects could not be loaded. Please check your connection and try again."
          onRetry={retry}
        />
      )}

      {projects && projects.length === 0 && (
        <SectionStatus status="empty" message="No projects to show yet." />
      )}

      {projects && projects.length > 0 && (
        <>
          <Reveal className="mt-6">
            <FilterPills
              label="Filter projects by category"
              filters={PROJECT_FILTERS}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </Reveal>

          <p className="sr-only" aria-live="polite">
            Showing {visibleProjects.length} project
            {visibleProjects.length === 1 ? "" : "s"}
          </p>

          {visibleProjects.length > 0 ? (
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 rounded-card border border-dashed border-line bg-surface p-8 text-center">
              <p className="font-medium">No projects in this category yet.</p>
              <p className="mt-1 text-sm text-muted">
                Try another filter, or check back soon.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}