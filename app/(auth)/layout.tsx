import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { AuthScreen } from "@/components/screens";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	adjustFontFallback: true,
	style: ["normal"],
	variable: "--font-poppins",
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
			<body className={`dark relative z-0 ${poppins.className}`}>
				<AuthScreen>{children}</AuthScreen>
				<Toaster richColors theme="dark" className="z-40 relative" />
			</body>
		</html>
	);
}
