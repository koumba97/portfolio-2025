"use client";

import "./projects.scss";
import Image, { StaticImageData } from "next/image";
import { ProjectsList } from "@/utils/projects";
import { Link } from "next-view-transitions";

export default function Projects() {
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
                            id={project.id}
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
    id: string;
}

export function ProjectBloc({
    backImg,
    frontImg,
    frontHeight,
    top,
    left,
    id,
}: ProjectBlocInterface) {
    return (
        <Link
            href={`/project/${id}`}
            className="project-bloc"
            aria-labelledby={id}
            style={{
                backgroundImage: backImg ? `url("${backImg}")` : undefined,
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
        </Link>
    );
}
