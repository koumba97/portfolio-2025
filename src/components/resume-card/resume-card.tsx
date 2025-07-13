import "./resume-card.scss";
import Image from "next/image";
import cvImg from "@/assets/images/experience/cv.png";
import ButtonUI from "@/ui/button/button";

export function ResumeCard() {
    return (
        <div className="resume-card">
            <Image src={cvImg} alt="Koum image" />
            <div className="info-card">
                <h3>Read my full resume</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ButtonUI>Download</ButtonUI>
            </div>
        </div>
    );
}
