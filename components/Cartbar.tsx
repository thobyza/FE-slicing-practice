import { checkoutItems } from "@/lib/checkoutItems"
import Link from "next/link";

interface cartItem {
	subTotal?: string;
	orderCount?: number;
}

export default function Cartbar({ subTotal = "0", orderCount = 0 }: cartItem) {
	return (
		<div className="fixed bottom-0 left-0 right-0 w-full z-50">
			{orderCount > 0 && (
				<div className="flex gap-4 bg-[#F5F5F5] p-4 overflow-y-auto scrollbar-hidden">
					{checkoutItems.map((item, i) => (
						<div key={i} className="flex flex-col gap-2.5 rounded-xl p-3 bg-white w-[17rem] relative">
							<img src={item.img} alt="checkout foods" className="h-12 w-12 rounded-lg object-cover"/>
							<div className="absolute top-2 right-2 bg-[#E6E6E6] h-6 w-6 p-1 rounded-full flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
									strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
										<path d="M18 6 6 18" /><path d="m6 6 12 12" />
								</svg>
							</div>

							<div className="space-y-1">
								<h4 className="font-dark-1 line-clamp-1 truncate font-medium">{item.label}</h4>
								<span className="font-neutral-2 line-clamp-1 truncate text-xs font-normal">{item.desc}</span>
							</div>
							<div className="flex justify-between items-center gap-3 truncate ">
								<div className=" p-0 rounded-full bg-[#EA9630] text-white flex justify-center items-center text-lg font-normal w-6 h-6">+</div>
								<span className="font-medium text-sm font-dark-1">{item.count}</span>
								<div className=" p-0 rounded-full bg-[#FCEFDC] text-[#EA9630] flex justify-center items-center text-lg font-medium w-6 h-6">-</div>
								<span className="ml-auto font-medium text-xs md:text-sm font-neutral-1">{item.total} IDR</span>
							</div>
							
						</div>
					))}
				</div>
			)}

			<div className="bg-white p-2.5 md:p-4 flex justify-between items-center border-t border-[#E6E6E6]">
				<div className="flex gap-2">
					<button className="btn-secondary">Start over</button>
					<button className="btn-tertiary">Back</button>
				</div>
				<div className="flex items-center gap-3.5 md:gap-5.5">
					<div className="flex items-center gap-1 md:gap-2">
						<div className="flex flex-col items-end gap-0">
							<span className="font-dark-1 text-[0.7rem]">Subtotal</span>
							<span className="font-primary text-sm md:text-base font-semibold">{subTotal} IDR</span>
						</div>
						<div className="relative">
							<img src="/images/cart-icon.png" alt="beverage icon" className="h-[2.4rem] object-cover"/>
							<div className="absolute -top-2 -right-2 rounded-full bg-[#F05D26] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center leading-[1] outline outline-white">
								{orderCount}
							</div>
						</div>
					</div>
					{/* <Link href="/checkout" className="btn-primary btn-pulse">Continue</Link> */}
					<Link href="/checkout" className="btn-primary btn-pulse">Continue</Link>
				</div>
			</div>
		</div>
	);
}
