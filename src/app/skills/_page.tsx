import { ToolContainer } from '@/ui/tool/tool';
import './skills.scss';
import { devSkills, graphicDesignSkills } from '@/utils/skills';

export default function Skills() {
    return (
        <div className="skills-section section">
            <div className="dev-container container">
                <h2>Development</h2>
                <ToolContainer tools={devSkills} />
            </div>
            <div className="design-container container">
                <h2>Graphic design</h2>
                <ToolContainer tools={graphicDesignSkills} />
            </div>
            <div className="illustration-container container"></div>
            <div className="language-container container"></div>
        </div>
    );
}
