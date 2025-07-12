"use client";

import koumImg from "@/assets/images/about-me/koum2.png";
import rollerSkate from "@/assets/images/about-me/interests/roller-skates.png";
import museum from "@/assets/images/about-me/interests/museum.png";
import paint from "@/assets/images/about-me/interests/design.png";
import baking from "@/assets/images/about-me/interests/cupcake.png";
import Image from "next/image";
import "./about-me.scss";
import ButtonUI from "@/ui/button/button";
import Movinwords from "movinwords";
import "movinwords/styles";
import { useEffect, useRef, useState } from "react";
import { Locals } from "@/utils/locals";
import { useLang } from "@/context/language-context";
import { Link } from "next-view-transitions";
import { Chip, Tooltip } from "@mui/material";
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
    type softSkills = {
        name: string;
        type: "cognitive" | "organizational" | "interpersonal" | "personal";
    };
    const softSkills: softSkills[] = [
        { name: Locals.creative[lang], type: "cognitive" },
        { name: Locals.stressManagement[lang], type: "personal" },
        { name: Locals.fastLeaner[lang], type: "cognitive" },
        { name: Locals.autonomy[lang], type: "organizational" },
        { name: Locals.positiveAttitude[lang], type: "interpersonal" },
        { name: Locals.multitasking[lang], type: "organizational" },
        { name: Locals.problemSolving[lang], type: "cognitive" },
        { name: Locals.prioritizeIssues[lang], type: "organizational" },
        { name: Locals.criticalThinking[lang], type: "cognitive" },
        { name: Locals.attentionToDetail[lang], type: "cognitive" },
        { name: Locals.teamSpirit[lang], type: "interpersonal" },
        { name: Locals.adaptability[lang], type: "personal" },
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

            <div className="interests">
                <h3>{Locals.interests[lang]}</h3>
                <Tooltip title={Locals.rollerskate[lang]} placement="top">
                    <div className="interest">
                        <Image src={rollerSkate} alt="rollerskate" />
                    </div>
                </Tooltip>
                <Tooltip title={Locals.museum[lang]} placement="top">
                    <div className="interest">
                        <Image src={museum} alt="Museum" />
                    </div>
                </Tooltip>
                <Tooltip title={Locals.designDrawing[lang]} placement="top">
                    <div className="interest">
                        <Image src={paint} alt="Design" />
                    </div>
                </Tooltip>
                <Tooltip title={Locals.baking[lang]} placement="top">
                    <div className="interest">
                        <Image src={baking} alt="Cupcake" />
                    </div>
                </Tooltip>
            </div>
            <div className="soft-skills">
                <h3>{Locals.softSkills[lang]}</h3>
                <div className="list-container">
                    {softSkills.map((skill) => {
                        return (
                            <Chip
                                className={`chip ${skill.type}`}
                                size="small"
                                label={skill.name}
                                key={skill.name}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="get-in-touch">
                <h3>{Locals.getInTouch[lang]}</h3>
                <Link
                    href="mailto:koumbakeita47@gmail.com"
                    id="email-contact-container"
                    className="contact-container"
                >
                    <MailSVG width={40} height={40} viewBox="0 0 65 65" />
                    <p>koumbakeita47@gmail.com</p>
                </Link>
                <Link
                    href=""
                    id="linkedin-contact-container"
                    className="contact-container"
                >
                    <LinkedinSVG width={40} height={40} viewBox="0 0 50 50" />
                    <p>Koumba Keita</p>
                </Link>
            </div>
        </div>
    );
}
