import Image from "next/image"
import Link from "next/link";
import { add, heart, home, profile, search, send, ham } from "@/public/assets";

const desktopMenu = [
  { name: "Home", img: home },
  { name: "Search", img: search },
  { name: "Send", img: send },
  { name: "Heart", img: heart },
  { name: "Add", img: add },
  { name: "Profile", img: profile },
];

const mobileMenu = [
  { name: "Home", img: home },
  { name: "Send", img: send },
  { name: "Add", img: add },
  { name: "Profile", img: profile },
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

export default function Sidebar() {
  return (
    <>
      {/* desktop */}
      <div className="sm:flex hidden bg-inherit flex-col items-center justify-between w-[72px] h-full fixed border-r border-[#303030] p-4">
        <div className="flex flex-col flex-1 items-center justify-center gap-[64px]">
          <Link href="/" className="cursor-pointer mt-6">
            <Icon img="/logo.svg" alt="logo" />
          </Link>
          <div className="w-10 h-full gap-[20px] flex flex-col items-center justify-around p-1">
            {desktopMenu.map((item, index) => (
              <Icon key={index} img={item.img} alt={item.name.toLowerCase()} />
            ))}
          </div>
        </div>
        <div className="mt-40 mb-8">
          <Icon img={ham} alt="ham" />
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex items-center bottom-[1px] fixed justify-evenly  w-full border-t border-r border-l border-[#303030]">
        {mobileMenu.map((item, index) => (
          <Icon key={index} img={item.img} alt={item.name.toLowerCase()} />
        ))}
      </div>
    </>
  );
};