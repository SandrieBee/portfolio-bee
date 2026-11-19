import { supabase } from "../lib/supabaseClient";

export async function sendContactMessage({ name, email, subject, message }) {
  const { error } = await supabase.from("contact_messages").insert({
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  });

  if (error) throw error;
}