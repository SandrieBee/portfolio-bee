import { Link } from "react-router";
import { motion } from "motion/react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { SITE } from "../../constants/site";

const INTERESTS = [
  "Software Development",
  "Data Analytics",
  "Artificial Intelligence",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="container-page grid items-center gap-8 py-8 lg:grid-cols-2 lg:gap-12 lg:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium text-accent">{SITE.title}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{SITE.intro}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas of interest">
          {INTERESTS.map((interest) => (
            <li key={interest}>
              <Badge variant="accent">{interest}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button as={Link} to="/#projects" size="lg">
            Explore My Work
          </Button>
          <Button
            as="a"
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            View Resume
          </Button>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto hidden aspect-square w-full max-w-md lg:ml-auto lg:mr-0 lg:block"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-line bg-surface/60 bg-[radial-gradient(theme(colors.line)_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
        <div className="absolute left-8 top-8 h-40 w-40 rounded-3xl bg-accent-soft/60" />
        <div className="absolute right-8 top-14 h-20 w-20 rounded-full border-2 border-accent/30" />
        <div className="absolute bottom-24 left-8 h-14 w-14 rounded-2xl border border-line bg-white shadow-soft" />
        <div className="absolute bottom-10 right-8 w-56 rounded-3xl border border-line bg-white p-5 shadow-lift">
          <div className="space-y-2.5">
            <div className="h-2 w-3/4 rounded-full bg-accent-soft" />
            <div className="h-2 w-full rounded-full bg-line" />
            <div className="h-2 w-5/6 rounded-full bg-line" />
            <div className="h-2 w-2/3 rounded-full bg-line" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}