import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import ActionSectionContextProvider from "./components/context/activeSection";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxim | Personal Portfolio",
  description:
    "Maxim is a software engineer with more than 2.5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 overflow-x-hidden`}
      >
        <div className="bg-[#45d62b] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[40rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#301fad] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[40rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActionSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActionSectionContextProvider>
      </body>
    </html>
  );
}
