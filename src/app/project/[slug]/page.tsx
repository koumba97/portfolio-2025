"use client";

import "./style.scss";
import { use, useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "next-view-transitions";
import { ProjectInterface, ProjectsList } from "@/utils/projects";
import ShowMoreText from "react-show-more-text";
import ProjectModal from "@/components/project-modal/project-modal";
import LinkUI from "@/ui/links/link";
import GithubSVG from "@/svg/Github";
import LinkSVG from "@/svg/Link";
import { ToolContainer } from "@/ui/tool/tool";
import GridSVG from "@/svg/Grid";
import OtherProjects from "@/components/other-projects/other-projects";
import { useLang } from "@/context/language-context";
import { Locals } from "@/utils/locals";

type Props = {
    params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
    const { slug } = use(params);
    const { lang } = useLang();
    const galleryRef = useRef<ImageGallery | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [project, setProject] = useState<ProjectInterface>();
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [titleHTML, setTitleHTML] = useState<string>();
    const [descriptionModalIsVisible, setDescriptionModalIsVisible] =
        useState(false);

    useEffect(() => {
        const getProjectInfo = () => {
            const foundProject = ProjectsList.find((project, index) => {
                if (project.id === slug) {
                    setProjectIndex(index);
                    console.log(index);
                    return project;
                }
            });
            if (foundProject) {
                setProject(foundProject);
                if (foundProject.name.split(" ").length === 2) {
                    setTitleHTML(
                        `${
                            foundProject.name.split(" ")[0]
                        } <span class="brand-color">${
                            foundProject.name.split(" ")[1]
                        }</span>`
                    );
                } else {
                    setTitleHTML(foundProject.name);
                }
            }
        };

        getProjectInfo();
    }, [params]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
            if (isFullscreen) {
                (
                    document.getElementsByClassName(
                        "bottom-navbar"
                    )[0] as HTMLElement
                ).style.display = "none";
            } else {
                (
                    document.getElementsByClassName(
                        "bottom-navbar"
                    )[0] as HTMLElement
                ).style.display = "flex";
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    function handleDescriptionModal() {
        setDescriptionModalIsVisible(!descriptionModalIsVisible);
    }

    return (
        <div className="project-section section">
            <div className="grid">
                <div className="grid-section">
                    <div className="back-wrapper">
                        <Link href="/">
                            <Tooltip title={Locals.home[lang]} placement="top">
                                <Button className="back-button" color="inherit">
                                    <GridSVG
                                        width={40}
                                        height={40}
                                        viewBox="0 20 80 80"
                                        filled
                                    />
                                </Button>
                            </Tooltip>
                        </Link>
                    </div>
                    {project ? (
                        <ImageGallery
                            additionalClass={
                                isFullscreen ? "fullscreen" : undefined
                            }
                            ref={galleryRef}
                            items={project.gallery}
                            autoPlay={false}
                        />
                    ) : null}
                </div>
                <div className="grid-section">
                    <div className="name-wrapper">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: titleHTML || "",
                            }}
                        />
                        <div className="arrow"></div>
                    </div>
                    <ShowMoreText
                        /* Default options */
                        lines={5}
                        more={Locals.showMore[lang]}
                        className="show-more-text-container"
                        anchorClass="show-more-less-clickable"
                        expanded={false}
                        // @ts-expect-error type avaible in the API but mistyped in the component
                        expandByClick={false}
                        onClick={handleDescriptionModal}
                        truncatedEndingComponent={"... "}
                    >
                        {project?.description}
                    </ShowMoreText>

                    <ProjectModal
                        project={project!}
                        isOpen={descriptionModalIsVisible}
                        handleDescriptionModal={handleDescriptionModal}
                    />

                    <div className="bottom">
                        <div className="tool-list-container">
                            <h5>{Locals.tools[lang]}</h5>
                            {project ? (
                                <ToolContainer max={3} tools={project?.tool} />
                            ) : null}
                        </div>
                        <div className="link-container">
                            {project?.link
                                ? Object.entries(project.link).map(
                                      ([key, value]) => (
                                          <LinkUI key={key} href={value}>
                                              <>
                                                  {key === "github" ? (
                                                      <>
                                                          <GithubSVG
                                                              width={20}
                                                              height={20}
                                                              viewBox="0 0 60 60"
                                                          />
                                                          {Locals.seeCode[lang]}
                                                      </>
                                                  ) : key === "live" ? (
                                                      <>
                                                          <LinkSVG
                                                              width={20}
                                                              height={20}
                                                              viewBox="6 0 25 35"
                                                          />
                                                          {
                                                              Locals.seeProject[
                                                                  lang
                                                              ]
                                                          }
                                                      </>
                                                  ) : null}
                                              </>
                                          </LinkUI>
                                      )
                                  )
                                : null}
                        </div>
                    </div>
                </div>
                {project ? (
                    <OtherProjects currentProjectIndex={projectIndex} />
                ) : null}
            </div>
        </div>
    );
}
