import { useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelIcon } from "@hugeicons/core-free-icons";
import Button from "../ui/Button";
import { certificateDate } from "../../utils/formatDate";

export default function CertificateModal({ certificate, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (certificate && !dialog.open) dialog.showModal();
    if (!certificate && dialog.open) dialog.close();
  }, [certificate]);

  useEffect(() => {
    if (!certificate) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [certificate]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="certificate-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto max-h-[90vh] w-[min(92vw,56rem)] overflow-auto rounded-card border border-line bg-card p-0 text-ink shadow-lift backdrop:bg-scrim/50"
    >
      {certificate && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="certificate-modal-title"
                className="text-xl font-semibold"
              >
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {certificate.issuer} | {certificateDate(certificate)}
                {certificate.hours ? ` | ${certificate.hours} hours` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="rounded-lg p-2 text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <HugeiconsIcon icon={CancelIcon} size={22} />
            </button>
          </div>

          {certificate.imageUrl ? (
            <img
              src={certificate.imageUrl}
              alt={`${certificate.title} certificate`}
              className="mt-6 w-full rounded-xl border border-line"
            />
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-line bg-surface p-10 text-center text-sm text-muted">
              No preview image has been added for this certificate yet.
            </div>
          )}

          {certificate.description && (
            <p className="mt-6 text-muted">{certificate.description}</p>
          )}

          {certificate.certificateUrl && (
            <div className="mt-6">
              <Button
                as="a"
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open original certificate
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}