"use client";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { PiHashStraightBold } from "react-icons/pi";
import { FieldError, useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "@/database/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IconType } from "react-icons";
import { useAction } from "next-safe-action/hooks";
import { loginUserAction, registerNewUserAction } from "@/app/actions/form-actions";
import { toast } from "sonner";
import LoaderButton from "./loader-button";

type FormValues = {
  type: "text" | "password";
  name: string,
  error: FieldError | undefined,
  Icon: IconType,
  register: any
}

function FormField({ type, name, error, Icon, register }: FormValues) {
  return (
    <div className="w-full h-[96px] bg-[#050505] flex flex-col space-y-[3px] items-start justify-center p-4 rounded-[12px] border-2 border-[#202020] focus-within:border-[#404040]">
      <span className="text-xs text-[#9b9b9b] h-6">{name}</span>
      <div className="flex items-center justify-between w-full">
        <Icon className="text-[#9b9b9b] h-6 w-6" />
        <span className="border-r-2 border-[#404040] mr-2 w-2 h-7 shrink-0 block" />
        <input
          {...register(name)}
          type={type}
          className="w-full h-10 text-2xl text-[#FFFFFF] bg-inherit outline-none placeholder:text-[#5d5d5d]"
        />
      </div>
      {error?.message ? <span className="text-xs w-full h-4 text-red-500">{error.message}</span> : <span className="w-full shrink-0 h-4" />}
    </div>
  );
};

export function RegisterForm(){
  const { execute, status } = useAction(registerNewUserAction, {
    onSuccess() {
      toast.success("Register Successful");
    },
    onError(error) {
      toast.error(error.serverError);
    }
  });
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    execute(values);
    registerForm.reset();
  };

  return (
    <form onSubmit={registerForm.handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col items-center gap-2">
        <FormField 
          register={registerForm.register} 
          key="email" 
          name="email" 
          type="text" 
          Icon={MdAlternateEmail}
          error={registerForm.formState.errors.email} />
        <FormField 
          register={registerForm.register} 
          key="username" 
          name="username" 
          type="text" 
          Icon={PiHashStraightBold}
          error={registerForm.formState.errors.username} />
        <FormField 
          register={registerForm.register} 
          key="password" 
          name="password" 
          type="password" 
          Icon={MdPassword}
          error={registerForm.formState.errors.password} />
      </div>
      <LoaderButton isLoading={status === "executing"}>Register</LoaderButton>
    </form>
  );
};

export function LoginForm(){
  const { execute, status } = useAction(loginUserAction, {
    onSuccess() {
      toast.success("Login Successful");
    },
    onError(error) {
      toast.error(error.fetchError);
    }
  }); 
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    execute(values);
    loginForm.reset();
  };
  
  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col items-center gap-2">
        <FormField 
          register={loginForm.register} 
          key="email" 
          name="email" 
          type="text" 
          Icon={MdAlternateEmail}
          error={loginForm.formState.errors.email} />

        <FormField 
          register={loginForm.register} 
          key="password" 
          name="password" 
          type="password" 
          Icon={MdPassword}
          error={loginForm.formState.errors.password} />
      </div>
      <LoaderButton isLoading={status === "executing"}>Login</LoaderButton>
    </form>
  );
};
