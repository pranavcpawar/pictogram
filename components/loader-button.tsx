import { LuLoader2 } from "react-icons/lu";

export default function LoaderButton({
  isLoading,
  children,
  loadingText,
  onClick
}: {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}) {
  return (
    <button 
      disabled={isLoading}
      onClick={(e) => onClick?.(e)} 
      type="submit"
      className="w-2/3 bg-[#CA2C92] hover:bg-[rgb(202,44,146,0.9)] active:scale-95 text-black font-bold flex flex-col space-y-[3px] items-center justify-center p-2 rounded-[8px]">
        {isLoading && <LuLoader2 className="animate-spin" />}
        {isLoading ? loadingText : children} 
    </button>
  );
}