export interface GuideProfile {
  id: string;
  userId: string;
  bio: string | null;
  hourlyRate: number;
  languages: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ServiceSpecialization {
  key: string;
  label: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  averageTime: string;
  requiredDocuments: string[];
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SPECIALIZATIONS: ServiceSpecialization[] = [
  {
    key: "anmeldung",
    label: "Anmeldung (Address Registration)",
    description: "Help with registering your address at Bürgeramt",
    difficulty: "MEDIUM",
    averageTime: "2-3 hours",
    requiredDocuments: ["Passport", "Rental Contract", "Landlord Confirmation"],
  },
  {
    key: "visa",
    label: "Visa Extension",
    description: "Assistance with visa renewal and extension processes",
    difficulty: "HARD",
    averageTime: "3-4 hours",
    requiredDocuments: [
      "Passport",
      "Current Visa",
      "Financial Proof",
      "Insurance",
    ],
  },
  {
    key: "banking",
    label: "Bank Account Opening",
    description: "Help opening German bank accounts",
    difficulty: "EASY",
    averageTime: "1-2 hours",
    requiredDocuments: ["Passport", "Anmeldung Certificate", "Income Proof"],
  },
  {
    key: "insurance",
    label: "Health Insurance",
    description: "Navigate German health insurance system",
    difficulty: "MEDIUM",
    averageTime: "2-3 hours",
    requiredDocuments: [
      "Passport",
      "Employment Contract",
      "Previous Insurance",
    ],
  },
  {
    key: "tax",
    label: "Tax Registration",
    description: "Help with tax number registration and filing",
    difficulty: "HARD",
    averageTime: "3-5 hours",
    requiredDocuments: [
      "Passport",
      "Employment Contract",
      "Address Registration",
    ],
  },
  {
    key: "university",
    label: "University Enrollment",
    description: "Assistance with university application and enrollment",
    difficulty: "MEDIUM",
    averageTime: "2-4 hours",
    requiredDocuments: ["Transcripts", "Language Certificates", "Passport"],
  },
];

export const LANGUAGES: Language[] = [
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
];
