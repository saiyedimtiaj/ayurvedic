import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Corrected font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hair Oil",
  description: "Hair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
