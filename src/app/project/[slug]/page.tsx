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

    useEffect(() => {
        const getProjectInfo = () => {
            const foundProject = ProjectsList.find(
                (project) => project.id === slug
            );
            if (foundProject) {
                setProject(foundProject);
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
                    <h1>{project?.name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus rhoncus, magna et venenatis tempor, metus ipsum
                        imperdiet dolor, vel elementum arcu ante ac risus. Nulla
                        varius sagittis aliquam. In sollicitudin metus ac
                        lacinia dapibus...
                    </p>
                </div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
            </div>
        </div>
    );
}
