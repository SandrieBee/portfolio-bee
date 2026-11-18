import { Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}