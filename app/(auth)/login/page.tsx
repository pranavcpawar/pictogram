import { LoginForm } from "@/components/form";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { IntroAnimation } from "@/components/animations";

const space_grotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	adjustFontFallback: true,
	style: ["normal"],
	variable: "--font-space_grotesk",
});

export default function LoginPage() {
	return (
		<main className={`relative w-full h-full flex flex-col justify-center z-0 bg-black ${space_grotesk.className}`}>
			<title>Login • Pictogram</title>
			<div className="max-w-[680px] min-w-[424px] flex flex-col justify-center w-full h-full p-[20px]">
				<div className="my-[48px] tracking-tighter font-bold text-2xl text-[#f5f5f5]">
					<h1 className="inline align-middle">Pictogram</h1>
				</div>
				<div className="mb-[32px] text-xl font-bold tracking-[-1.2px] text-[#f5f5f5]">
					<h1 className="inline">
						<IntroAnimation texts={["Welcome back!", "Something's brewing!", "Login to check your feed!"]} />
					</h1>
				</div>
				<div className="text-[#f5f5f5] flex flex-col w-[380px] h-full mb-[12px]">
					<LoginForm />
				</div>
				<div className="flex flex-col gap-2 w-[380px] justify-center">
					<h3 className="text-sm text-[#f5f5f5] font-medium">
						Don&apos;t have an account?{" "}
					</h3>
					<Link className="text-[#CA2C92] w-full text-center p-2 border-2 border-[#242426] rounded-[8px] active:scale-95" href="/register">
						Register
					</Link>
				</div>
			</div>
		</main>
	);
}
