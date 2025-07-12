import { Chip } from "@mui/material";
import "./experience-details.scss";

export default function ExperienceDetails() {
    return (
        <div className="experience-details">
            <div className="image-container"></div>
            <div className="experience-info">
                <h5>Titre</h5>
                <h3>Company name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <Chip
                    className="duration"
                    size="small"
                    label="Juil. 2024 - Present"
                ></Chip>
            </div>
        </div>
    );
}
