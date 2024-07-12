import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";

const nunito = Nunito_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	adjustFontFallback: true,
	style: ["normal"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
	title: "Pictogram",
	description: "Pictogram is a social media platform to make new friends",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`dark z-0 flex flex-col items-center justify-between min-h-screen ${nunito.className}`}>
				{children}
				<div className="text-[#d9d9d9] text-xs w-full text-center">
					<h3 className="py-[6px] px-[8px] w-full"> © {new Date().getFullYear()} Pictogram</h3>
				</div>
				<Toaster richColors theme="dark" className="z-40 relative" />
			</body>
		</html>
	);
}
