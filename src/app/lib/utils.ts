import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseJsonSafe<T>(json: string): T | null {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}

export function formatLanguages(languages: string[]): string {
  if (languages.length === 0) return "No languages specified";
  if (languages.length === 1) return languages[0];
  if (languages.length === 2) return languages.join(" and ");

  return `${languages.slice(0, -1).join(", ")}, and ${
    languages[languages.length - 1]
  }`;
}

export function formatSpecializations(specializations: string[]): string {
  if (specializations.length === 0) return "General assistance";
  if (specializations.length === 1) return specializations[0];
  if (specializations.length === 2) return specializations.join(" and ");

  return `${specializations.slice(0, -1).join(", ")}, and ${
    specializations[specializations.length - 1]
  }`;
}

export function formatPrice(amount: number): string {
  return `€${amount}/hour`;
}

export function generateAvatarUrl(name: string): string {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff&size=128`;
}
