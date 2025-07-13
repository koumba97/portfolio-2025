import tfo from "@/assets/images/experience/tfo.avif";
import inkas from "@/assets/images/experience/inkas.png";
import vade from "@/assets/images/experience/vade.png";
import leavy from "@/assets/images/experience/leavy.png";
import { StaticImageData } from "next/image";

export type Experience = {
    companyName: string;
    roleName: string;
    duration: {start: Date, end: Date | string};
    description: string;
    image: StaticImageData;
    link: string;
    location: string;
} 

 export const experienceList: Experience[] = [
        {
            companyName: "TFO",
            roleName: "tfoRole",
            duration: {
                start: new Date('2024, 07, 01'),
                end: 'Présent',
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: tfo,
            link: 'https://www.tfo.org/',
            location: 'Toronto, Canada'
        },
        {
            companyName: "Inkas",
            roleName: "inkasRole",
            duration: {
                start: new Date('2024, 05, 01'),
                end:new Date('2024, 07, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: inkas,
            link: 'https://inkasarmored.com/',
            location: 'Toronto, Canada'
        },

        {
            companyName: "Vade",
            roleName: "vadeRole",
            duration: {
                start: new Date('2023, 03, 01'),
                end:new Date('2023, 12, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: vade,
            link: 'https://www.vadesecure.com/',
             location: 'Full remote'
        },

        {
            companyName: "Leavy",
            roleName: "leavyRole",
            duration: {
                start: new Date('2021, 12, 01'),
                end:new Date('2023, 03, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: leavy,
            link: 'https://www.leavy.co/',
            location: 'Paris, France'
        },

    ];