"use client";

import "./projects.scss";
import cookishMaster from "@/assets/images/cookish-master.png";
import illustration from "@/assets/images/illustration.png";
import modeling from "@/assets/images/3d.png";
import Image, { StaticImageData } from "next/image";
import { ProjectsList } from "@/utils/projects";
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
        console.log(ProjectsList[0].coverImage.back);
    }, []);
    return (
        <div className="projects-section section">
            <div className="grid">
                {ProjectsList.map((project) => {
                    return (
                        <ProjectBloc
                            frontImg={
                                project.coverImage.front
                                    ? project.coverImage.front
                                    : undefined
                            }
                            backImg={
                                project.coverImage.back
                                    ? project.coverImage.back.src
                                    : undefined
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

interface ProjectBlocInterface {
    backImg?: string | StaticImageData;
    frontImg?: StaticImageData;
}

function ProjectBloc({ backImg, frontImg }: ProjectBlocInterface) {
    return (
        <div
            className="project-bloc"
            style={{
                backgroundImage: `url("${backImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {frontImg ? (
                <Image
                    src={frontImg}
                    alt=""
                    height={300}
                    className="front-image"
                />
            ) : null}
        </div>
    );
}
