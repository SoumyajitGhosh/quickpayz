import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { AppbarClient } from "../components/AppbarClient";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickPayz",
  description: "Simple wallet app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions); // Replace with your logic
  const shouldShowAppbar = !!session;

  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            {shouldShowAppbar && <AppbarClient />}
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
