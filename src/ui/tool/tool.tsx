import { Tooltip } from "@mui/material";
import "./tool.scss";
import { StaticImageData } from "next/image";
import { useState } from "react";
import ToolModal from "@/components/tool-modal/tool-modal";
import LinkUI from "../links/link";
import LinkSVG from "@/svg/Link";

export interface ToolProp {
    name: string;
    image: StaticImageData;
    link: string;
    full?: boolean;
    showName?: boolean;
}
export default function Tool({
    name,
    image,
    link,
    showName = false,
}: ToolProp) {
    return (
        <Tooltip title={name} disableHoverListener={showName}>
            <div className="tool">
                <a href={link} target="_blank">
                    <div
                        className="icon-container"
                        style={{
                            backgroundImage: `url("${image.src}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </a>
                {showName ? <h2 className="tool-name">{name}</h2> : null}
                {showName ? (
                    <LinkUI href={link}>
                        <LinkSVG width={20} height={20} viewBox="6 0 25 35" />
                    </LinkUI>
                ) : null}
            </div>
        </Tooltip>
    );
}

interface ToolContainerProp {
    max?: number;
    handleFullList?: () => void;
    tools: ToolProp[];
}
export function ToolContainer({ max, tools }: ToolContainerProp) {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function handleToolModal() {
        setModalIsVisible(!modalIsVisible);
    }

    return (
        <>
            <div className="tool-container">
                {tools
                    .filter((_, index) => !max || index < max)
                    .map((tool, index) => {
                        return (
                            <Tool
                                key={tool.name || index}
                                name={tool.name}
                                image={tool.image}
                                link={tool.link}
                                showName={tool.showName}
                            />
                        );
                    })}
                {max && tools.length > max ? (
                    <div
                        className="icon-container plus"
                        onClick={handleToolModal}
                    >
                        <span>+{tools.length - max}</span>
                    </div>
                ) : null}
            </div>

            <ToolModal
                tools={tools}
                isOpen={modalIsVisible}
                handleToolModal={handleToolModal}
            />
        </>
    );
}
