import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import { LocaleProvider } from "@/contexts/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M'entends-tu ?",
  description: "Un site pour comprendre la surdité.",
  keywords: [
    "surdité",
    "comprendre la surdité",
    "troubles auditifs",
    "perte auditive",
    "Beethoven surdité",
    "causes surdité",
    "types de surdité",
    "vivre avec la surdité",
    "ressources surdité",
    "informations surdité",
    "santé auditive",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "M'entends-tu ?",
    description: "Un site pour comprendre la surdité.",
    url: "https://lmcgroup.xyz/",
    siteName: "M'entends-tu ?",
    images: [
      {
        url: "https://lmcgroup.xyz/favicon.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M'entends-tu ?",
    description: "Un site pour comprendre la surdité.",
    images: ["https://lmcgroup.xyz/favicon.ico"],
    creator: "@LMCGroup",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "LMCGroup" }],
  publisher: "LMCGroup",
  alternates: {
    canonical: "https://lmcgroup.xyz/",
    languages: {
      "en-US": "https://lmcgroup.xyz/en",
      "fr-FR": "https://lmcgroup.xyz/fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen text-white`}
      >
        <LocaleProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
