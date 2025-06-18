//SVG 
export interface SVGProp {
    width: number;
    height: number;
    viewBox?: viewBox;
    color?: string;
}
export type viewBox = `${number} ${number} ${number} ${number}`;