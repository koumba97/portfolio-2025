import webacademie from "@/assets/images/education/wac.png";
import corvisart from "@/assets/images/education/corvisart.png";
import garamont from "@/assets/images/education/garamont.png";
import { StaticImageData } from "next/image";

type Education = {
    schoolName: string;
    degreeName: string;
    duration: {start: Date, end: Date};
    description: string;
    image: StaticImageData;
    link: string;
} 

 export const educationList: Education[] = [
        {
            schoolName: "Web@cademie by EPITECH",
            degreeName: "Licence développeur web",
            duration: {
                start: new Date('2019, 10, 01'),
                end:new Date('2021, 11, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: webacademie,
            link: 'https://www.webacademie.org/',
        },
        {
            schoolName: "Lycée Corvisart Tolbiac",
            degreeName: "École préparatoire en illustration",
            duration: {
                start: new Date('2018, 10, 01'),
                end:new Date('2019, 07, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: corvisart,
            link: 'https://lycee-corvisart-tolbiac.fr/formations/formations-scolaires/les-fcil/fcil-illustration',
        },

        {
            schoolName: "Lycée Claude Garamont",
            degreeName: "BTS en Design Graphique",
            duration: {
                start: new Date('2016, 09, 01'),
                end:new Date('2018, 07, 01'),
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            image: garamont,
            link: 'https://www.lyceegaramont.fr/dn-made-graphisme/',
        },


    ];