/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// merge Tailwind and conditional classes
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
