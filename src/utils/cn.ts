import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // tailwind-merge is a utility function that merges tailwind classes --> merging classes makes it easier to manage classnames
}
