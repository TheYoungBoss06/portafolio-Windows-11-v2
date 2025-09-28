import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows 11 Portfolio",
  description: "A Windows 11-like interactive portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-white">
        {children}
      </body>
    </html>
  );
}
