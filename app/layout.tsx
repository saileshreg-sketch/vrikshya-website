import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vrikshya Design & Build | Complete Design and Construction in Nepal",
    template: "%s | Vrikshya Design & Build",
  },
  description: "Thoughtful architecture, refined interiors, reliable construction, costing, and complete design-to-build services across Nepal.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
