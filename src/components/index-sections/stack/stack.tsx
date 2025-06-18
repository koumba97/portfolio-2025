import CompetenceBox from "@/ui/competence-box/competence-box";
import "./stack.scss";
import { Tool } from "@/utils/tool-list";

export default function Stack() {
    const programmingList = [
        Tool.html,
        Tool.css,
        Tool.javascript,
        Tool.typescript,
        Tool.sass,
        Tool.tailwind,
        Tool.react,
        Tool.reactNative,
        Tool.vue,
        Tool.angular,
        Tool.laravel,
        Tool.symfony,
        Tool.node,
        Tool.cypress,
        Tool.git,
        Tool.storybook,
    ];

    return (
        <div className="stack-section section">
            <div className="container">
                <CompetenceBox
                    title="Programming"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={programmingList}
                ></CompetenceBox>

                <CompetenceBox
                    title="Design"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={programmingList}
                ></CompetenceBox>

                <CompetenceBox
                    title="Illustration"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={programmingList}
                ></CompetenceBox>
            </div>
        </div>
    );
}
