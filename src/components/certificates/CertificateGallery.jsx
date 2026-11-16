import { useState } from "react";
import FilterPills from "../ui/FilterPills";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import {
  CERTIFICATES,
  CERTIFICATE_FILTERS,
} from "../../constants/certificates";

export default function CertificateGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible =
    activeFilter === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === activeFilter);

  return (
    <section id="certificates" className="section">
      <SectionHeading
        eyebrow="Learning"
        title="Certificates and achievements"
        description="Courses, simulations, and training I have completed."
      />

      <Reveal className="mt-6">
        <FilterPills
          label="Filter certificates by category"
          filters={CERTIFICATE_FILTERS}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </Reveal>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} certificate{visible.length === 1 ? "" : "s"}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((certificate) => (
            <li key={certificate.id}>
              <CertificateCard certificate={certificate} onOpen={setSelected} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-card border border-dashed border-line bg-surface p-8 text-center">
          <p className="font-medium">No certificates in this category yet.</p>
          <p className="mt-1 text-sm text-muted">
            Try another filter, or check back soon.
          </p>
        </div>
      )}

      <CertificateModal
        certificate={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}