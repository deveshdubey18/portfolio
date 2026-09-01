import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Devesh Dubey | Data Analyst & Aspiring Data Scientist",
  description: "Portfolio of Devesh Dubey, Data Analyst and Aspiring Data Scientist specializing in ML, SQL, and Data Visualization.",
  openGraph: {
    title: "Devesh Dubey | Data Analyst & Aspiring Data Scientist",
    description: "Portfolio of Devesh Dubey, Data Analyst and Aspiring Data Scientist specializing in ML, SQL, and Data Visualization.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
