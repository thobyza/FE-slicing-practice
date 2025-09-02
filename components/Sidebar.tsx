"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
	{ label: "Home", href: "/", icon: "/images/sidebar/side-home.png" },
	{
		label: "Deals",
		href: "/menu/deals",
		icon: "/images/sidebar/side-deals.png",
	},
	{
		label: "Breakfast",
		href: "/menu/breakfast",
		icon: "/images/sidebar/side-breakfast.png",
	},
	{
		label: "Entrées",
		href: "/menu/entrees",
		icon: "/images/sidebar/side-entrees.png",
	},
	{
		label: "Salads",
		href: "/menu/salads",
		icon: "/images/sidebar/side-salads.png",
	},
	{
		label: "Sides",
		href: "/menu/sides",
		icon: "/images/sidebar/side-sides.png",
	},
	{
		label: "Kid's Meals",
		href: "/menu/kids",
		icon: "/images/sidebar/side-kids.png",
	},
	{
		label: "Treats",
		href: "/menu/treats",
		icon: "/images/sidebar/side-treats.png",
	},
	{
		label: "Beverages",
		href: "/menu/beverages",
		icon: "/images/sidebar/side-beverages.png",
	},
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="bg-white p-3 flex flex-col gap-2 rounded-2xl">
			{/* <div className="h-[1rem] relative">
				<Image
					src="/images/sidebar/chick-fil-a.png"
					alt="Chick Fil A Logo"
					fill
					style={{ objectFit: "cover" }}
				></Image>
			</div> */}
			<div className="flex justify-center mb-3">
				<img
					src="/images/sidebar/chick-fil-a.png"
					className="object-cover w-[6rem]"
				></img>
			</div>
			{menuItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"flex items-center py-3.5 rounded-xl border-1 transition",
						pathname === item.href
							? "text-[#F05D26] border-[#FEF0EA] bg-[#FEF0EA]"
							: "border-[#E6E6E6] font-neutral-1 hover:bg-gray-100"
					)}
				>
					<div className="flex items-center gap-3 pr-4">
						<div
							className={cn(
								"h-[20px] w-[3px] rounded-xl",
								pathname === item.href ? "bg-[#F05D26]" : "bg-none"
							)}
						></div>
						<Image
							src={item.icon}
							width={32}
							height={32}
							alt={item.label}
						></Image>
						<span className="text-sm">{item.label}</span>
					</div>
				</Link>
			))}
		</aside>
	);
}
