import "./projects.scss";
import cookishMaster from "@/assets/images/cookish-master.png";
import Image, { StaticImageData } from "next/image";

export default function Projects() {
    return (
        <div className="projects-section section">
            <div className="grid">
                <div></div>
                <div></div>
                <ProjectBloc backImg="line2.svg" frontImg={cookishMaster} />
                <ProjectBloc backImg="line1.svg" />
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

interface ProjectBlocInterface {
    backImg: string;
    frontImg?: StaticImageData;
}

function ProjectBloc({ backImg, frontImg }: ProjectBlocInterface) {
    return (
        <div
            className="project-bloc"
            style={{
                backgroundImage: `url("${backImg}")`,
            }}
        >
            {frontImg ? (
                <Image
                    src={frontImg}
                    alt=""
                    height={300}
                    className="front-image"
                />
            ) : null}
        </div>
    );
}
