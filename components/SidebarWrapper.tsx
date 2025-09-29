"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCheckoutPage = pathname === "/checkout";

  return (
    <div className="flex max-w-7xl mx-auto">
      {!isCheckoutPage && <Sidebar />}
      <main className="flex-1 p-2 md:p-4 relative">{children}</main>
    </div>
  );
}
