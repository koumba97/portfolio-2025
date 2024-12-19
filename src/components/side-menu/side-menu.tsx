"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./side-menu.scss";
import { useState } from "react";

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function toggleSideMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="side-menu">
            <FontAwesomeIcon
                icon={faBars}
                height={40}
                className="menu-icon"
                onClick={toggleSideMenu}
            />
            {isOpen ? "open" : "closed"}
        </div>
    );
}
