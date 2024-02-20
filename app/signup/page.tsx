"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IUser {
  email: string;
  username: string;
  password: string;
};

export default function Signup() {
  const [user, setUser] = useState<IUser>({
    email: "",
    username: "",
    password: "",
  })
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center p-20 text-[#dadada]">
      <title>Sign up | Frienso</title>
      <div className="flex flex-col sm:max-w-[360px] w-[80vw] bg-[#010101] gap-8 items-center sm:justify-between border-2 border-[#404040] px-6 py-4 shadow-[4px_4px_#252525]">
        <div className="flex flex-col items-center text-wrap font-mono text-center">
          <h1 className="text-2xl mt-[36px] mb-[12px] font-mono font-bold">frienso</h1>
          <p>Sign up to chat with your friends</p>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-1">
            <input 
              type="email" 
              className="bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 placeholder:text-sm placeholder:font-mono" 
              id="email"
              value={user.email}
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
          <div className="flex flex-col gap-1">
            <input 
              type="text" 
              className="bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 placeholder:text-sm placeholder:font-mono" 
              id="username"
              value={user.username}
              placeholder="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })} />
          </div>
          <div className="flex flex-col gap-1">
            <input 
              type="password" 
              className="bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 placeholder:text-sm placeholder:font-mono" 
              id="password"
              value={user.password}
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
        </div>
        <button className="w-full active:scale-95 rounded-md p-2 font-mono border-2 border-[#252525]">signup</button>
      </div>
      <div className="flex flex-col gap-4 w-[80vw] font-mono items-center justify-center border-2 border-[#404040] sm:max-w-[360px] p-4 shadow-[4px_4px_#252525]">
        <h3 className="text-sm font-medium">Already have an account? <Link className="text-sky-500 underline underline-offset-2" href="/login">login</Link></h3>
      </div>
    </main>
  );
}