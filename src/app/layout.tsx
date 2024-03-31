import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { FileContextProvider } from "./file-context";
import { Header } from "@/components/header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MainBreadCrumbs } from "./main-breadcrumbs";
import { Suspense } from "react";

const lato = Lato({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="p-[25px] h-screen bg-[#0D0F11] text-white flex flex-col ">
          <FileContextProvider>
            <Header />
            <MainBreadCrumbs />
            <Suspense>{children}</Suspense>
          </FileContextProvider>
        </main>
      </body>
    </html>
  );
}
