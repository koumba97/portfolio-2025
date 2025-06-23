"use client";

import "./navbar.scss";
import { Link } from "next-view-transitions";
import HomeSVG from "@/svg/Home";
import SuitcaseSVG from "@/svg/Suitcase";
import ToolSVG from "@/svg/Tool";
import UserSVG from "@/svg/User";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

export default function NavBar() {
    let pathname = usePathname();
    pathname = pathname === "/" ? "" : pathname.split("/")[1];

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
