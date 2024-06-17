"use client";
import SubmitButton from "@/components/submit-button";
import { useAction } from "next-safe-action/hooks";
import { logoutUserAction } from "../actions/form-actions";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { execute, status } = useAction(logoutUserAction, {
    onSuccess() {
      router.push("/login");
    }
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SubmitButton onClick={() => execute({ auth: "auth" })} isLoading={status === "executing"}>Logout</SubmitButton>
    </main>
  );
}
