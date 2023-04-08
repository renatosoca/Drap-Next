import { EntriesContext } from "@/contexts/entries";
import { useContext } from "react"

export const useEntry = () => {
  return useContext(EntriesContext);
}