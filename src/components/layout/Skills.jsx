import { HugeiconsIcon } from "@hugeicons/react";
import {
  SourceCodeIcon,
  BrowserIcon,
  DatabaseIcon,
  AiBrain01Icon,
  PencilRulerIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import SectionStatus from "../ui/SectionStatus";
import { useSkillGroups } from "../../hooks/useSkillGroups";

// Matched by the group title, so the icon follows the category name.
const GROUP_ICONS = {
  "Programming Languages": SourceCodeIcon,
  "Web Development": BrowserIcon,
  Database: DatabaseIcon,
  "Data Science and Artificial Intelligence": AiBrain01Icon,
  "Tools and Design": PencilRulerIcon,
};

export default function Skills() {
  const { data: groups, loading, error, retry } = useSkillGroups();

  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Toolbox"
        title="Technical skills"
        description="Languages, frameworks, and tools grouped by area."
      />

      {loading && <SectionStatus status="loading" message="Loading skills..." />}

      {error && (
        <SectionStatus
          status="error"
          message="Skills could not be loaded. Please check your connection and try again."
          onRetry={retry}
        />
      )}

      {groups && groups.length === 0 && (
        <SectionStatus status="empty" message="No skills to show yet." />
      )}

      {groups && groups.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05} className="h-full">
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft/40 text-accent-dark"
                >
                  <HugeiconsIcon
                    icon={GROUP_ICONS[group.title] ?? Settings02Icon}
                    size={22}
                  />
                </span>
                <h3 className="mt-3 text-lg font-semibold">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}