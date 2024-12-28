import htmlLogo from "@/assets/images/logo/html.png";
import cssLogo from "@/assets/images/logo/css.png";
import sassLogo from "@/assets/images/logo/sass.png";
import { StaticImageData } from "next/image";
export interface ToolInterface {
    name: string;
    image: StaticImageData;
}

export const Tool: Record<string, ToolInterface> = {
    HTML: {
        name: 'HTML',
        image: htmlLogo,
    },
    CSS: {
        name: 'CSS',
        image: cssLogo,
    },
    SASS: {
        name: 'Sass',
        image: sassLogo,
    },
}