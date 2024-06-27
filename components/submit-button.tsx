import { LuLoader2 } from "react-icons/lu";

export default function SubmitButton({
  children,
  isLoading,
  onClick,
  submitText
} : {
  children: React.ReactNode;
  isLoading: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  submitText?: string;
}
){

  return (
    <button 
      disabled={isLoading} 
      onClick={onClick}
      className="w-full bg-[#CA2C92] hover:bg-[rgb(202,44,146,0.9)] active:scale-95 text-black font-bold flex flex-col space-y-[3px] items-center justify-center p-2 rounded-[8px]">
        {isLoading && <LuLoader2 className="animate-spin" />}
        {isLoading ? submitText : children} 
    </button>
  );
};