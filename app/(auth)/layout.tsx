import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import Image from "next/image";
import { AuthScreen } from "@/components/screens";

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
			<body className={`dark relative z-0 ${nunito.className}`}>
				<AuthScreen>{children}</AuthScreen>
				<Toaster richColors theme="dark" className="z-40 relative" />
			</body>
		</html>
	);
}
