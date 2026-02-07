import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reminders+ — Build habits. Keep streaks. Stay productive.",
  description: "A modern task and routine app that helps you build consistency. Complete one task every day and keep your streak alive.",
  openGraph: {
    title: "Reminders+",
    description: "A modern task and routine app that helps you build consistency. Complete one task every day and keep your streak alive.",
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
        className={`${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
