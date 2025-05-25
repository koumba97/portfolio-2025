"use client";

import LogoLink from "@/ui/logo-link/logo-link";
import "./navbar.scss";
import Link from "next/link";
import ButtonUI from "../../ui/button/button";
import SideMenu from "../side-menu/side-menu";
import { useEffect, useState } from "react";
import { MD_BREAKPOINT } from "@/utils/dimensions";
import { log } from "console";

export default function NavBar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position);
    };

    return (
        <div className="navbar-content">
            {scrollPosition < 90 ? (
                <div className="navbar">
                    <LogoLink />

                    <div className="links-container">
                        <Link href="">Home</Link>
                        <Link href="">About me</Link>
                        <Link href="">Projects</Link>
                        <Link href="">Skills</Link>
                        <Link href="">Experience</Link>
                        <ButtonUI>Contact me</ButtonUI>
                    </div>
                    <SideMenu maxSize={MD_BREAKPOINT} />
                </div>
            ) : null}
        </div>
    );
}
