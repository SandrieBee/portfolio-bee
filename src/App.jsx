import { Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}