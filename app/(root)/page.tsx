"use client";
import SubmitButton from "@/components/submit-button";
import { useAction } from "next-safe-action/hooks";
import { logoutUserAction } from "../actions/form-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Home() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { execute, status } = useAction(logoutUserAction, {
    onSuccess() {
      router.push("/login");
    }
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SubmitButton onClick={() => startTransition(() => execute({ auth: "session" }))} isLoading={status === "executing" || isPending}>Logout</SubmitButton>
    </main>
  );
}
