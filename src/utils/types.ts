//SVG 
export interface SVGProp {
    width: number;
    height: number;
    viewBox?: viewBox;
}
export type viewBox = `${number} ${number} ${number} ${number}`;