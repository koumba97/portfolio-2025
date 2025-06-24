import { ToolInterface } from "./tool-list"
import lettering from "@/assets/images/projects/lettering/lettering.png";
import digitalDrawings from "@/assets/images/projects/digital-drawings/digital-drawings-cut.png";
import abstractLine from "@/assets/images/abstract/line1.svg";
import musicLibrary from "@/assets/images/projects/music-library/music-library.png";
import abstractLine2 from "@/assets/images/abstract/line2.svg";
import cookishMaster from "@/assets/images/projects/cookish-master/cookish-master.png";
import puff from "@/assets/images/projects/puff/puff.png";
import eCommerce from "@/assets/images/projects/krush/e-commerce.png";
import modeling from "@/assets/images/projects/modeling/modeling.png";
import designSystem from "@/assets/images/projects/design-system/design-system.png";
import { StaticImageData } from "next/image";

export enum ProjectID {
    lettering = 'lettering',
    digitalDrawings = 'digital-drawings',
    cookishMaster = 'cookish-master',
    musicLibrary = 'music-library',
    puff = 'puff',
    designSystem = 'design-system',
    modeling = '3d-modeling',
    krush = 'krush',
}
export interface ProjectInterface {
    name:string,
    id: ProjectID,
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
        id: ProjectID.lettering,
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
        id: ProjectID.digitalDrawings,
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
        id: ProjectID.cookishMaster,
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
        name: 'Music library',
        id: ProjectID.musicLibrary,
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
        id: ProjectID.puff,
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
        id: ProjectID.designSystem,
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
        id: ProjectID.modeling,
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
        id: ProjectID.krush,
        coverImage: {
            back: eCommerce
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    }

]