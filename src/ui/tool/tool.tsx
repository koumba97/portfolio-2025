import { ToolInterface } from "@/utils/tool-list";
import "./tool.scss";
import Image, { StaticImageData } from "next/image";

interface Prop {
    name: string;
    image: StaticImageData;
    full?: boolean;
    visibleText?: boolean;
}
export default function Tool({ name, image, full, visibleText = true }: Prop) {
    return (
        <div className="tool">
            <div className="icon-container">
                <Image src={image} alt="" height={full ? 36 : 25} />
            </div>
            {visibleText ? <h2 className="tool-name">{name}</h2> : null}
        </div>
    );
}
