"use client";

import "./other-projects.scss";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { ProjectsList } from "@/utils/projects";
import { ProjectBloc } from "@/components/index-sections/projects/projects";

type Props = {
    currentProjectIndex: number;
};

export default function OtherProjects({ currentProjectIndex }: Props) {
    const [restartOtherProjectLoop, setRestartOtherProjectLoop] =
        useState(false);
    const [otherProjectSlicePos, setOtherProjectSlicePos] = useState<
        number[] | undefined
    >(undefined);
    const NUMBER_OTHER_PROJECTS = 4;

    useEffect(() => {
        const nextProjectIndex = currentProjectIndex + 1;

        if (nextProjectIndex + NUMBER_OTHER_PROJECTS > ProjectsList.length) {
            setRestartOtherProjectLoop(true);
            setOtherProjectSlicePos([nextProjectIndex, ProjectsList.length]);
        } else {
            setOtherProjectSlicePos([
                nextProjectIndex,
                nextProjectIndex + NUMBER_OTHER_PROJECTS,
            ]);
        }
    }, []);

    return (
        <>
            {otherProjectSlicePos && (
                <>
                    {ProjectsList.slice(
                        otherProjectSlicePos[0],
                        otherProjectSlicePos[1]
                    ).map((project) => (
                        <ProjectBloc
                            frontImg={project.coverImage.front || undefined}
                            backImg={project.coverImage.back?.src || undefined}
                            frontHeight={project.coverImage.frontHeight}
                            top={project.coverImage.top}
                            left={project.coverImage.left}
                            id={project.id}
                            key={project.id}
                        />
                    ))}

                    {restartOtherProjectLoop &&
                        ProjectsList.slice(
                            0,
                            NUMBER_OTHER_PROJECTS -
                                (ProjectsList.length -
                                    (currentProjectIndex + 1))
                        ).map((project) => (
                            <ProjectBloc
                                frontImg={project.coverImage.front || undefined}
                                backImg={
                                    project.coverImage.back?.src || undefined
                                }
                                frontHeight={project.coverImage.frontHeight}
                                top={project.coverImage.top}
                                left={project.coverImage.left}
                                id={project.id}
                                key={project.id}
                            />
                        ))}
                </>
            )}
        </>
    );
}
