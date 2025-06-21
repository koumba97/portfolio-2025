import { Link } from "next-view-transitions";
import "./logo-link.scss";

export default function LogoLink() {
    return (
        <Link href="/">
            <h1 className="logo-link">Koum.</h1>
        </Link>
    );
}
