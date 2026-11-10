export function formatDate(isoDate) {
  if (!isoDate) return "";
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function certificateDate(certificate) {
  return certificate.dateLabel || formatDate(certificate.issuedDate);
}