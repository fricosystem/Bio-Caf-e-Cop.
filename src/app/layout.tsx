import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bio Café & Co. — Almoço Natural em Pinheiros, São Paulo",
  description:
    "Cafeteria e almoço natural em Pinheiros, São Paulo. Pratos do dia, opções vegetarianas e veganas, cafés especiais e bebidas naturais feitos com ingredientes frescos e orgânicos.",
  keywords: [
    "Bio Café",
    "almoço natural",
    "comida saudável São Paulo",
    "cafeteria Pinheiros",
    "vegetariano vegano",
    "orgânico",
    "café especial",
  ],
  authors: [{ name: "Bio Café & Co." }],
  openGraph: {
    title: "Bio Café & Co. — Almoço Natural",
    description:
      "Alimentação saudável e natural em Pinheiros, São Paulo. Pratos do dia, opções vegetarianas/veganas, cafés e bebidas naturais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
