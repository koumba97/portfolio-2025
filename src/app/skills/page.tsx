import { ToolContainer } from '@/ui/tool/tool';
import './skills.scss';
import { Tool } from '@/utils/tool-list';
import {
    databaseSkills,
    devSkills,
    frameworkSkills,
    langSkills,
    mobileSkills,
    styleSkills,
    testingSkills,
    versioningSkills,
} from '@/utils/skills';

export default function Skills() {
    return (
        <div className="skills-section section">
            <div className="dev-container container">
                <h2>Development</h2>

                <ToolContainer tools={devSkills} />
            </div>
            <div className="design-container container"></div>
            <div className="illustration-container container"></div>
            <div className="language-container container"></div>
        </div>
    );
}
