import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlo De Luca | Portfolio",
  description:
    "Premium minimalist portfolio of Carlo De Luca – CEMS Master’s Candidate, AI & Automation Specialist, and Entrepreneur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

