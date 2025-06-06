import { SVGProp } from "@/utils/types";

export default function SuitcaseSVG({ width, height, viewBox }: SVGProp) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.66666 19.8333V25.5C5.66666 27.0648 6.93518 28.3333 8.49999 28.3333H25.5C27.0648 28.3333 28.3333 27.0648 28.3333 25.5V17C28.3333 18.5648 27.0648 19.8333 25.5 19.8333H5.66666Z"
                fill="black"
                fillOpacity="0"
            />
            <path
                d="M17 19.8333V17M17 19.8333V22.6667M17 19.8333H25.5C27.0648 19.8333 28.3333 18.5648 28.3333 17M17 19.8333H8.49999C6.93518 19.8333 5.66666 18.5648 5.66666 17M28.3333 17V25.5C28.3333 27.0648 27.0648 28.3333 25.5 28.3333H8.49999C6.93518 28.3333 5.66666 27.0648 5.66666 25.5V17M28.3333 17V11.3333C28.3333 9.76853 27.0648 8.5 25.5 8.5H8.49999C6.93518 8.5 5.66666 9.76853 5.66666 11.3333V17M21.25 8.5V7.08333C21.25 5.51853 19.9815 4.25 18.4167 4.25H15.5833C14.0185 4.25 12.75 5.51853 12.75 7.08333V8.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
