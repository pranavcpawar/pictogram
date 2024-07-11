"use client";
import Image from "next/image";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { FiSearch, FiSend } from "react-icons/fi";
import { TiHeart } from "react-icons/ti";
import { TbSquareRoundedPlus2, TbAlpha, TbMenu } from "react-icons/tb";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import { MenuModal } from "./modal";
import { useState } from "react";

const desktopMenu = [
	{ name: "Home", img: RiHome2Line, link: "/" },
	{ name: "Search", img: FiSearch, link: undefined },
	{ name: "Send", img: FiSend, link: "/direct/inbox" },
	{ name: "Heart", img: TiHeart, link: undefined },
	{ name: "Add", img: TbSquareRoundedPlus2, link: undefined },
	{ name: "Profile", img: TbAlpha, link: "/pranavcpawar" },
];

const mobileMenu = [
	{ name: "Home", img: RiHome2Line, link: "/" },
	{ name: "Send", img: FiSend, link: "/direct/inbox" },
	{ name: "Heart", img: TiHeart, link: undefined },
	{ name: "Add", img: TbSquareRoundedPlus2, link: undefined },
	{ name: "Profile", img: TbAlpha, link: "/pranavcpawar" },
];

function Icon({ img, alt }: { img: string; alt: string }) {
	return (
		<div className="w-12 h-12 grid place-content-center cursor-pointer p-1">
			<Image
				src={img}
				alt={alt}
				width={48}
				className="hover:scale-105 hover:bg-[#161618] rounded-md"
				height={48}
				priority
			/>
		</div>
	);
}

function ReactIcon({
	Icon,
	className,
	link,
	active,
	onClick,
	large,
	name,
}: {
	Icon: IconType;
	className?: string;
	link?: string;
	active?: boolean;
	large?: boolean;
	name?: string;
	onClick?: (
		e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => void;
}) {
	if (large) {
		if (!link || active === undefined)
			return (
				<button
					onClick={onClick}
					className={`${className} w-full h-12 flex items-center justify-start cursor-pointer p-[12px] my-1 rounded-md`}
				>
					<div className="inline-flex items-center w-full h-full justify-start gap-[16px]">
						<Icon size={24} className="w-6 h-6" />
						<h4>{name}</h4>
					</div>
				</button>
			);
		return (
			<Link
				href={link}
				className={`${
					active ? "text-[#ca2c92] font-bold hover:bg-[#161618]" : className
				} w-full h-12 flex rounded-md items-center justify-start cursor-pointer p-[12px] my-1`}
			>
				<div className="w-full h-full inline-flex items-center justify-start gap-[16px]">
					<Icon
						size={24}
						className={`w-6 h-6 ${
							active ? "text-[#ca2c92]" : "text-[#eaeaea]"
						}`}
					/>
					<h4>{name}</h4>
				</div>
			</Link>
		);
	} else {
		if (!link || active === undefined)
			return (
				<button
					onClick={onClick}
					className={`${className} w-12 h-12 flex items-center justify-center cursor-pointer p-[12px] rounded-[12px] my-1`}
				>
					<Icon size={24} className="w-6 h-6" />
				</button>
			);
		return (
			<Link
				href={link}
				className={`${
					active ? "" : className
				} w-12 h-12 flex rounded-[12px] items-center justify-center cursor-pointer p-[12px] my-1`}
			>
				<Icon
					size={24}
					className={`w-6 h-6 ${active ? "text-[#ca2c92]" : "text-[#eaeaea]"}`}
				/>
			</Link>
		);
	}
}

export default function Sidebar() {
	const pathname = usePathname();
	const isActive = (link: string) => pathname === link;
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			{/* screen width > 768px */}
			<div className="sm:flex hidden z-10 bg-black flex-col items-center justify-between w-[72px] h-full fixed border-r border-[#303030] p-2">
				<div className="flex flex-col flex-1 items-center justify-center">
					<Link href="/" className="w-full h-[92px] relative top-0 left-0">
						<div className="pt-[25px] pb-[16px] px-[12px] mb-[20px] h-[72px] w-full">
							<div className="w-full h-[48px] flex items-center justify-start">
								<Image
									className="cursor-pointer"
									src="/logo.svg"
									alt="logo"
									width={88}
									height={24}
								/>
							</div>
						</div>
					</Link>
					<div className="w-full h-full flex flex-col items-center justify-around">
						{desktopMenu.map((item, index) => (
							<ReactIcon
								Icon={item.img}
								key={index}
								active={item.link ? isActive(item.link) : undefined}
								link={item.link}
								className="hover:bg-[#161618]"
							/>
						))}
					</div>
				</div>
				<div className="mt-40 mb-8 flex flex-col items-center">
					<ReactIcon
						key="ham"
						className={`${showMenu ? "text-[#ca2c92]" : "text-[#eaeaea]"} `}
						onClick={() => setShowMenu(!showMenu)}
						Icon={TbMenu}
					/>
				</div>
			</div>

			{/* screen width > 968px */}
			<div className="lg:flex hidden z-10 bg-black flex-col items-start justify-between w-[244px] h-full fixed border-r border-[#303030] p-2">
				<div className="flex flex-col flex-1 items-start justify-center w-full">
					<Link href="/" className="w-full h-[92px] relative top-0 left-0">
						<div className="pt-[25px] pb-[16px] px-[12px] mb-[20px] h-[72px] w-full">
							<div className="w-full h-[48px] flex items-center justify-start">
								<Image
									className="cursor-pointer"
									src="/pictogram.svg"
									alt="pictogram"
									width={88}
									height={24}
								/>
							</div>
						</div>
					</Link>
					<div className="w-full h-full flex flex-col items-start justify-around">
						{desktopMenu.map((item, index) => (
							<ReactIcon
								Icon={item.img}
								large
								key={index}
								name={item.name}
								active={item.link ? isActive(item.link) : undefined}
								link={item.link}
								className="hover:bg-[#161618]"
							/>
						))}
					</div>
				</div>
				<div className="mt-40 mb-8 flex flex-col items-center w-full">
					<ReactIcon
						key="ham"
						className={`${
							showMenu ? "text-[#ca2c92]" : "text-[#eaeaea]"
						} hover:bg-[#161618]`}
						name="Menu"
						large
						onClick={() => setShowMenu(!showMenu)}
						Icon={TbMenu}
					/>
				</div>
			</div>

			{/* screen width <= 768px */}
			<div className="sm:hidden flex items-center gap-2 w-full h-[60px] bg-black border-b z-10 border-[#303030] fixed top-0 p-2">
				<div className="w-full h-[40px] flex items-center justify-between">
					<div className="ml-2 w-[80px] h-[40px] flex place-content-center">
						<Image
							src="/pictogram.svg"
							alt="pictogram"
							className="w-full h-full"
							width={80}
							height={40}
							priority
						/>
					</div>
					<div className="flex max-h-[36px] gap-2 px-2 items-center justify-center bg-[#262626] text-sm placeholder:text-[#9b9b9b] outline-none rounded-[8px] p-1">
						<ReactIcon key="search" Icon={FiSearch} />
						<input
							placeholder="Search"
							className="bg-inherit outline-none w-[224px]"
						/>
					</div>
				</div>
				<ReactIcon
					key="ham"
					Icon={TbMenu}
					className={`${showMenu ? "text-[#ca2c92]" : "text-[#eaeaea]"} `}
					onClick={() => setShowMenu(!showMenu)}
				/>
			</div>
			<div className="sm:hidden h-[48px] z-10 bg-black flex items-center bottom-0 fixed justify-evenly w-full border-t border-r border-l border-[#303030]">
				{mobileMenu.map((item, index) => (
					<ReactIcon
						Icon={item.img}
						key={index}
						active={item.link ? isActive(item.link) : undefined}
						link={item.link}
						className="hover:bg-[#202021]"
					/>
				))}
			</div>
			{showMenu && <MenuModal show={showMenu} />}
		</>
	);
}
