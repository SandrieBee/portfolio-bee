import { Link } from "react-router";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="container-page flex flex-col items-start gap-4 py-16 lg:py-24">
      <p className="text-sm font-medium text-accent">Error 404</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">Page not found</h1>
      <p className="max-w-xl text-lg text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <Button as={Link} to="/" size="lg">
        Back to home
      </Button>
    </section>
  );
}