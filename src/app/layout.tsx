"use client";

import "./globals.css";
import "./styles.scss";
import { ViewTransitions } from "next-view-transitions";
import NavBar from "@/components/navbar/navbar";
import LogoLink from "@/ui/logo-link/logo-link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[1] || "home";
    const [transition, setTransition] = useState("");

    useEffect(() => {
        const previousPage = sessionStorage.getItem("previousPage");
        const from = previousPage || "home";
        const to = currentPage;

        // Exemple : project ➜ home
        if (from === "project" && to === "home") {
            setTransition("project-to-home");
        } else {
            setTransition(`${from}-to-${to}`);
        }

        // Mémoriser la page actuelle pour la prochaine navigation
        sessionStorage.setItem("previousPage", currentPage);
    }, [currentPage]);

    return (
        <ViewTransitions>
            <html
                lang="en"
                data-page={currentPage}
                data-transition={transition}
            >
                <body>
                    <LogoLink />
                    {currentPage} {transition}
                    <NavBar />
                    <div
                        className={`page-body ${currentPage}`}
                        style={{ viewTransitionName: "page-body" }}
                        data-page={currentPage}
                    >
                        {children}
                    </div>
                </body>
            </html>
        </ViewTransitions>
    );
}
