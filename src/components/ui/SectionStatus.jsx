import Button from "./Button";

const boxClass =
  "mt-8 rounded-card border border-dashed border-line bg-surface p-8 text-center";

export default function SectionStatus({ status, message, onRetry }) {
  if (status === "loading") {
    return (
      <div role="status" className={boxClass}>
        <p className="animate-pulse text-muted motion-reduce:animate-none">
          {message ?? "Loading..."}
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div role="alert" className={boxClass}>
        <p className="font-medium">{message ?? "Something went wrong."}</p>
        {onRetry && (
          <div className="mt-4">
            <Button variant="secondary" onClick={onRetry}>
              Try again
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={boxClass}>
      <p className="text-muted">{message ?? "Nothing to show yet."}</p>
    </div>
  );
}