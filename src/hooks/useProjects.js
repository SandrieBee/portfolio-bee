import { fetchProjects } from "../services/projectService";
import { useAsyncData } from "./useAsyncData";

export function useProjects() {
  return useAsyncData(fetchProjects);
}