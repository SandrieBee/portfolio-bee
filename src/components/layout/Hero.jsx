import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { SITE } from "../../constants/site";

const PHOTO_URL = "./public/profile.png";

const INTERESTS = [
  "Software Development",
  "Data Analytics",
  "Artificial Intelligence",
];

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const textItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="container-page grid items-center gap-10 overflow-x-clip py-8 md:grid-cols-2 md:gap-8 lg:gap-12 lg:py-8"
    >
      <motion.div variants={textContainer} initial="hidden" animate="show">
        <motion.p variants={textItem} className="text-sm font-medium text-accent">
          {SITE.title}
        </motion.p>

        <motion.h1
          variants={textItem}
          className="mt-3 text-[clamp(2rem,8.5vw,3rem)] font-semibold leading-tight"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          variants={textItem}
          className="mt-4 max-w-2xl text-base text-muted sm:text-lg"
        >
          {SITE.intro}
        </motion.p>

        <motion.ul
          variants={textItem}
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Areas of interest"
        >
          {INTERESTS.map((interest) => (
            <li key={interest}>
              <Badge variant="accent">{interest}</Badge>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={textItem} className="mt-6 flex flex-wrap gap-3">
          <Button
            as={Link}
            to="/#projects"
            size="lg"
            className="flex-1 sm:flex-none"
          >
            Explore My Work
          </Button>
          <Button
            as="a"
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="flex-1 sm:flex-none"
          >
            View Resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mx-auto w-[min(62vw,15rem)] md:ml-auto md:mr-0 md:w-full md:max-w-sm lg:max-w-md"
      >
        {/* Decorative frame behind the photo */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-0 -translate-x-2 translate-y-2 rounded-3xl border border-line bg-surface/60 bg-[radial-gradient(rgb(var(--color-line))_1.5px,transparent_1.5px)] [background-size:16px_16px] md:-translate-x-3 md:translate-y-3 lg:-translate-x-4 lg:translate-y-4 lg:rounded-[2rem] lg:[background-size:22px_22px]"
        />

        {/* Accent ring: pops in, then floats gently */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1,
            scale: 1,
            ...(reduceMotion ? {} : { y: [0, -6, 0] }),
          }}
          transition={{
            opacity: { delay: 0.6 },
            scale: { delay: 0.6, type: "spring", stiffness: 200, damping: 14 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
          className="absolute -right-2 -top-2 h-10 w-10 rounded-full border-2 border-accent/30 md:h-12 md:w-12 lg:-right-3 lg:-top-3 lg:h-16 lg:w-16"
        />

        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <img
            src={PHOTO_URL}
            alt={`Portrait of ${SITE.name}`}
            width="1000"
            height="1000"
            fetchPriority="high"
            decoding="async"
            className="aspect-square w-full rounded-3xl border border-line bg-surface object-cover object-top shadow-lift lg:rounded-[2rem]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}