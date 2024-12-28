import { ToolInterface } from "@/utils/tool-list";
import "./competence-box.scss";
import Tool from "@/ui/tool/tool";

interface Prop {
    title: string;
    description: string;
    tools: ToolInterface[];
}

export default function CompetenceBox({ title, description, tools }: Prop) {
    return (
        <div className="competence-box">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="tools-container">
                {tools.map((el, index) => {
                    return (
                        <Tool
                            name={el.name}
                            image={el.image}
                            visibleText={false}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
