// TEMPORARY: simulates sending. In Phase 7 this becomes a Supabase insert.
export async function sendContactMessage(values) {
  await new Promise((resolve) => setTimeout(resolve, 800));

  // For testing the error state: use "test error" as the subject.
  if (values.subject.trim().toLowerCase() === "test error") {
    throw new Error("Simulated failure");
  }

  return { ok: true };
}