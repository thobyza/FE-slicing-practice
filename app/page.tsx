import Image from "next/image";
import Cartbar from "@/components/Cartbar";
import Menucard from "@/components/Menucard";

const bannerItems = [
	{ img: "/images/home-banner-1.png", colorGrad: "#7E2200", titleSm: "", titleMd: "Matcha & Latte" },
	{ img: "/images/home-banner-2.png", colorGrad: "#5C1819", titleSm: "", titleMd: "Fresh Coffee" },
];

const filterItems = [
	{
		label: "Salad, Berry, Potato",
		img: "/images/filter-berry.png",
		txtColor: "#499435",
		bgColor: "#E9F6EC",
	},
	{
		label: "Lemonade, Ice Dream, Milkshake",
		img: "/images/filter-lemonade.png",
		txtColor: "#8F6219",
		bgColor: "#FDF3E2",
	},
	{
		label: "Dr Paper, Iced Tea",
		img: "/images/filter-drpaper.png",
		txtColor: "#A32321",
		bgColor: "#FEF0EA",
	},
	{
		label: "Lemonade, Ice Dream, Milkshake",
		img: "/images/filter-lemonade.png",
		txtColor: "#8F6219",
		bgColor: "#FDF3E2",
	},
	{
		label: "Salad, Berry, Potato",
		img: "/images/filter-berry.png",
		txtColor: "#499435",
		bgColor: "#E9F6EC",
	},
];

const menuCardItems = [
	{ name: "Chicken Sandwich", price: "39.000 IDR", cals: "370", img: "/images/menu/menu-chicken.png", isHot: true },
	{ name: "Deluxe Sandwich", price: "54.000 IDR", cals: "410", img: "/images/menu/menu-deluxe.png", isBestSeller: true },
	{ name: "Grilled Chicken Club Sandwich", price: "67.000 IDR", cals: "490", img: "/images/menu/menu-grilled.png" },
	{ name: "Burger Chicken, Extra Filling", price: "44.000 IDR", cals: "450", img: "/images/menu/menu-chicken.png", isBestSeller: false },
];

export default function Home() {
	return (
		<section className="flex flex-col w-full mb-5 md:mt-0">
			{/* Title */}
			<h1 className="text-xl lg:text-3xl font-bold max-w-[18rem] lg:max-w-max mt-0.5 lg:mt-2 font-dark-1">
				What would you like today?
			</h1>

			<section className="flex flex-col mt-1 lg:mt-3.5 w-full">
				<h3 className="mb-3 text-sm lg:text-lg font-dark-1 font-normal">
					Todays specials
				</h3>

				{/* Top Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
					{bannerItems.map((item, index) => (
						<div
							key={index}
							className="col-span-1 h-[10rem] md:h-[14rem] rounded-xl relative"
						>
							<img
								src={item.img}
								alt="coffee background"
								className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
							></img>
							<div
								className="absolute inset-0 w-full h-full z-20 rounded-xl"
								style={{
									background: `linear-gradient(to top, ${item.colorGrad} 10%, transparent 50%)`,
								}}
							></div>
							<div className="relative h-full flex flex-col items-start justify-end p-2 md:p-3 z-30 text-white">
								<span className=" text-xs font-light">
									Cozy up with autumn specials
								</span>
								<h4 className="lg:text-xl font-semibold leading-5 md:leading-6 mt-0.5 lg:mt-1.5 mb-1">
									{item.titleMd}
								</h4>
								<button className="button-banner mt-2.5 w-full md:w-max">Order now</button>
							</div>
						</div>
					))}

					<div className="hidden md:block col-span-2 lg:col-span-1 h-[10rem] md:h-[14rem] rounded-xl relative">
						<img
							src="/images/home-banner-3.png"
							alt="burger background"
							className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
						></img>
						<div className="absolute inset-0 w-full h-full z-20 rounded-xl bg-linear-to-r lg:bg-linear-to-t from-[#013116] from-15% lg:from-10% to-transparent to-50%"></div>
						{/* style={{
									background: `linear-gradient(to top, ${item.colorGrad} 10%, transparent 50%)`,
								}} */}
						<div className="relative h-full flex flex-col items-start justify-end p-3 z-30 text-white">
							<span className="text-xs font-light">Vegan burger</span>
							<h4 className="text-lg font-semibold max-w-[10rem] lg:max-w-max leading-6 mt-1 mb-1">
								Taste like real chicken burger
							</h4>
							<button className="button-banner mt-2.5">Order now</button>
						</div>
					</div>

					<div></div>
				</div>

				{/* Filter */}
				<div className="flex gap-3 overflow-x-auto max-w-[70vw]">
					{filterItems.map((item, index) => (
						<div
							key={index}
							className="rounded-xl flex shrink-0 gap-2 items-center px-3 py-2"
							style={{
								backgroundColor: item.bgColor,
								color: item.txtColor,
							}}
						>
							<Image
								src={item.img}
								alt={item.label}
								width={32}
								height={32}
							></Image>
							<span className="text-sm font-semibold line-clamp-1 md:line-clamp-2 px-1">
								{item.label}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Recommendation */}
			<section className="mt-3 md:mt-5 mb-[4.5rem]">
				<h2 className="mb-3 text-sm lg:text-lg font-dark-1 font-normal">
					Recommendation
				</h2>
				<Menucard menuItems={menuCardItems}/>
			</section>

			{/* Cart bar */}
			<Cartbar subTotal="0"/>
		</section>
	);
}
