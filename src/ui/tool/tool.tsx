import { Tooltip } from "@mui/material";
import "./tool.scss";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ToolModal from "@/components/tool-modal/tool-modal";

export interface ToolProp {
    name: string;
    image: StaticImageData;
    full?: boolean;
    showName?: boolean;
}
export default function Tool({
    name,
    image,
    full,
    showName = false,
}: ToolProp) {
    return (
        <Tooltip title={name}>
            <div className="tool">
                <div
                    className="icon-container"
                    style={{
                        backgroundImage: `url("${image.src}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                {showName ? <h2 className="tool-name">{name}</h2> : null}
            </div>
        </Tooltip>
    );
}

interface ToolContainerProp {
    max?: number;
    handleFullList?: () => void;
    tools: ToolProp[];
}
export function ToolContainer({
    max,
    handleFullList,
    tools,
}: ToolContainerProp) {
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
