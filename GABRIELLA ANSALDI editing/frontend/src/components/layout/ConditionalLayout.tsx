"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>
            {!isHome && <Footer />}
        </>
    );
}
