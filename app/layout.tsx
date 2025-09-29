import "@/styles/globals.css";
import { Inter } from "next/font/google";
import SidebarWrapper from "@/components/SidebarWrapper";

const inter = Inter({
	subsets: ["latin"],
	// weight: ["400", "500", "700"]
	variable: "--font-inter",
});

export const metadata = {
	title: "Chick-Fil-A",
	icons: {
    	icon: "/images/chickfil-logo.png",
  	},
}

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	const pathname = usePathname();
// 	const isCheckoutPage = pathname === "/checkout";

// 	return (
// 		<html lang="en">
// 			<body className={`${inter.className} bg-gray-100`}>
				
// 					<div className="flex max-w-7xl mx-auto">
// 					{!isCheckoutPage && <Sidebar />}

// 					{/* Main */}
// 					<main className="flex-1 p-2 md:p-4 relative">{children}</main>
// 				</div>
// 			</body>
// 		</html>
// 	);
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-100`}>
				<SidebarWrapper>{children}</SidebarWrapper>
			</body>
		</html>
	);
}
