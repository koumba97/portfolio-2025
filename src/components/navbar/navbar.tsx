"use client";

import "./navbar.scss";
import { Link } from "next-view-transitions";
import SuitcaseSVG from "@/svg/Suitcase";
import ToolSVG from "@/svg/Tool";
import UserSVG from "@/svg/User";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import GridSVG from "@/svg/Grid";

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
                        style={{
                            pointerEvents:
                                pathname === "project"
                                    ? "initial"
                                    : pathname === ""
                                    ? "none"
                                    : undefined,
                        }}
                        color="inherit"
                    >
                        <GridSVG
                            width={40}
                            height={40}
                            viewBox="-5 40 90 90"
                            filled={pathname === "" || pathname === "project"}
                        />
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
                        <UserSVG
                            width={24}
                            height={24}
                            viewBox="2 2 20 20"
                            filled={pathname === "about-me"}
                        />
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
