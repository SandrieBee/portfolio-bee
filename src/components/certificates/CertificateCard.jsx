import Button from "../ui/Button";
import Card from "../ui/Card";
import { certificateDate } from "../../utils/formatDate";
import { CERTIFICATE_CATEGORY_LABELS } from "../../constants/certificates";

export default function CertificateCard({ certificate, onOpen }) {
  const { title, issuer, hours, category, imageUrl } = certificate;

  return (
    <Card
      as="article"
      interactive
      flush
      className="flex h-full flex-col overflow-hidden"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${title} certificate preview`}
          loading="lazy"
          className="aspect-[4/3] w-full border-b border-line bg-surface object-contain"
        />
      ) : (
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full border-b border-line bg-surface bg-[radial-gradient(#DEE0E4_1.5px,transparent_1.5px)] [background-size:22px_22px]"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-accent">
          {CERTIFICATE_CATEGORY_LABELS[category]}
        </p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted">{issuer}</p>
        <p className="mt-1 text-sm text-muted">
          {certificateDate(certificate)}
          {hours ? ` | ${hours} hours` : ""}
        </p>

        <div className="mt-auto pt-4">
          <Button variant="secondary" onClick={() => onOpen(certificate)}>
            View certificate
          </Button>
        </div>
      </div>
    </Card>
  );
}