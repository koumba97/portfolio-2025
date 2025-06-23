"use client";

import "./style.scss";
import { use, useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const galleryRef = useRef<ImageGallery | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            const isFullscreen = !!document.fullscreenElement;
            setIsFullscreen(isFullscreen);
            if (isFullscreen) {
                document
                    .getElementsByClassName("image-gallery")[0]
                    .classList.add("fullscreen");
            } else {
                document
                    .getElementsByClassName("image-gallery")[0]
                    .classList.remove("fullscreen");
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
                        <div className="back"></div>
                    </div>
                    <ImageGallery
                        ref={galleryRef}
                        items={images}
                        autoPlay={false}
                    />
                </div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
                <div className="grid-section"></div>
            </div>
        </div>
    );
}
