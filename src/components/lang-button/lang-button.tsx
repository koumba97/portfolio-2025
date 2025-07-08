"use client";

import "./lang-button.scss";
import { useState } from "react";
import { useLang } from "@/context/language-context";
import EarthSVG from "@/svg/Earth";
import ButtonUI from "@/ui/button/button";
import { Locals } from "@/utils/locals";

export default function LangButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { lang } = useLang();
    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lang-button">
            <ButtonUI className="button" onClick={toggleButton} type="outlined">
                <EarthSVG width={20} height={20} viewBox="0 0 20 20" />
                {lang === "en" ? "EN" : "FR"}{" "}
            </ButtonUI>
            {isOpen ? (
                <ul className="lang-list">
                    <li>{Locals.en[lang]}</li>
                    <li>{Locals.fr[lang]}</li>
                </ul>
            ) : null}
        </div>
    );
}
