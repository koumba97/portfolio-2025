"use client";

import koumImg from "@/assets/images/about-me/koum.png";
import Image from "next/image";
import "./about-me.scss";
import ButtonUI from "@/ui/button/button";
import Movinwords from "movinwords";
import "movinwords/styles";
import { useEffect, useRef, useState } from "react";
import { Locals } from "@/utils/locals";
import { useLang } from "@/context/language-context";

export default function AboutMe() {
    const { lang } = useLang();
    const titleRef = useRef<Movinwords | null>(null);
    const roles = [
        Locals.uiUxDesigner[lang],
        Locals.digitalArtist[lang],
        Locals.graphicDesigner[lang],
        Locals.frontendEngineer[lang],
    ];
    const [currentRole, setCurrentRole] = useState(roles[3]);
    const INTERVAL_TIME = 3000;
    const ROLE_JUMP = 1;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRole((prev) => {
                const nextIndex =
                    (roles.indexOf(prev) + ROLE_JUMP) % roles.length;
                return roles[nextIndex];
            });
        }, INTERVAL_TIME);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.destroy?.();
            titleRef.current = null;
        }

        titleRef.current = new Movinwords({
            el: ".test",
            sentence: currentRole,
            transition: "revealInBottom",
        });

        titleRef.current.start();

        return () => {
            titleRef.current?.destroy?.();
            titleRef.current = null;
        };
    }, [currentRole]);

    return (
        <div className="about-me-section section">
            <div id="koum-img">
                <Image src={koumImg} alt="Koum image" />
            </div>

            <div className="text-container">
                <div>
                    <h2>{Locals.aboutMeRoleIntro[lang]}</h2>
                    <h1 className="title test"></h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectet adipiscing elit.
                    Integer porttitor ligula sit amet turpis congue, at faucibus
                    tellus auctor. Fusce molestie scelerisque ligula in varius.
                    In diam dui, molestie ut gravida et, sodales eu odio.
                </p>
                <div className="buttons-container">
                    <ButtonUI>Learn more</ButtonUI>
                    <ButtonUI type="outlined">Projects</ButtonUI>
                </div>
            </div>
        </div>
    );
}
