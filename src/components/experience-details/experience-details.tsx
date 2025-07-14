import { Chip } from "@mui/material";
import "./experience-details.scss";
import Link from "next/link";
import { useLang } from "@/context/language-context";
import LocationSVG from "@/svg/Location";
import { Locals } from "@/utils/locals";

type Prop = {
    name: string;
    title: string;
    duration: { start: Date; end: Date | string };
    description: string;
    image: string;
    link: string;
    location: string;
    remote?: boolean;
};
export default function ExperienceDetails({
    name,
    title,
    duration,
    link,
    image,
    location,
    remote,
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
                <div className="chip-container">
                    <Chip
                        className="duration"
                        size="small"
                        label={
                            duration
                                ? typeof duration.end === "string"
                                    ? `${formatDate(duration.start)} - ${
                                          duration.end
                                      }`
                                    : `${formatDate(
                                          duration.start
                                      )} - ${formatDate(duration.end)}`
                                : null
                        }
                    />{" "}
                    <Chip
                        className="location"
                        size="small"
                        label={
                            remote
                                ? `${Locals.remote[lang]} - ${location}`
                                : location
                        }
                        icon={
                            <LocationSVG
                                width={20}
                                height={20}
                                viewBox="-3 -2 30 30"
                                filled
                            />
                        }
                    />
                    {/* <LinkUI href="">See more</LinkUI> */}
                </div>
            </div>
        </div>
    );
}
