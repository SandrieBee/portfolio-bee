import { Routes, Route, Link } from "react-router";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SunIcon, MoonIcon } from "@hugeicons/core-free-icons";

function Page({ title, linkTo, linkLabel }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-rose-50">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-3xl font-semibold text-slate-700 shadow-sm"
      >
        <HugeiconsIcon icon={SunIcon} size={28} />
        {title}
        <HugeiconsIcon icon={MoonIcon} size={28} />
      </motion.h1>
      <Link to={linkTo} className="text-slate-600 underline">
        {linkLabel}
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Page title="Home" linkTo="/about" linkLabel="Go to About" />}
      />
      <Route
        path="/about"
        element={<Page title="About" linkTo="/" linkLabel="Back to Home" />}
      />
    </Routes>
  );
}