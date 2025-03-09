import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Corrected font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AYURVEDIC",
  description: "Hair Oil",
  icons: "./ADIVASHI-LOGOiu-01.svg.svg",
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
