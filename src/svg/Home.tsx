import { SVGProp } from "@/utils/types";

export default function HomeSVG({ width, height, viewBox }: SVGProp) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 28V18.8704C12 18.0301 12.7163 17.3488 13.6 17.3488H18.4C19.2837 17.3488 20 18.0301 20 18.8704V28M15.0728 4.28156L4.67276 11.3147C4.25069 11.6001 4 12.0622 4 12.5547V25.7176C4 26.9781 5.07452 28 6.4 28H25.6C26.9255 28 28 26.9781 28 25.7176V12.5547C28 12.0622 27.7493 11.6001 27.3272 11.3147L16.9272 4.28156C16.3721 3.90615 15.6279 3.90615 15.0728 4.28156Z"
                stroke="black"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
        </svg>
    );
}
