import { Html } from "next/document"
import { Tool, ToolInterface } from "./tool-list"
import musicLibrary from "@/assets/images/music-library.png";
import digitalDrawings from "@/assets/images/digital-drawings.png";
import abstractLine from "@/assets/images/line1.svg";
import abstractLine2 from "@/assets/images/line2.svg";
import cookishMaster from "@/assets/images/cookish-master.png";
import modeling from "@/assets/images/3d.png";
import uiComponent from "@/assets/images/ui-component.png";
import krush from "@/assets/images/krush.png";
import { StaticImageData } from "next/image";

export interface ProjectInterface {
    name:string,
    id: string,
    coverImage: {
        front?: StaticImageData,
        back?: StaticImageData,
    },
    description: string
    gallery: string[],
    link?: string,
    process?: string,
    tool: ToolInterface[]
}
export const ProjectsList: ProjectInterface[] = [
    {
        name: 'Music library',
        id: 'music-library',
        coverImage: {
            back: musicLibrary
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
            back: abstractLine
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
            front: modeling
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    },
    {
        name: 'UI Component',
        id: 'ui-component',
        coverImage: {
            back: uiComponent
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
            back: krush
        },
        description: '',
        gallery: [''],
        link: '',
        tool: []
    
    }

]