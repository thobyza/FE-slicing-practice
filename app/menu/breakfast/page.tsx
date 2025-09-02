import { cn } from "@/lib/utils";
import Menucard from "@/components/Menucard";
import Cartbar from "@/components/Cartbar";

const menuCardItems = [
   { name: "Chicken Sandwich", price: "39.000 IDR", cals: "370", img: "/images/menu/menu-chicken.png", isBestSeller: true },
   { name: "Deluxe Sandwich", price: "54.000 IDR", cals: "410", img: "/images/menu/menu-deluxe.png", isBetterValue: true },
   { name: "Grilled Chicken Club Sandwich", price: "67.000 IDR", cals: "490", img: "/images/menu/menu-grilled.png", orderCount: 2 },
   { name: "Nuggets", price: "37.000 IDR", cals: "250", img: "/images/menu/menu-nuggets.png", orderCount: 1 },
   { name: "Grilled Nuggets", price: "45.000 IDR", cals: "130", img: "/images/menu/menu-grilledNug.png" },
   { name: "Spicy Chicken Sandwich", price: "62.500 IDR", cals: "490", img: "/images/menu/menu-spicy.png" },
   { name: "Salad Wrap", price: "35.000 IDR", cals: "250", img: "/images/menu/menu-wrap.png" },
   { name: "Chicken Tender", price: "27.000 IDR", cals: "220", img: "/images/menu/menu-tender.png", isAvail: "N" },
];

const filterItems = [
   { label: "All" },
   { label: "Promo", isPromo: true },
   { label: "Beef", isSelected: true },
   { label: "Chicken" },
   { label: "Vegan" },
   { label: "Beverage" },
   { label: "New" },
   { label: "Dessert" },
   { label: "Drinks" },
]

export default function BreakfastPage() {
   return (
      <section className="flex flex-col w-full">
         {/* Title */}
         <div>
            <h1 className="text-4xl font-bold max-w-[18rem] font-dark-1">
               Breakfast
            </h1>
            <span className="mt-2 text-sm font-neutral-2">Breakfast is served until 12.00, get your favorites before they’re gone!</span>
         </div>

         {/* Banner */}
         <div className="h-[9.5rem] mt-5 rounded-xl relative">
            <img
               src="/images/home-banner-3.png"
               alt="burger background"
               className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
            ></img>
            <div className="absolute inset-0 w-full h-full z-20 rounded-xl bg-linear-to-r from-[#013116] from-15% to-transparent to-50%"></div>
            <div className="relative h-full flex flex-col items-start justify-end p-3 z-30 text-white">
               <span className="text-xs font-light">Vegan burger</span>
               <h4 className="text-lg font-semibold max-w-[10rem] leading-6 mt-1 mb-1">
                  Taste like real chicken burger
               </h4>
               <button className="button-banner mt-2.5">Order now</button>
            </div>
         </div>

         {/* Filter */}
         <div className="py-3 mt-3 w-full overflow-x-auto scrollbar-hidden max-w-[30rem]">
            <div className="flex gap-2">
               {filterItems.map((item, i) => (
                  <div 
                     key={i} 
                     className={cn(
                        "flex items-center shrink-0 gap-1 pl-3.5 pr-7 py-2 rounded-[0.6rem]",
                        item.isSelected
                           ? "bg-[#F05D26] text-white"
                           : item.isPromo
                              ? "bg-[#FEF0EA] pl-2.5"
                              : "bg-[#F5F5F5]"
                     )}
                  >
                     {item.isPromo && (
                        <span className="text-sm">🔥</span>
                     )}
                     <span className="text-sm font-medium">
                        {item.label}
                     </span>
                  </div>
               ))}
            </div>
         </div>

         {/* Menu */}
         <Menucard menuItems={menuCardItems}/>
         <div className="mb-[15rem]"></div>

         {/* Cart */}
         <Cartbar orderCount={9} subTotal="387.000"/>
      </section>
   )
}