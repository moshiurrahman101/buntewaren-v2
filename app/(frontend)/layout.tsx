import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Buntewaren | High-Quality Jute Bags in Europe",
  description: "Discover Buntewaren's stylish, sustainable jute bags imported directly from Bangladesh. Perfect for the eco-conscious European shopper. Shop now and support a greener future.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </SessionProvider>
  );
}
