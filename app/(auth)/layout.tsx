import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import { Toaster } from "sonner";

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
      <body className={`dark z-0 flex flex-col items-center justify-between min-h-screen ${comfortaa.className}`}>
        <div className="z-0 flex sm:items-center items-start justify-center w-full">
          <Image src="/logo.svg" className="p-4 max-h-[380px] h-[50%] w-full hidden md:flex" alt="logo" width={424} height={340} priority />
          {children}
        </div>
        <div className="text-[#d9d9d9] text-xs p-1 z-0 fixed bottom-2"><h3> © {new Date().getFullYear()} Frienso</h3></div>
        
        <Toaster richColors theme="dark" className="z-40" />
      </body>
    </html>
  );
}
