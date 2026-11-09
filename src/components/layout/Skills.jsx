import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { SKILL_GROUPS } from "../../constants/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 lg:py-24"
    >
      <SectionHeading
        eyebrow="Toolbox"
        title="Technical skills"
        description="Languages, frameworks, and tools grouped by area."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.05} className="h-full">
            <Card className="h-full">
              <div className="h-1.5 w-8 rounded-full bg-accent-soft" />
              <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
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
    </section>
  );
}