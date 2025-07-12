"use client";

import "./experience.scss";
import VisitCard from "@/components/visit-card/visit-card";
import { Locals } from "@/utils/locals";
import { useLang } from "@/context/language-context";
import ExperienceDetails from "@/components/experience-details/experience-details";
import { describe } from "node:test";
import { educationList } from "@/utils/education";

export default function Experience() {
    const { lang } = useLang();

    return (
        <div className="experience-section section">
            <VisitCard />
            <div className="education-container">
                <h3>{Locals.education[lang]}</h3>
                <div className="list-container">
                    {educationList.map((education, i) => {
                        return (
                            <ExperienceDetails
                                name={education.schoolName}
                                title={education.degreeName}
                                image={education.image.src}
                                description={education.description}
                                duration={education.duration}
                                link={education.link}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="experience-container">
                <h3>{Locals.experience[lang]}</h3>
                <div className="list-container">
                    {[...Array(3)].map((_, i) => {
                        return <ExperienceDetails key={i} />;
                    })}
                </div>
            </div>

            <div className="resume-container"></div>
        </div>
    );
}
