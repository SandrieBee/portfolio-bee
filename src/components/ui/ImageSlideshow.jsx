import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  PauseIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../../utils/cn";

const FRAME = "aspect-video w-full border-b border-line bg-surface";

const controlClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-soft transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";


// On touch devices they stay visible.
const revealOnHover =
  "transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100";

export default function ImageSlideshow({ images, title, intervalMs = 5000 }) {
  const count = images.length;
  const reducedMotion = useReducedMotion();
  const [state, setState] = useState(() => ({
    index: 0,
    loaded: new Set([0, 1]),
  }));
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);

  const go = useCallback(
    (getNext) => {
      setState(({ index, loaded }) => {
        const nextIndex = getNext(index);
        const nextLoaded = new Set(loaded);
        nextLoaded.add(nextIndex);
        nextLoaded.add((nextIndex + 1) % count);
        return { index: nextIndex, loaded: nextLoaded };
      });
    },
    [count],
  );

  const next = useCallback(() => go((i) => (i + 1) % count), [go, count]);
  const prev = useCallback(
    () => go((i) => (i - 1 + count) % count),
    [go, count],
  );

  const autoplay =
    count > 1 && !reducedMotion && !userPaused && !hovering && !focused;

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      if (!document.hidden) next();
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoplay, next, intervalMs]);

  if (count === 0) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          FRAME,
          "bg-[radial-gradient(#DEE0E4_1.5px,transparent_1.5px)] [background-size:22px_22px]",
        )}
      />
    );
  }

  if (count === 1) {
    return (
      <img
        src={images[0].url}
        alt={images[0].alt}
        loading="lazy"
        decoding="async"
        className={cn(FRAME, "object-contain")}
      />
    );
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      className={cn("group relative overflow-hidden", FRAME)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {images.map((image, i) => {
        const active = i === state.index;
        if (!active && !state.loaded.has(i)) return null;
        return (
          <img
            key={image.url}
            src={image.url}
            alt={active ? image.alt : ""}
            aria-hidden={!active}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-contain transition-opacity duration-500 motion-reduce:transition-none",
              active ? "opacity-100" : "opacity-0",
            )}
          />
        );
      })}

      <p className="sr-only" aria-live={autoplay ? "off" : "polite"}>
        Image {state.index + 1} of {count}
      </p>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className={cn(
          controlClass,
          revealOnHover,
          "absolute left-2 top-1/2 -translate-y-1/2",
        )}
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className={cn(
          controlClass,
          revealOnHover,
          "absolute right-2 top-1/2 -translate-y-1/2",
        )}
      >
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
      </button>

      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setUserPaused((paused) => !paused)}
          aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
          className={cn(controlClass, "absolute right-2 top-2")}
        >
          <HugeiconsIcon icon={userPaused ? PlayIcon : PauseIcon} size={16} />
        </button>
      )}

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center rounded-full border border-line bg-white/90 px-1 shadow-soft">
        {images.map((image, i) => (
          <button
            key={image.url}
            type="button"
            onClick={() => go(() => i)}
            aria-label={`Show image ${i + 1} of ${count}`}
            aria-current={i === state.index}
            className="rounded-full p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span
              className={cn(
                "block h-2 w-2 rounded-full transition-colors",
                i === state.index ? "bg-accent" : "bg-muted/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}