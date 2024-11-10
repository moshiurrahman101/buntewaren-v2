import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Buntewaren | High-Quality Jute Bags in Europe",
  description: "Discover Buntewaren's stylish, sustainable jute bags imported directly from Bangladesh. Perfect for the eco-conscious European shopper. Shop now and support a greener future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
