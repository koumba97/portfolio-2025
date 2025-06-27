import "./tool.scss";
import Image, { StaticImageData } from "next/image";

interface ToolProp {
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
    return (
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
        </div>
    );
}
