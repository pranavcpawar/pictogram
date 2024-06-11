import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: [ "300", "100", "200", "600", "800", "400", "500", "700"],
  adjustFontFallback: true,
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export default function RegisterPage(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <title>Register • Frienso</title>
      <div className="bg-[#050505] border rounded-[12px] border-[#303030] flex flex-1 flex-col place-items-center sm:w-[360px] w-[80vw] h-[768px] p-4">
        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
          <div className="mt-[36px]">
            <Image src="/frienso.svg" alt="frienso logo" width={140} height={100} />
          </div>
          <div className={`${montserrat.className} text-[#eaeaea] flex flex-col text-center text-wrap p-2 w-full h-full gap-8 mt-[24px] mb-[12px]`}>
            <span className="text-[#eaeaea] text-sm">Register to Frienso to chat with your friends.</span>
          </div>
        </div>
      </div>
    </main>
  );
};