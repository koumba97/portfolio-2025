"use client";

import LogoLink from "@/ui/logo-link/logo-link";
import "./navbar.scss";
import Link from "next/link";
import ButtonUI from "../../ui/button/button";
import SideMenu from "../side-menu/side-menu";
import { useEffect, useState } from "react";
import { MD_BREAKPOINT } from "@/utils/dimensions";
import FolderSVG from "@/svg/Folder";
import HomeSVG from "@/svg/Home";
import SuitcaseSVG from "@/svg/Suitcase";
import ToolSVG from "@/svg/Tool";
import UserSVG from "@/svg/User";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

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
    };

    return (
        <>
            <TopNavbar scrollPosition={scrollPosition} />
            <BottomNavbar scrollPosition={scrollPosition} />
        </>
    );
}

interface NavbarProp {
    scrollPosition: number;
}

function TopNavbar({ scrollPosition }: NavbarProp) {
    return (
        <div
            className={`navbar-content ${
                scrollPosition > 90 ? "slideup" : null
            }`}
        >
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
        </div>
    );
}
function BottomNavbar({ scrollPosition }: NavbarProp) {
    return (
        <div
            className={`bottom-navbar ${
                scrollPosition > 90 ? "slideup" : null
            }`}
        >
            <Tooltip title="Home" placement="top">
                <Button className="nav-button" color="inherit">
                    <HomeSVG width={24} height={24} viewBox="0 0 32 32" />
                </Button>
            </Tooltip>
            <Tooltip title="About me" placement="top">
                <Button className="nav-button" color="inherit">
                    <UserSVG width={24} height={24} viewBox="0 0 24 24" />
                </Button>
            </Tooltip>

            <Tooltip title="Experience" placement="top">
                <Button className="nav-button" color="inherit">
                    <SuitcaseSVG width={24} height={24} viewBox="2 2 30 30" />
                </Button>
            </Tooltip>

            <Tooltip title="Projects" placement="top">
                <Button className="nav-button" color="inherit">
                    <FolderSVG width={22} height={22} viewBox="0 0 20 18" />
                </Button>
            </Tooltip>
            <Tooltip title="Skills" placement="top">
                <Button className="nav-button" color="inherit">
                    <ToolSVG width={24} height={24} viewBox="0 0 37 37" />
                </Button>
            </Tooltip>
        </div>
    );
}
