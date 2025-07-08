"use client";

import "./lang-button.scss";
import { useEffect, useState, RefObject } from "react";
import { useLang } from "@/context/language-context";
import EarthSVG from "@/svg/Earth";
import ButtonUI from "@/ui/button/button";
import { Locals } from "@/utils/locals";
import Image from "next/image";
import englishLang from "@/assets/images/lang/english.png";
import frenchLang from "@/assets/images/lang/french.png";

export default function LangButton(
    ref: RefObject<HTMLElement>,
    onClickOutside: () => void
) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isSlidingOut, setIsSlidingOut] = useState<boolean>(false);
    const { lang } = useLang();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement;

            // Vérifie si le clic est *en dehors* d’un élément avec la classe `.lang-button`
            if (!target.closest(".lang-list") && !target.closest(".button")) {
                toggleButton();
            }
        }

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
                    <li>
                        {" "}
                        <Image src={englishLang} height={20} alt="uk flag" />
                        {Locals.en[lang]}
                    </li>
                    <li>
                        {" "}
                        <Image src={frenchLang} height={20} alt="france flag" />
                        {Locals.fr[lang]}
                    </li>
                </ul>
            ) : null}
        </div>
    );
}
