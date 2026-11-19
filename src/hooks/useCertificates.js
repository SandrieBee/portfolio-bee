import { fetchCertificates } from "../services/certificateService";
import { useAsyncData } from "./useAsyncData";

export function useCertificates() {
  return useAsyncData(fetchCertificates);
}