"use client";

import "./visit-card.scss";
import Image from "next/image";
import koumImg from "@/assets/images/about-me/koum2.png";
import LinkedinSVG from "@/svg/Linkedin";
import MailSVG from "@/svg/Mail";
import Link from "next/link";
import { Chip } from "@mui/material";
import LocationSVG from "@/svg/Location";

export default function VisitCard() {
    return (
        <div className="visit-card">
            <Image src={koumImg} alt="Koum image" />
            <div className="info-card">
                <h3>Koumba Keita</h3>

                <Link href="">
                    <LinkedinSVG
                        width={20}
                        height={20}
                        viewBox="0 2 30 30"
                        filled
                    />
                    Koumba Keita
                </Link>
                <Link href="">
                    <MailSVG
                        width={20}
                        height={20}
                        viewBox="0 -8 70 70"
                        filled
                    />
                    koumbakeita47@gmail.com
                </Link>

                <div className="location-container">
                    <Chip
                        className="chip"
                        size="small"
                        label="Paris, France"
                        icon={
                            <LocationSVG
                                width={20}
                                height={20}
                                viewBox="-10 -2 30 30"
                                filled
                            />
                        }
                    />
                    <Chip
                        className="chip"
                        size="small"
                        label="Toronto, Canada"
                        icon={
                            <LocationSVG
                                width={20}
                                height={20}
                                viewBox="-10 -2 30 30"
                                filled
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
}
