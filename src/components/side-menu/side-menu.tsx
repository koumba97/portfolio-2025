"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./side-menu.scss";
import { useEffect, useState } from "react";

interface Prop {
    // defines the max screen where the sidemenu should be visible
    maxSize?: number;
}

export default function SideMenu({ maxSize }: Prop) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (maxSize && window.innerWidth > maxSize) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function toggleSideMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="side-menu">
            {!isOpen ? (
                <FontAwesomeIcon
                    icon={faBars}
                    height={30}
                    className="menu-icon"
                    onClick={() => setIsOpen(true)}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faXmark}
                    height={30}
                    className="menu-icon"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <menu className={`menu ${isOpen ? "open" : "closed"}`}>
                menu content here
            </menu>
            {isOpen ? (
                <div
                    className="side-menu-bg"
                    onClick={() => setIsOpen(false)}
                ></div>
            ) : null}
        </div>
    );
}
