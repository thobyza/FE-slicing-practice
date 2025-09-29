import { checkoutItems } from "@/lib/checkoutItems"
import Link from "next/link";

export default function CheckoutPage() {
   return (
      <div className="flex flex-col relative">
         {/* Header */}
         <img 
            src="/images/sidebar/chick-fil-a.png" 
            className="object-cover w-[6rem] mx-auto">
         </img>
         <div className="flex items-center justify-center gap-4 mt-3 md:mt-4 pb-3 md:pb-4 border-b-1 border-[#E6E6E6]">
            <button className="btn-primary text-[0.8rem]">5 items</button>
            <h1 className="font-dark-1 text-xl md:text-3xl font-semibold">Your Order</h1>
         </div>

         {/* Items */}
         <div className="flex flex-col gap-3.5 mt-4 mb-[15rem]">
            {checkoutItems.map((item, i) => (
               <div key={i} className="flex flex-col gap-2.5 rounded-xl p-3 bg-white w-full relative border border-[#E6E6E6]">
                  <div className="flex items-center gap-4">
                     <img src={item.img} alt="checkout foods" className="h-16 w-18 md:w-20 rounded-lg object-cover" />    
                     <div className="space-y-1">
                        <h4 className="font-dark-1 line-clamp-1 truncate font-medium">{item.label}</h4>
                        <span className="font-neutral-2 line-clamp-1 truncate text-xs font-normal">{item.desc}</span>
                     </div>
                  </div>
                  <div className=   "flex justify-between items-center gap-2 md:gap-3 truncate ">
                     <div className=" p-0 rounded-full bg-[#EA9630] text-white flex justify-center items-center text-lg font-normal w-6 h-6">+</div>
                     <span className="font-medium text-sm font-dark-1">{item.count}</span>
                     <div className=" p-0 rounded-full bg-[#FCEFDC] text-[#EA9630] flex justify-center items-center text-lg font-medium w-6 h-6">-</div>
                     <div className="flex gap-0.5 md:gap-1 ml-1">
                        <div className="flex items-center gap-1 py-2 px-3 bg-[#F5F5F5] rounded-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 hidden md:block" >
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              <path d="m15 5 4 4" />
                           </svg>
                           <span className="font-dark-1 font-medium text-xs">Customize</span>
                        </div>
                        <div className="flex items-center gap-1 py-2 px-3 bg-[#F5F5F5] rounded-lg ml-1">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 hidden md:block">
                              <path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                              <path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                           </svg>
                           <span className="font-dark-1 font-medium text-xs">Remove</span>
                        </div>
                     </div>

                     <span className="ml-auto font-medium text-sm md:text-base font-neutral-1">{item.total} IDR</span>
                  </div>

               </div>
            ))}
         </div>
         
         {/* Cart */}
         <div className="fixed bottom-0 left-0 right-0 w-full">
            <div className="px-4 py-3 md:py-4 md:px-6  flex flex-col gap-1 items-end bg-[#F5F5F5]">
               <div className="flex gap-5">
                  <span className="font-neutral-1 text-sm">Subtotal</span>
                  <span className="font-dark-1 text-sm font-semibold">387.000 IDR</span>
               </div>
               <div className="flex gap-5">
                  <span className="font-neutral-1 text-sm">PB1</span>
                  <span className="font-dark-1 text-sm font-semibold">20.000 IDR</span>
               </div>
            </div>
            <div className="px-4 py-3 md:py-4 md:px-6 flex justify-between bg-[#F5F5F5] border-t border-[#E6E6E6]">
               <span className="font-dark-1 text-base font-semibold">Total payment</span>
               <span className="font-primary text-lg font-semibold">363.000 IDR</span>
            </div>

            <div className="bg-white px-2 py-3 md:p-4 flex justify-between items-center">
               <div className="flex gap-1.5 md:gap-2">
                  <Link href="/" className="btn-secondary text-base">Start over</Link>
                  <Link href="/" className="btn-tertiary text-base">Back</Link>
               </div>
               <div className="flex items-center gap-1.5 md:gap-2.5">
                  <button className="btn-default text-base">Promo code</button>
                  <button className="hidden md:block btn-primary text-base">Proceed to payment</button>
                  <button className="md:hidden btn-primary text-base">Payment</button>
               </div>
            </div>
         </div>
      </div>
   );
}