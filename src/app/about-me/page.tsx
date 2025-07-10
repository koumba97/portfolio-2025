"use client";

import koumImg from "@/assets/images/about-me/koum2.png";
import Image from "next/image";
import "./about-me.scss";
import ButtonUI from "@/ui/button/button";
import Movinwords from "movinwords";
import "movinwords/styles";
import { useEffect, useRef, useState } from "react";
import { Locals } from "@/utils/locals";
import { useLang } from "@/context/language-context";
import { Link } from "next-view-transitions";
import { Chip } from "@mui/material";
import LinkedinSVG from "@/svg/Linkedin";
import MailSVG from "@/svg/Mail";

export default function AboutMe() {
    const { lang } = useLang();
    const titleRef = useRef<Movinwords | null>(null);
    const roles = [
        Locals.uiUxDesigner[lang],
        Locals.digitalArtist[lang],
        Locals.graphicDesigner[lang],
        Locals.frontendEngineer[lang],
    ];

    const softSkills = [
        Locals.creative[lang],
        Locals.fastLeaner[lang],
        Locals.stressManagement[lang],
        Locals.autonomy[lang],
        Locals.multitasking[lang],
        Locals.criticalThinking[lang],
        Locals.problemSolving[lang],
        Locals.prioritizeIssues[lang],
        Locals.attentionToDetail[lang],
        Locals.teamSpirit[lang],
        Locals.adaptability[lang],
        Locals.positiveAttitude[lang],
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
                </p>
                <div className="buttons-container">
                    <Link href="/experience">
                        <ButtonUI>{Locals.learnMore[lang]}</ButtonUI>
                    </Link>
                    <Link href="/">
                        <ButtonUI type="outlined">
                            {Locals.projects[lang]}
                        </ButtonUI>
                    </Link>
                </div>
            </div>
            <div className="get-in-touch">
                <h3>{Locals.getInTouch[lang]}</h3>
                <div id="email-contact-container" className="contact-container">
                    <MailSVG width={50} height={50} viewBox="0 0 70 70" />
                </div>
                <div
                    id="linkedin-contact-container"
                    className="contact-container"
                >
                    <LinkedinSVG width={50} height={50} viewBox="0 0 70 70" />
                </div>
            </div>
            <div className="interests">
                <h3>{Locals.interests[lang]}</h3>
                <div className="interest"></div>
                <div className="interest"></div>
                <div className="interest"></div>
                <div className="interest"></div>
            </div>
            <div className="soft-skills">
                <h3>{Locals.softSkills[lang]}</h3>
                <div className="list-container">
                    {softSkills.map((skill) => {
                        return (
                            <Chip
                                className="chip"
                                size="small"
                                label={skill}
                                key={skill}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
