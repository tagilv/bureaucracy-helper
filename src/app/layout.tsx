import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bureaucracy Helper - Navigate German Bureaucracy with Student Guides",
  description:
    "Connect with German students who can help you navigate bureaucracy in Germany. From Anmeldung to visa extensions, get expert guidance from experienced locals.",
  keywords:
    "German bureaucracy, Anmeldung, visa extension, Berlin, student guides, expat help",
  openGraph: {
    title: "Bureaucracy Helper - Navigate German Bureaucracy",
    description:
      "Get help with German bureaucracy from experienced student guides",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
