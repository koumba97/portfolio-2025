import { Link } from "next-view-transitions";
import "./logo-link.scss";

export default function LogoLink() {
    return (
        <Link href="/" className="logo-link">
            Koum.
        </Link>
    );
}
