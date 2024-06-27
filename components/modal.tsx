"use client";
import { useTransition } from "react";
import SubmitButton from "./submit-button";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { logoutUserAction } from "@/app/actions/form-actions";

export function MenuModal({ show }: { show: boolean }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { execute, status } = useAction(logoutUserAction, {
    onSuccess() {
      router.push("/login");
    }
  });
  return (
    <>
      <div className="fixed hidden sm:flex flex-col gap-2 bottom-2 left-[80px] w-[160px] h-[160px] bg-[#050505] border border-[#303030] z-20 p-2 rounded-[12px]">
        <SubmitButton onClick={() => startTransition(() => execute({ auth: "session" }))} isLoading={status === "executing" || isPending}>Logout</SubmitButton>
        <SubmitButton onClick={() => startTransition(() => execute({ auth: "session" }))} isLoading={status === "executing" || isPending}>Logout</SubmitButton>
      </div>
      <div className="fixed sm:hidden flex flex-col gap-2 top-[68px] right-2 w-[160px] h-[160px] bg-[#050505] border border-[#303030] z-20 p-2 rounded-[12px]">
        <SubmitButton onClick={() => startTransition(() => execute({ auth: "session" }))} isLoading={status === "executing" || isPending}>Logout</SubmitButton>
        <SubmitButton onClick={() => startTransition(() => execute({ auth: "session" }))} isLoading={status === "executing" || isPending}>Logout</SubmitButton>
      </div>
    </>
  );
};