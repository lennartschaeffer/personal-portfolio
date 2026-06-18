import type { Metadata } from "next";
import { Martian_Mono, IBM_Plex_Mono } from "next/font/google";
import SpotlightCursor from "./components/SpotlightCursor";
import "./globals.css";

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "lennart schaeffer.",
  description: "3rd year computer science student at dalhousie university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${martian.variable} ${ibmMono.variable}`}>
      <body>
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
