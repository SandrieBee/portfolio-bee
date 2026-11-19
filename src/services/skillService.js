import { supabase } from "../lib/supabaseClient";

// Returns [{ id, title, skills: ["Python", ...] }], ordered by sort_order.
export async function fetchSkillGroups() {
  const { data, error } = await supabase
    .from("skill_groups")
    .select("id, title, sort_order, skills(id, name, sort_order)")
    .order("sort_order", { ascending: true })
    .order("sort_order", { referencedTable: "skills", ascending: true });

  if (error) throw error;

  return data.map((group) => ({
    id: group.id,
    title: group.title,
    skills: group.skills.map((skill) => skill.name),
  }));
}