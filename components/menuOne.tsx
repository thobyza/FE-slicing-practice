import Image from "next/image";

const menuItems = [
	{ name: "Chicken Sandwich", price: "39.000 IDR", cals: "370" },
	{ name: "Deluxe Sandwich", price: "54.000 IDR", cals: "410" },
	{ name: "Grilled Club Sandwich", price: "67.000 IDR", cals: "490" },
];

export default function menuOne() {
	return (
		<div className="grid grid-cols-3 gap-4">
			{menuItems.map((item, i) => (
				<div key={i} className="flex-col gap-2">
					<div className="flex items-center justify-center h-[10rem] bg-[#F7F2EA] rounded-xl p-5">
						<img
							src="/images/sidebar/side-home.png"
							alt="Chicken"
							className="object-cover h-full w-full"
						/>
						{/* <Image
							src="/images/sidebar/side-home.png"
							alt="Chicken"
							fill
							className="object-cover"
						/> */}
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-primary font-medium">{item.price}</span>
						<span className="text-sm font-dark-1 font-medium">{item.name}</span>
						<span className="font-neutral-2">{item.cals}</span>
					</div>
				</div>
			))}
		</div>
	);
}
