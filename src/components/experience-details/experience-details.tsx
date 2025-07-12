import { Chip } from "@mui/material";
import "./experience-details.scss";
import Link from "next/link";
import { useLang } from "@/context/language-context";

type Prop = {
    name: string;
    title: string;
    duration: { start: Date; end: Date };
    description: string;
    image: string;
    link: string;
};
export default function ExperienceDetails({
    name,
    title,
    description,
    duration,
    link,
    image,
}: Prop) {
    const { lang } = useLang();
    const formatDate = (date: Date) => {
        const langDate = lang === "fr" ? "fr-FR" : "en-EN";
        const formatted = new Intl.DateTimeFormat(langDate, {
            month: "short",
            year: "numeric",
        }).format(date);

        const finalDate = formatted[0].toUpperCase() + formatted.slice(1);
        return finalDate;
    };
    return (
        <div className="experience-details">
            <Link
                href={link ? link : ""}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div
                    className="image-container"
                    style={{ backgroundImage: `url("${image}")` }}
                />
            </Link>
            <div className="experience-info">
                <h5>{title}</h5>
                <h3>{name}</h3>
                <p>{description}</p>
                <Chip
                    className="duration"
                    size="small"
                    label={
                        duration
                            ? `${formatDate(duration.start)} - ${formatDate(
                                  duration.end
                              )}`
                            : null
                    }
                ></Chip>
            </div>
        </div>
    );
}
