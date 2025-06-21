import { Html } from "next/document"
import { Tool, ToolInterface } from "./tool-list"
import lettering from "@/assets/images/lettering.png";
import digitalDrawings from "@/assets/images/digital-drawings-cut.png";
import abstractLine from "@/assets/images/line1.svg";
import musicLibrary from "@/assets/images/music-library.png";
import abstractLine2 from "@/assets/images/line2.svg";
import cookishMaster from "@/assets/images/cookish-master.png";
import puff from "@/assets/images/puff.png";
import eCommerce from "@/assets/images/e-commerce.png";
import modeling from "@/assets/images/modeling.png";
import designSystem from "@/assets/images/design-system.png";
import krush from "@/assets/images/krush.png";
import { StaticImageData } from "next/image";

export interface ProjectInterface {
    name:string,
    id: string,
    coverImage: {
        front?: StaticImageData,
        back?: StaticImageData,
        frontHeight?: number
        top?: `${number}%`,
        left?: `${number}%`
    },
    description: string
    gallery: string[],
    link?: string,
    process?: string,
    tool: ToolInterface[]
}
export const ProjectsList: ProjectInterface[] = [
    {
        name: 'Lettering',
        id: 'lettering',
        coverImage: {
            back: lettering
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []

    },
    {
        name: 'Digital drawings',
        id: 'digital-drawings',
        coverImage: {
            back: digitalDrawings
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []

    },
    {
        name: 'Cookish master',
        id: 'cookish-master',
        coverImage: {
            front: cookishMaster,
            back: abstractLine2
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []

    },
    {
        name: 'Undefined',
        id: 'undefined',
        coverImage: {
            front: musicLibrary,
            back: abstractLine,
            frontHeight: 230
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []

    },
    {
        name: 'Puff',
        id: 'puff',
        coverImage: {
            back: puff
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    },
    {
        name: 'Design System',
        id: 'design-system',
        coverImage: {
            back: designSystem
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    },
    {
        name: '3D Modeling',
        id: '3d-modeling',
        coverImage: {
            front: modeling,
            frontHeight: 200,
            left: '65%',
            top: '65%',
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    }
    ,
    {
        name: 'Krush',
        id: 'krush',
        coverImage: {
            back: eCommerce
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    }

]