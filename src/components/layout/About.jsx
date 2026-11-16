import Button from "../ui/Button";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { ABOUT } from "../../constants/about";
import { SITE } from "../../constants/site";

function InfoCard({ title, children }) {
  return (
    <Reveal>
      <Card>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-3 space-y-3">{children}</div>
      </Card>
    </Reveal>
  );
}

export default function About() {
  const { paragraphs, education, internships, focusAreas } = ABOUT;

  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="Introduction" title="About me" />

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <Reveal className="max-w-3xl space-y-4 lg:col-span-3">
          {paragraphs.map((text) => (
            <p key={text} className="text-lg text-muted">
              {text}
            </p>
          ))}
          <div className="pt-2">
            <Button as="a" href={SITE.resumeUrl} download variant="secondary">
              Download resume
            </Button>
          </div>
        </Reveal>

        <div className="space-y-4 lg:col-span-2">
          {education.length > 0 && (
            <InfoCard title="Education">
              {education.map((item) => (
                <div key={item.school}>
                  <p className="font-medium">{item.school}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
              ))}
            </InfoCard>
          )}

          {internships.length > 0 && (
            <InfoCard title="Internship">
              {internships.map((item) => (
                <div key={`${item.organization}-${item.role}`}>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted">
                    {item.organization} | {item.period}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  )}
                </div>
              ))}
            </InfoCard>
          )}

          {focusAreas.length > 0 && (
            <InfoCard title="Areas of focus">
              <ul className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li key={area}>
                    <Badge variant="accent">{area}</Badge>
                  </li>
                ))}
              </ul>
            </InfoCard>
          )}
        </div>
      </div>
    </section>
  );
}