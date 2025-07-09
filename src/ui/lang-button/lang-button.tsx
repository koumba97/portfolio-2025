"use client";

import "./lang-button.scss";
import { useEffect, useState } from "react";
import { useLang } from "@/context/language-context";
import EarthSVG from "@/svg/Earth";
import ButtonUI from "@/ui/button/button";
import { Locals } from "@/utils/locals";
import Image from "next/image";
import englishLang from "@/assets/images/lang/english.png";
import frenchLang from "@/assets/images/lang/french.png";

export default function LangButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSlidingOut, setIsSlidingOut] = useState<boolean>(false);
    const { lang, setLang } = useLang();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleButton = () => {
        if (isOpen) {
            setIsSlidingOut(true);
            setTimeout(() => {
                setIsSlidingOut(false);
                setIsOpen(!isOpen);
            }, 500);
        } else {
            setIsOpen(!isOpen);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const langList = document.getElementsByClassName("lang-list")[0];
        if (
            !target.closest(".lang-list") &&
            !target.closest(".button") &&
            langList
        ) {
            setIsSlidingOut(true);
            setTimeout(() => {
                setIsSlidingOut(false);
                setIsOpen(false);
            }, 500);
        }
    };

    return (
        <div className="lang-button">
            <ButtonUI className="button" onClick={toggleButton} type="outlined">
                <EarthSVG width={20} height={20} viewBox="0 0 20 20" />
                {lang === "en" ? "EN" : "FR"}
            </ButtonUI>
            {isOpen ? (
                <ul
                    className={`lang-list ${isSlidingOut ? "slide-out" : null}`}
                >
                    <li onClick={() => setLang("en")}>
                        {" "}
                        <Image src={englishLang} height={20} alt="uk flag" />
                        {Locals.en[lang]}
                    </li>
                    <li onClick={() => setLang("fr")}>
                        {" "}
                        <Image src={frenchLang} height={20} alt="france flag" />
                        {Locals.fr[lang]}
                    </li>
                </ul>
            ) : null}
        </div>
    );
}
