import "@/styles/globals.css";
import { Inter } from "next/font/google";
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
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-100`}>
				<div className="flex min-h-screen max-w-7xl mx-auto">
					<Sidebar />

					{/* Main */}
					<main className="flex-1 p-6 relative">{children}</main>
				</div>
			</body>
		</html>
	);
}
