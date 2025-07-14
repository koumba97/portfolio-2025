import webacademie from '@/assets/images/education/wac.png';
import corvisart from '@/assets/images/education/corvisart.png';
import garamont from '@/assets/images/education/garamont.png';
import maxVox from '@/assets/images/education/vox.png';
import { StaticImageData } from 'next/image';

export type Education = {
    schoolName: string;
    degreeName: string;
    duration: { start: Date; end: Date };
    description: string;
    image: StaticImageData;
    link: string;
    location: string;
};

export const educationList: Education[] = [
    {
        schoolName: 'webacademie',
        degreeName: 'webDegree',
        duration: {
            start: new Date('2019, 10, 01'),
            end: new Date('2021, 11, 01'),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: webacademie,
        link: 'https://www.webacademie.org/',
        location: 'Kremelin-Bicêtre, France',
    },
    {
        schoolName: 'corvisart',
        degreeName: 'prepaArt',
        duration: {
            start: new Date('2018, 10, 01'),
            end: new Date('2019, 07, 01'),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: corvisart,
        link: 'https://lycee-corvisart-tolbiac.fr/formations/formations-scolaires/les-fcil/fcil-illustration',
        location: 'Paris, France',
    },

    {
        schoolName: 'garamont',
        degreeName: 'designDegree',
        duration: {
            start: new Date('2016, 09, 01'),
            end: new Date('2018, 07, 01'),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: garamont,
        link: 'https://www.lyceegaramont.fr/dn-made-graphisme/',
        location: 'Colombes, France',
    },

    {
        schoolName: 'vox',
        degreeName: 'highSchoolDegree',
        duration: {
            start: new Date('2012, 09, 01'),
            end: new Date('2015, 07, 01'),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: maxVox,
        link: 'https://www.lyceegaramont.fr/dn-made-graphisme/',
        location: 'Paris, France',
    },
];
