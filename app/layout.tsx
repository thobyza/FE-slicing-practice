	"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
	subsets: ["latin"],
	// weight: ["400", "500", "700"]
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isCheckoutPage = pathname === "/checkout";

	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-100`}>
				<div className="flex min-h-screen max-w-7xl mx-auto">
					{!isCheckoutPage && <Sidebar />}

					{/* Main */}
					<main className="flex-1 p-4 relative">{children}</main>
				</div>
			</body>
		</html>
	);
}
