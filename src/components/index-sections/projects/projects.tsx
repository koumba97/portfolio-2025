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
                            frontHeight={project.coverImage.frontHeight}
                            top={project.coverImage.top}
                            left={project.coverImage.left}
                            key={project.id}
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
    frontHeight?: number;
    top?: `${number}%`;
    left?: `${number}%`;
}

function ProjectBloc({
    backImg,
    frontImg,
    frontHeight,
    top,
    left,
}: ProjectBlocInterface) {
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
                    height={frontHeight ? frontHeight : 300}
                    className="front-image"
                    style={{
                        top: top ? top : "50%",
                        left: left ? left : "50%",
                    }}
                />
            ) : null}
        </div>
    );
}
