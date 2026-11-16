import { useState } from "react";
import FilterPills from "../ui/FilterPills";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS, PROJECT_FILTERS } from "../../constants/projects";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="Personal and academic projects. Use the filters to browse by category."
      />

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
    </section>
  );
}