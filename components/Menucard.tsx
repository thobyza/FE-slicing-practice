import { cn } from "@/lib/utils";

interface MenuItem {
   name: string;
   price: string;
   cals: string;
   img: string;
   orderCount?: number;
   isBestSeller?: boolean;
   isBetterValue?: boolean;
   isHot?: boolean;
   isAvail?: string;
}

interface MenucardProps {
   menuItems: MenuItem[];
}

export default function Menucard({ menuItems }: MenucardProps) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {menuItems.map((item: MenuItem, i: number) => (
            <div key={i} className="flex-col gap-2">
               <div className={cn(
                     "flex items-center justify-center h-[10rem] rounded-xl p-3 relative",
                     item.isAvail === "N" ? "bg-[#F5F5F5]" : "bg-[#F7F2EA]"
                  )}>
                  <img
                     src={item.img}
                     alt="Chicken"
                     className="object-cover h-full w-full"
                  />
                  {/* Ribbon */}
                  {item.isBetterValue && (
                     <div className="absolute top-2.5 -left-2 bg-green-600  px-2.5 py-1 rounded-t-lg rounded-br-lg text-white text-xs font-medium">
                        Better value
                        <div className="absolute left-0 -bottom-[9px] 
                              w-0 h-0 
                              border-t-[0px] border-t-transparent 
                              border-b-[9px] border-b-transparent 
                              border-r-[9px] border-r-green-700">
                        </div>
                     </div>
                  )}
                  {item.isBestSeller && (
                     <div className="absolute top-2.5 -left-2 bg-orange-400  px-2.5 py-1 rounded-t-lg rounded-br-lg text-white text-xs font-medium">
                        Best seller
                        <div className="absolute left-0 -bottom-[9px] 
                              w-0 h-0 
                              border-t-[0px] border-t-transparent 
                              border-b-[9px] border-b-transparent 
                              border-r-[9px] border-r-orange-500">
                        </div>
                     </div>
                  )}
                  {item.isHot && (
                     <div className="absolute top-2.5 -left-2 bg-red-600  px-2.5 py-1 rounded-t-lg rounded-br-lg text-white text-xs font-medium">
                        🔥 Hot
                        <div className="absolute left-0 -bottom-[9px] 
                              w-0 h-0 
                              border-t-[0px] border-t-transparent 
                              border-b-[9px] border-b-transparent 
                              border-r-[9px] border-r-red-700">
                        </div>
                     </div>
                  )}
                  
                  {/* Order count */}
                  {(item.orderCount ?? 0) > 0 && (
                     <div className="absolute top-2 right-2 rounded-full bg-[#F05D26] text-white text-xs font-semibold w-6 h-6 flex items-center justify-center leading-[1]">
                        {item.orderCount}
                     </div>
                  )}

               </div>
               <div className="flex flex-col gap-1 mt-3">
                  <span className="text-[0.9rem] font-primary font-medium leading-4">{item.price}</span>
                  <span className="text-sm font-dark-1 font-medium leading-5">{item.name}</span>
                  <span className="text-xs font-neutral-2">{item.cals} Cal</span>
               </div>
            </div>
         ))}
      </div>
   )
}