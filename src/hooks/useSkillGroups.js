import { fetchSkillGroups } from "../services/skillService";
import { useAsyncData } from "./useAsyncData";

export function useSkillGroups() {
  return useAsyncData(fetchSkillGroups);
}