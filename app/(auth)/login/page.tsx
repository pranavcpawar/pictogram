import { LoginForm } from "@/components/form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage(){
  return (
    <main className="flex min-w-[45vw] flex-col items-start p-4">
      <title>Login • Frienso</title>
      <div className=" max-w-[420px] flex flex-col items-center rounded-md w-full h-full gap-2 p-8">
        <div className="mt-[36px]">
          <Image src="/frienso.svg" alt="frienso logo" width={240} height={100} priority />
        </div>
        <div className="text-[#eaeaea] flex flex-col w-full h-full gap-6 mb-[12px] mt-[32px]">
          <LoginForm />
        </div>
        <div className="flex flex-col gap-4 border-2 border-[#202020] rounded-[12px] w-full items-center justify-center p-4">
          <h3 className="text-sm text-[#eaeaea] font-medium">Don&apos;t have an account?{" "} <Link  className="text-[#CA2C92]" href="/register">Register</Link></h3>
        </div>
      </div>
    </main>
  );
};