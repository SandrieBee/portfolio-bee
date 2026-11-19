import { supabase } from "../lib/supabaseClient";

// Returns published certificates in the shape the UI components already use.
export async function fetchCertificates() {
  const { data, error } = await supabase
    .from("certificates")
    .select(
      "id, slug, title, issuer, description, category, issued_date, date_label, hours, image_url, certificate_url",
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data.map((certificate) => ({
    id: certificate.id,
    slug: certificate.slug,
    title: certificate.title,
    issuer: certificate.issuer,
    description: certificate.description,
    category: certificate.category,
    issuedDate: certificate.issued_date,
    dateLabel: certificate.date_label,
    hours: certificate.hours,
    imageUrl: certificate.image_url,
    certificateUrl: certificate.certificate_url,
  }));
}