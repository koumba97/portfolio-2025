import koumImg from "@/assets/images/koum.png";
import Image from "next/image";
import "./hero.scss";
import ButtonUI from "@/ui/button/button";

export default function Hero() {
    return (
        <div className="hero-section section">
            <Image src={koumImg} alt="Koum image" id="koum-img" />
            <div>
                <div className="text-container">
                    <div>
                        <h2>Hi I'm Koum and I'm a</h2>
                        <h1 className="title">
                            Frontend <br />
                            <span className="brand">Engineer</span>
                        </h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In in urna sit amet sapien accumsan consequat.{" "}
                    </p>
                    <div className="buttons-container">
                        <ButtonUI>Learn more</ButtonUI>
                        <ButtonUI type="outlined">Projects</ButtonUI>
                    </div>
                </div>
            </div>
        </div>
    );
}
