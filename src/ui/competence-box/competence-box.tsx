import { ToolInterface } from "@/utils/tool-list";
import "./competence-box.scss";
import Tool from "@/ui/tool/tool";

interface Prop {
    title: string;
    description: string;
    tools: ToolInterface[];
}

export default function CompetenceBox({ title, description, tools }: Prop) {
    const VISIBLE_ITEMS = 4;
    const shortedList = tools.slice(0, VISIBLE_ITEMS);
    const HIDDEN_ITEMS = tools.length - VISIBLE_ITEMS;
    return (
        <div className="competence-box">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="tools-container">
                {shortedList.map((el, index) => {
                    if (!el) {
                        console.warn(`Invalid tool at index ${index}`, el);
                        return null;
                    }
                    return (
                        <Tool
                            name={el.name}
                            image={el.image}
                            full={el.full}
                            visibleText={false}
                            key={index}
                        />
                    );
                })}

                {HIDDEN_ITEMS > 0 ? (
                    <div className="hidden-items">+{HIDDEN_ITEMS}</div>
                ) : null}
            </div>
        </div>
    );
}
