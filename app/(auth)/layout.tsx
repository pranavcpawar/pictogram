import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";

const lato = Noto_Sans({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"],
  adjustFontFallback: true,
  style: ["normal", "italic"],
  variable: "--font-lato",
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
      <body className={`dark sm:flex ${lato.className}`}>
        {children}

      </body>
    </html>
  );
}
