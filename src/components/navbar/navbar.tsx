import LogoLink from "@/ui/logo-link/logo-link";
import "./navbar.scss";
import Link from "next/link";
import ButtonUI from "../../ui/button/button";
import SideMenu from "../side-menu/side-menu";

export default function NavBar() {
    return (
        <div className="navbar">
            <LogoLink />

            <div className="links-container">
                <Link href="">Home</Link>
                <Link href="">About me</Link>
                <Link href="">Projects</Link>
                <Link href="">Skills</Link>
                <Link href="">Experience</Link>
                <ButtonUI>Contact me</ButtonUI>
            </div>
            <SideMenu />
        </div>
    );
}
