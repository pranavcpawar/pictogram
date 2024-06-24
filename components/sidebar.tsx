import Image from "next/image"
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { FiSearch, FiSend } from "react-icons/fi";
import { TiHeart } from "react-icons/ti";
import { TbSquareRoundedPlus2, TbAlpha, TbMenu } from "react-icons/tb";
import { IconType } from "react-icons";

const desktopMenu = [
  { name: "Home", img: RiHome2Line },
  { name: "Search", img: FiSearch },
  { name: "Send", img: FiSend },
  { name: "Heart", img: TiHeart },
  { name: "Add", img: TbSquareRoundedPlus2 },
  { name: "Profile", img: TbAlpha },
];

const mobileMenu = [
  { name: "Home", img: RiHome2Line },
  { name: "Send", img: FiSend },
  { name: "Add", img: TbSquareRoundedPlus2 },
  { name: "Profile", img: TbAlpha },
];

function Icon(
  { img,
    alt,
  }: { 
    img: string,
    alt: string,
  }) {
  return (
    <div className="w-12 h-12 grid place-content-center cursor-pointer p-1">
      <Image src={img} alt={alt} width={48} className="hover:scale-105 hover:bg-[#161618] rounded-md" height={48} priority />
    </div>
  );
};

function ReactIcon(
  {
    Icon,
  }: {
    Icon: IconType,
  }) {
  return(
    <Icon size={24} className="w-6 h-6 text-[#eaeaea]" />
  );
};

export default function Sidebar() {
  return (
    <>
      {/* desktop */}
      <div className="sm:flex hidden z-10 bg-black flex-col items-center justify-between w-[72px] h-full fixed border-r border-[#303030] p-4">
        <div className="flex flex-col flex-1 items-center justify-center gap-[64px]">
          <Link href="/" className="cursor-pointer mt-6">
            <Icon img="/logo.svg" alt="logo" />
          </Link>
          <div className="w-10 h-full gap-[20px] flex flex-col items-center justify-around p-1">
            {desktopMenu.map((item, index) => (
              <ReactIcon key={index} Icon={item.img} />
            ))}
          </div>
        </div>
        <div className="mt-40 mb-8 flex flex-col items-center">
          <ReactIcon key="ham" Icon={TbMenu} />
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex items-center gap-2 w-full h-[60px] bg-black border-b z-10 border-[#303030] fixed top-0 p-2">
        <div className="w-full h-[40px] flex items-center justify-between">
          <div className="ml-2 w-[80px] h-[40px] flex place-content-center">
            <Image src="/frienso.svg" alt="frienso" className="w-full h-full" width={80} height={40} priority />
          </div>
          <div className="flex max-h-[36px] gap-2 px-2 items-center justify-center bg-[#262626] text-sm placeholder:text-[#9b9b9b] outline-none rounded-[8px] p-1">
            <ReactIcon key="search" Icon={FiSearch} />
            <input placeholder="Search" className="bg-inherit outline-none w-[224px]" />
          </div>
        </div>
        <ReactIcon key="ham" Icon={TbMenu} />
      </div>
      <div className="sm:hidden h-[48px] z-10 bg-black flex items-center bottom-0 fixed justify-evenly w-full border-t border-r border-l border-[#303030]">
        {mobileMenu.map((item, index) => (
          <ReactIcon Icon={item.img} key={index} />
        ))}
      </div>
    </>
  );
};
