import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://pritam-portfolio.example"),
  title: "Pritam | Premium MERN Stack Portfolio",
  description:
    "A premium, modern portfolio for Pritam, a Computer Science graduate and MERN stack developer focused on polished products, real-world problem solving, and elegant digital experiences.",
  keywords: [
    "Pritam portfolio",
    "MERN stack developer",
    "Computer Science graduate",
    "React developer",
    "Node.js portfolio",
    "premium developer portfolio",
  ],
  openGraph: {
    title: "Pritam | Premium MERN Stack Portfolio",
    description:
      "Premium portfolio showcasing MERN development, product thinking, refined interface design, and real-world problem solving.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pritam | Premium MERN Stack Portfolio",
    description:
      "Modern, premium portfolio for a MERN stack developer building thoughtful, high-quality digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[var(--background)] font-[family:var(--font-body)] text-[var(--foreground)] antialiased"
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
