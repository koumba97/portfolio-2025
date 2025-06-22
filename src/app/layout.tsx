"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { ViewTransitions } from "next-view-transitions";
import NavBar from "@/components/navbar/navbar";
import LogoLink from "@/ui/logo-link/logo-link";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname =
        usePathname().split("/")[usePathname().split("/").length - 1];

    return (
        <ViewTransitions>
            <html lang="en">
                <body>
                    <LogoLink />
                    <NavBar />
                    <div
                        className={`page-body ${pathname ? pathname : "home"}`}
                        style={{ viewTransitionName: "page-body" }}
                    >
                        {children}
                    </div>
                </body>
            </html>
        </ViewTransitions>
    );
}
