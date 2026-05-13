import type { Metadata } from "next";
import { Caveat, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevJournal | Portfolio",
  description: "DevJournal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${caveat.variable} ${dmSans.variable} ${firaCode.variable} antialiased bg-background-warm text-on-surface selection:bg-tertiary selection:text-on-tertiary-container min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
