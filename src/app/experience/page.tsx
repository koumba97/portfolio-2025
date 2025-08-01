'use client';

import './experience.scss';
import VisitCard from '@/components/visit-card/visit-card';
import { Locals } from '@/utils/locals';
import { useLang } from '@/context/language-context';
import ExperienceDetails from '@/components/experience-details/experience-details';
import { educationList } from '@/utils/education';
import { experienceList } from '@/utils/experience';
import { ResumeCard } from '@/components/resume-card/resume-card';

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
                                name={Locals[education.schoolName][lang]}
                                title={Locals[education.degreeName][lang]}
                                image={education.image.src}
                                description={education.description}
                                duration={education.duration}
                                link={education.link}
                                location={education.location}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="experience-container">
                <h3>{Locals.experience[lang]}</h3>
                <div className="list-container">
                    {experienceList.map((experience, i) => {
                        return (
                            <ExperienceDetails
                                name={experience.companyName}
                                title={Locals[experience.roleName][lang]}
                                image={experience.image.src}
                                description={experience.description}
                                duration={experience.duration}
                                link={experience.link}
                                location={experience.location}
                                remote={experience.remote}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>

            <ResumeCard />
        </div>
    );
}
