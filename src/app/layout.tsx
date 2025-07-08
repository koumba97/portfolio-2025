"use client";

import "./globals.css";
import "./styles.scss";
import { ViewTransitions } from "next-view-transitions";
import NavBar from "@/components/navbar/navbar";
import LogoLink from "@/ui/logo-link/logo-link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/social-media/SocialMedia";
import { LanguageProvider } from "@/context/language-context";
import LangButton from "@/components/lang-button/lang-button";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[1] || "home";
    const [transition, setTransition] = useState("");
    const menuItemsOrder = ["home", "about-me", "experience", "skills"];

    useEffect(() => {
        const previousPage = sessionStorage.getItem("previousPage");
        const from = previousPage || "home";
        const to = currentPage;

        if (from === "project" && to === "home") {
            setTransition("project-to-home");
        } else if (from === "home" && to === "project") {
            setTransition("project-to-home");
        } else if (menuItemsOrder.indexOf(from) < menuItemsOrder.indexOf(to)) {
            setTransition("right-to-left");
        } else if (menuItemsOrder.indexOf(from) > menuItemsOrder.indexOf(to)) {
            setTransition("left-to-right");
        }

        sessionStorage.setItem("previousPage", currentPage);
    }, [pathname]);

    return (
        <LanguageProvider>
            <ViewTransitions>
                <html
                    lang="en"
                    data-page={currentPage}
                    data-transition={transition}
                >
                    <body>
                        <menu className="menu-bar">
                            <p>Portfolio</p>
                            <LogoLink />
                            <LangButton />
                        </menu>
                        <NavBar />
                        <div
                            className={`page-body ${currentPage}`}
                            style={{ viewTransitionName: "page-body" }}
                            data-page={currentPage}
                        >
                            {children}
                        </div>
                        <footer>
                            <p className="credit">© 2025, Koumba Keita</p>
                            <SocialMedia />
                        </footer>
                    </body>
                </html>
            </ViewTransitions>
        </LanguageProvider>
    );
}
