import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../globals.css";
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
      <body className={`dark z-0 flex flex-col items-center justify-between min-h-screen p-4 ${comfortaa.className}`}>
        {children}
        <div className="text-[#d9d9d9] text-xs p-1 z-0 fixed bottom-2"><h3> © {new Date().getFullYear()} Frienso</h3></div>
        <Toaster richColors theme="dark" className="z-40" />
      </body>
    </html>
  );
}
