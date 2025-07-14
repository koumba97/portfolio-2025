import tfo from '@/assets/images/experience/tfo.avif';
import inkas from '@/assets/images/experience/inkas.png';
import vade from '@/assets/images/experience/vade.png';
import leavy from '@/assets/images/experience/leavy.png';
import { StaticImageData } from 'next/image';

export type Experience = {
    companyName: string;
    roleName: string;
    duration: { start: Date; end: Date | string };
    description: string;
    image: StaticImageData;
    link: string;
    location: string;
    remote?: boolean;
};

export const experienceList: Experience[] = [
    {
        companyName: 'TFO',
        roleName: 'tfoRole',
        duration: {
            start: new Date(2024, 6, 1),
            end: 'Présent',
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: tfo,
        link: 'https://www.tfo.org/',
        location: 'Toronto, Canada',
    },
    {
        companyName: 'Inkas',
        roleName: 'inkasRole',
        duration: {
            start: new Date(2024, 4, 1),
            end: new Date(2024, 6, 1),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: inkas,
        link: 'https://inkasarmored.com/',
        location: 'Toronto, Canada',
    },

    {
        companyName: 'Vade',
        roleName: 'vadeRole',
        duration: {
            start: new Date(2023, 2, 1),
            end: new Date(2023, 11, 1),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: vade,
        link: 'https://www.vadesecure.com/',
        location: 'Paris, France',
        remote: true,
    },

    {
        companyName: 'Leavy',
        roleName: 'leavyRole',
        duration: {
            start: new Date(2021, 11, 1),
            end: new Date(2023, 2, 1),
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        image: leavy,
        link: 'https://www.leavy.co/',
        location: 'Paris, France',
    },
];
