"use client";

import "./style.scss";
import { use, useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import ArrowLeftSVG from "@/svg/ArrowLeft";
import { Link } from "next-view-transitions";
import { ProjectInterface, ProjectsList } from "@/utils/projects";
import ShowMoreText from "react-show-more-text";
import ProjectModal from "@/components/project-modal/project-modal";
import LinkUI from "@/ui/links/link";
import GithubSVG from "@/svg/Github";
import LinkSVG from "@/svg/Link";
import Tool, { ToolContainer } from "@/ui/tool/tool";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

type Props = {
    params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
    const { slug } = use(params);
    const galleryRef = useRef<ImageGallery | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [project, setProject] = useState<ProjectInterface>();
    const [titleHTML, setTitleHTML] = useState<string>();
    const [descriptionModalIsVisible, setDescriptionModalIsVisible] =
        useState(false);

    useEffect(() => {
        const getProjectInfo = () => {
            const foundProject = ProjectsList.find(
                (project) => project.id === slug
            );
            if (foundProject) {
                setProject(foundProject);
                if (foundProject.name.split(" ").length === 2) {
                    console.log("okok");
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
                            <Tooltip title="Home" placement="top">
                                <Button className="back-button" color="inherit">
                                    <ArrowLeftSVG
                                        width={30}
                                        height={30}
                                        viewBox="5 5 50 50"
                                    />
                                </Button>
                            </Tooltip>
                        </Link>
                    </div>
                    <ImageGallery
                        additionalClass={
                            isFullscreen ? "fullscreen" : undefined
                        }
                        ref={galleryRef}
                        items={images}
                        autoPlay={false}
                    />
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
                        lines={6}
                        more="Show more"
                        less="Show less"
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
                                                              viewBox="6 0 25 35"
                                                          />
                                                          See the code
                                                      </>
                                                  ) : key === "live" ? (
                                                      <>
                                                          <LinkSVG
                                                              width={20}
                                                              height={20}
                                                              viewBox="6 0 25 35"
                                                          />
                                                          See the project
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
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
            </div>
        </div>
    );
}
