"use client";

import LogoLink from "@/ui/logo-link/logo-link";
import "./navbar.scss";
import { Link } from "next-view-transitions";
import ButtonUI from "../../ui/button/button";
import SideMenu from "../side-menu/side-menu";
import { useEffect, useState } from "react";
import { getViewport, MD_BREAKPOINT } from "@/utils/dimensions";
import FolderSVG from "@/svg/Folder";
import HomeSVG from "@/svg/Home";
import SuitcaseSVG from "@/svg/Suitcase";
import ToolSVG from "@/svg/Tool";
import UserSVG from "@/svg/User";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    let pathname = usePathname();
    pathname = pathname === "/" ? "" : pathname.split("/")[1];

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        console.log(pathname);
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
            {/* <TopNavbar scrollPosition={scrollPosition} pathname={pathname} /> */}
            <BottomNavbar scrollPosition={scrollPosition} pathname={pathname} />
        </>
    );
}

interface NavbarProp {
    scrollPosition: number;
    pathname: string;
}

function TopNavbar({ scrollPosition, pathname }: NavbarProp) {
    useEffect(() => {}, []);

    return (
        <div
            className={`navbar-content ${
                scrollPosition > 90 ? "slideup" : null
            }`}
        >
            <div className="navbar">
                <LogoLink />

                <div className="links-container">
                    {/* <Link href="">Home</Link> */}
                    <Link href="about-me">About me</Link>
                    {/* <Link href="/project">Projects</Link> */}
                    <Link href="">Skills</Link>
                    <Link href="">Experience</Link>
                    <ButtonUI>Contact me</ButtonUI>
                </div>
                <SideMenu maxSize={MD_BREAKPOINT} />
            </div>
        </div>
    );
}
function BottomNavbar({ scrollPosition, pathname }: NavbarProp) {
    return (
        <div className="bottom-navbar">
            <Link href="/">
                <Tooltip title="Home" placement="top">
                    <Button
                        className={`${
                            pathname === "" || pathname === "project"
                                ? "active"
                                : null
                        }
                        nav-button`}
                        color="inherit"
                    >
                        <HomeSVG width={24} height={24} viewBox="0 0 32 32" />
                    </Button>
                </Tooltip>
            </Link>

            <Link href="/about-me">
                <Tooltip title="About me" placement="top">
                    <Button
                        className={`${pathname === "about-me" ? "active" : null}
                        nav-button`}
                        color="inherit"
                    >
                        <UserSVG width={24} height={24} viewBox="0 0 24 24" />
                    </Button>
                </Tooltip>
            </Link>

            <Link href="/experience">
                <Tooltip title="Experience" placement="top">
                    <Button className="nav-button" color="inherit">
                        <SuitcaseSVG
                            width={24}
                            height={24}
                            viewBox="2 2 30 30"
                        />
                    </Button>
                </Tooltip>
            </Link>

            <Link href="/skills">
                <Tooltip title="Skills" placement="top">
                    <Button className="nav-button" color="inherit">
                        <ToolSVG width={24} height={24} viewBox="0 0 37 37" />
                    </Button>
                </Tooltip>
            </Link>
        </div>
    );
}
