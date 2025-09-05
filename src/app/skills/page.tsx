import { ToolContainer } from '@/ui/tool/tool';
import './skills.scss';
import { Tool } from '@/utils/tool-list';
import { devSkills } from '@/utils/skills';

export default function Skills() {
    return (
        <div className="skills-section section">
            <div className="dev-container">
                <ToolContainer tools={devSkills} />
            </div>
            <div className="design-container"></div>
            <div className="illustration-container"></div>
            <div className="language-container"></div>
        </div>
    );
}
