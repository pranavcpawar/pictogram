import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/components/sidebar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	adjustFontFallback: true,
	style: ["normal", "italic"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "pictogram",
	description: "pictogram is a social media platform to make new friends",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`dark z-0 flex flex-col items-center justify-between min-h-screen ${poppins.className}`}
			>
				<div className="z-0 flex sm:flex-row gap-2 flex-col sm:items-start items-center sm:justify-start justify-center w-full h-full">
					<Sidebar />
					{children}
				</div>
				<div className="text-[#d9d9d9] sm:flex hidden text-xs p-1 z-0 relative bottom-2">
					<h3> © {new Date().getFullYear()} pictogram</h3>
				</div>
				<Toaster richColors theme="dark" className="z-40" />
			</body>
		</html>
	);
}
