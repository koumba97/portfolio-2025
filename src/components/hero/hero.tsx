import koumImg from "@/assets/images/koum.png";
import Image from "next/image";
import "./hero.scss";

export default function Hero() {
    return (
        <div className="hero-section">
            <Image src={koumImg} alt="Koum image" height={400} />
            <div>
                <h2>Hi I'm Koum</h2>
                <h1 className="title">
                    Frontend <br />
                    <span className="brand">Engineer</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    in urna sit amet sapien accumsan consequat.{" "}
                </p>
            </div>
        </div>
    );
}
