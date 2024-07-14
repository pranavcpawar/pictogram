import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import Image from "next/image";

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
				<div className="bg-black box-border min-h-dvh w-full flex flex-1 flex-col relative z-0 items-stretch">
					<div className="flex flex-row-reverse flex-auto">
						<div className="min-w-[45vw] justify-center p-[16px]">
							{children}
						</div>
						<div className="min-h-[45vh] relative z-0 md:flex hidden flex-col justify-center p-[20px] box-border w-full items-center">
							<div className="max-h-[380px] h-[50%] max-w-full items-center flex flex-col w-full justify-center">
								<Image src="/logo.svg" alt="pictogram logo" className="flex flex-col justify-center" width={320} height={0} priority />
							</div>
						</div>
					</div>
					<div className="text-[#d9d9d9] text-xs w-full text-center">
						<h3 className="py-[6px] px-[8px] w-full"> © {new Date().getFullYear()} Pictogram</h3>
					</div>
				</div>
				<Toaster richColors theme="dark" className="z-40 relative" />
			</body>
		</html>
	);
}
