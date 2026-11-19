import { supabase } from "../lib/supabaseClient";

// Returns the published thesis, or null if there is none.
export async function fetchThesis() {
  const { data, error } = await supabase
    .from("thesis")
    .select(
      "title, overview, methodology, dataset, models, objectives, stressors, metrics, findings, contributions, links",
    )
    .eq("is_published", true)
    .maybeSingle();

  if (error) throw error;
  return data;
}