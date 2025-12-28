import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Weird shadcn/ui utility function for merging classnames
// cn() already merges but twMerge() does the job
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
