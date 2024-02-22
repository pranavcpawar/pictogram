"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { UserValidation } from "@/database/validations/user";
import {useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface IUser {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const {register, handleSubmit, formState: {errors}, setError} = useForm<IUser>({
    resolver: zodResolver(UserValidation),
  });

  const onSubmit = async (user: IUser) => {

    try {
      setLoader(true);
      const res = await axios.post("/api/users/signup", {email: user.email, username: user.username, password: user.password});
      console.log("signup success!", res.data);
      router.push("/login");
      
    } catch (err) {
      console.log("signup failed!", (err as Error).message);
    } finally {
      setLoader(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col gap-8 items-center p-20 text-[#dadada]">
      <title>Sign up • Frienso</title>
      <div className="flex flex-col sm:max-w-[360px] w-[80vw] bg-[#010101] gap-8 items-center sm:justify-between border-2 border-[#404040] px-6 py-4 shadow-[4px_4px_#252525]">
        <div className="flex flex-col items-center text-wrap font-mono text-center">
          <h1 className="text-2xl mt-[36px] mb-[12px] font-mono font-bold">frienso</h1>
          <p>Sign up to chat with your friends</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-1">
            <input 
              type="email" 
							className={`bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 ${errors.email ? "border-red-500" : ""} placeholder:text-sm placeholder:font-mono`}
              id="email"
              {...register("email")}
              value={user.email}
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
              {errors.email && <span className="text-red-500 text-xs font-mono">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input 
              type="text" 
							className={`bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 ${errors.username ? "border-red-500" : ""} placeholder:text-sm placeholder:font-mono`}
              id="username"
              value={user.username}
              {...register("username")}
              placeholder="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })} />
              {errors.username && <span className="text-red-500 text-xs font-mono">{errors.username.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input 
              type="password" 
							className={`bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 ${errors.password ? "border-red-500" : ""} placeholder:text-sm placeholder:font-mono`}
              id="password"
              value={user.password}
              {...register("password")}
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })} />
              {errors.password && <span className="text-red-500 text-xs font-mono">{errors.password.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input 
              type="password" 
							className={`bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 ${errors.confirmPassword ? "border-red-500" : ""} placeholder:text-sm placeholder:font-mono`}
              id="confirmPassword"
              value={user.confirmPassword}
              {...register("confirmPassword")}
              placeholder="confirm password"
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
              {errors.confirmPassword && <span className="text-red-500 text-xs font-mono">{errors.confirmPassword.message}</span>}
          </div>
          <button type="submit"  className="w-full active:scale-95 rounded-md p-2 font-mono border-2 border-[#252525]">
            {loader ? 
              <div className="flex items-center justify-center">
                <Image src={"/loader.svg"} alt="loader" width={24} height={24} className="bg-inherit" />
              </div> : 
            "sign up"}
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 w-[80vw] font-mono items-center justify-center border-2 border-[#404040] sm:max-w-[360px] p-4 shadow-[4px_4px_#252525]">
        <h3 className="text-sm font-medium">Already have an account? <Link className="text-sky-500 underline underline-offset-2" href="/login">login</Link></h3>
      </div>
    </main>
  );
}