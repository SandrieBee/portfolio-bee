import { supabase } from "../lib/supabaseClient";

// Saves a contact form message. Visitors can insert but never read messages,
// so there is deliberately no .select() here.
export async function sendContactMessage({ name, email, subject, message }) {
  const { error } = await supabase.from("contact_messages").insert({
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  });

  if (error) throw error;
}