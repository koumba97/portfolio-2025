import LogoLink from "@/ui/logo-link/logo-link";
import "./navbar.scss";
import Link from "next/link";
import ButtonUI from "../../ui/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <div className="navbar">
            <LogoLink />
            <FontAwesomeIcon icon={faBars} height={20} />

            <div className="links-container">
                <Link href="">Home</Link>
                <Link href="">About me</Link>
                <Link href="">Projects</Link>
                <Link href="">Skills</Link>
                <Link href="">Experience</Link>
                <ButtonUI>Contact me</ButtonUI>
            </div>
        </div>
    );
}
