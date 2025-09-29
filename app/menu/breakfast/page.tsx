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
            <h1 className="text-xl md:text-3xl font-bold max-w-[18rem] font-dark-1">
               Breakfast
            </h1>
            <span className="hidden md:block mt-2 text-sm lg:text-md font-neutral-2">Breakfast is served until 12.00, get your favorites before they&apos;re gone!</span>
            <span className="md:hidden mt-2 lg:mt-6 text-sm lg:text-md font-neutral-2">Breakfast is served until 12.00</span>
         </div>

         {/* Banner */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="hidden md:block col-span-1 h-[9.5rem] lg:h-[12rem] mt-2.5 md:mt-5 rounded-xl relative">
               <img
                  src="/images/home-banner-6.png"
                  alt="burger background"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
               ></img>
               <div className="absolute inset-0 w-full h-full z-20 rounded-xl bg-gradient-to-r from-[rgba(1,49,22,1)] to-transparent"></div>
               <div className="relative h-full flex flex-col items-start justify-end p-3 z-30 text-white">
                  <span className="text-xs lg:text-md font-light">Customer&apos;s favorite</span>
                  <h4 className="text-lg lg:text-2xl font-semibold max-w-[10rem] lg:max-w-max leading-6 mt-1 lg:mt-2 mb-1">
                     The Original Grilled Chicken
                  </h4>

                  <button className="button-banner mt-2.5">Order now</button>
               </div>
            </div>
            <div className=" col-span-1 h-[9.5rem] lg:h-[12rem] mt-2.5 md:mt-5 rounded-xl relative">
               <img
                  src="/images/home-banner-4.webp"
                  alt="burger background"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
               ></img>
               <div className="absolute inset-0 w-full h-full z-20 rounded-xl bg-gradient-to-r from-[rgba(126,111,0,1)] to-transparent"></div>
               <div className="relative h-full flex flex-col items-start justify-end p-3 z-30 text-white">
                  <span className="text-xs lg:text-md font-light">Vegan burger</span>
                  <h4 className="text-lg lg:text-2xl font-semibold max-w-[10rem] lg:max-w-max leading-6 mt-1 lg:mt-2 mb-1">
                     Tastes Like a Real Chicken Burger
                  </h4>
                  <button className="button-banner mt-2.5">Order now</button>
               </div>
            </div>
         </div>
         
         

         {/* Filter */}
         <div className="py-3 mt-0.5 md:mb-1 md:mt-1 w-full overflow-x-auto scrollbar-hidden max-w-[70vw] md:max-w-[30rem] lg:max-w-fit">
            <div className="flex gap-2">
               {filterItems.map((item, i) => (
                  <div 
                     key={i} 
                     className={cn(
                        "flex items-center shrink-0 gap-1 px-4 py-2 rounded-[0.6rem] cursor-pointer",
                        item.isSelected
                           ? "bg-[#F05D26] text-white"
                           : item.isPromo
                              ? "bg-[#FEF0EA] pl-3"
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
         <div className="pb-[20rem]"></div>

         {/* Cart */}
         <Cartbar orderCount={9} subTotal="387.000"/>
      </section>
   )
}