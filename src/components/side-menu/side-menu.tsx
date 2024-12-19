import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SideMenu() {
    return (
        <div className="side-menu">
            <FontAwesomeIcon icon={faBars} height={30} />
        </div>
    );
}
