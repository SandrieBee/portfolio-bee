import { fetchThesis } from "../services/thesisService";
import { useAsyncData } from "./useAsyncData";

export function useThesis() {
  return useAsyncData(fetchThesis);
}