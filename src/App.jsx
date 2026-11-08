import { Routes, Route } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}