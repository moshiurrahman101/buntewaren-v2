import type { Metadata } from "next";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Buntewaren",
  description: "Developed by Solvepanda.com",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div className="">
            <div className="md:w-64 fixed hidden md:block">
              <Sidebar />
            </div>
            <div className="md:ml-64">
              {/* <Header /> */}
              {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
