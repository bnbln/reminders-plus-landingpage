import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
