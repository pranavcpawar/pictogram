import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const comfortaa = Comfortaa({ 
  subsets: ["latin"], 
  weight: [ "300", "400", "700"],
  adjustFontFallback: true,
  style: ["normal"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "Frienso",
  description: "Frienso is a social media platform to make new friends",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark flex flex-col items-center justify-between min-h-screen ${comfortaa.className}`}>
        <div className="flex sm:items-center items-start justify-center w-full">
          <Image src="/logo.svg" className="p-4 max-h-[380px] h-[50%] w-full hidden md:flex" alt="logo" width={424} height={340} priority />
          {children}
        </div>
        <div className="text-[#9b9b9b] text-xs p-1"><h3>Frienso © {new Date().getFullYear()}</h3></div>
      </body>
    </html>
  );
}
