import CompetenceBox from "@/components/competence-box/competence-box";
import "./stack.scss";
import { Tool } from "@/utils/tool-list";

export default function Stack() {
    return (
        <div className="stack-section section">
            <div className="container">
                <CompetenceBox
                    title="Programming"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={[Tool.HTML, Tool.CSS, Tool.SASS]}
                ></CompetenceBox>

                <CompetenceBox
                    title="Design"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={[Tool.HTML, Tool.CSS]}
                ></CompetenceBox>

                <CompetenceBox
                    title="Illustration"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in urna sit amet sapien accumsan consequat."
                    tools={[Tool.HTML, Tool.CSS]}
                ></CompetenceBox>
            </div>
        </div>
    );
}
