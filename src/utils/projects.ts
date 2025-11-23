/* eslint-disable no-unused-vars */

import { Tool, ToolInterface } from './tool-list';
import lettering from '@/assets/images/projects/lettering/lettering.png';
import digitalDrawings from '@/assets/images/projects/digital-drawings/digital-drawings-cut.png';
import abstractLine from '@/assets/images/abstract/line1.svg';
import musicLibrary from '@/assets/images/projects/music-library/music-library.png';
import abstractLine2 from '@/assets/images/abstract/line2.svg';
import cookishMaster from '@/assets/images/projects/cookish-master/cookish-master.png';
import modeling from '@/assets/images/projects/modeling/modeling.png';
import { StaticImageData } from 'next/image';

//DIGITAL DRAWINGS
import goodDays from '@/assets/images/projects/digital-drawings/good-days.jpg';
import queenKing from '@/assets/images/projects/digital-drawings/queen-king.jpg';
import blackSwan from '@/assets/images/projects/digital-drawings/black-swan.jpg';
import sunday from '@/assets/images/projects/digital-drawings/sunday.jpg';
import headInTheClouds from '@/assets/images/projects/digital-drawings/head-in-the-clouds.jpg';
import starterPack from '@/assets/images/projects/digital-drawings/starter-pack.jpg';

//LETTERING
import letteringBook from '@/assets/images/projects/lettering/lettering.png';
import hybridation from '@/assets/images/projects/lettering/hybridation.png';
import hybridation2 from '@/assets/images/projects/lettering/hybridation2.png';
import hybridation3 from '@/assets/images/projects/lettering/hybridation3.jpg';

//MUSIC LIBRARY
import musicLibrary2 from '@/assets/images/projects/music-library/music-library2.png';
import musicLibrary3 from '@/assets/images/projects/music-library/music-library3.png';
import musicLibrary4 from '@/assets/images/projects/music-library/music-library4.png';
import musicLibrary5 from '@/assets/images/projects/music-library/music-library5.png';

//COOKISH MASTER
import cookish from '@/assets/images/projects/cookish-master/cookish.png';
import cookish2 from '@/assets/images/projects/cookish-master/cookish2.png';
import cookish3 from '@/assets/images/projects/cookish-master/cookish3.png';
import cookish4 from '@/assets/images/projects/cookish-master/cookish4.png';

// KOUM'S STUDIO
import koumsStudioCover from '@/assets/images/projects/koums-studio/koums-studio-cover.jpg';
import koumsStudio1 from '@/assets/images/projects/koums-studio/koums-studio1.png';
import koumsStudio2 from '@/assets/images/projects/koums-studio/koums-studio2.jpg';
import koumsStudio3 from '@/assets/images/projects/koums-studio/koum-s-studio.gif';
import koumsStudio4 from '@/assets/images/projects/koums-studio/koums-studio3.jpg';

//KOUM UI
import koumUI from '@/assets/images/projects/koum-ui/koum-ui.png';
import koumUI1 from '@/assets/images/projects/koum-ui/koum-ui1.png';
import koumUI2 from '@/assets/images/projects/koum-ui/koum-ui2.png';
import koumUI3 from '@/assets/images/projects/koum-ui/koum-ui3.png';
import koumUI4 from '@/assets/images/projects/koum-ui/koum-ui4.png';
import koumUI5 from '@/assets/images/projects/koum-ui/koum-ui5.png';

//AROUND THE WORLD
import aroundTheWorld from '@/assets/images/projects/around-the-world/around-the-world.png';
import aroundTheWorld1 from '@/assets/images/projects/around-the-world/around-the-world1.png';
import aroundTheWorld2 from '@/assets/images/projects/around-the-world/around-the-world2.png';
import aroundTheWorld3 from '@/assets/images/projects/around-the-world/around-the-world3.png';
import aroundTheWorld4 from '@/assets/images/projects/around-the-world/around-the-world4.png';
import aroundTheWorld5 from '@/assets/images/projects/around-the-world/around-the-world5.png';

//MODELING
import sketch from '@/assets/images/projects/modeling/sketch.jpg';
import koum from '@/assets/images/projects/modeling/koum.png';
import koum2 from '@/assets/images/projects/modeling/koum2.png';
import koum4 from '@/assets/images/projects/modeling/koum4.png';
import koum5 from '@/assets/images/projects/modeling/koum5.png';
import koum1Gif from '@/assets/images/projects/modeling/koum1.gif';
import koum2Gif from '@/assets/images/projects/modeling/koum2.gif';
import koum4Gif from '@/assets/images/projects/modeling/koum4.gif';

export enum ProjectID {
    lettering = 'lettering',
    digitalDrawings = 'digital-drawings',
    cookishMaster = 'cookish-master',
    musicLibrary = 'music-library',
    koumsStudio = 'koum-s-studio',
    koumUI = 'koum-ui',
    modeling = '3d-modeling',
    aroundTheWorld = 'around-the-world',
}
export interface ProjectInterface {
    name: string;
    id: ProjectID;
    coverImage: {
        front?: StaticImageData;
        back?: StaticImageData;
        frontHeight?: number;
        top?: `${number}%`;
        left?: `${number}%`;
    };
    description: {
        en: string;
        fr: string;
    };
    gallery: { original: string; thumbnail: string }[];
    link?: {
        github?: string;
        live?: string;
    };
    process?: string;
    tool: ToolInterface[];
}
export const ProjectsList: ProjectInterface[] = [
    {
        name: 'Lettering',
        id: ProjectID.lettering,
        coverImage: {
            back: lettering,
        },
        description: {
            en: 'A typographic experiment where I merged Carolingian script with the OCR A typeface to create a hybrid identity blending historical elegance with a digital, technical aesthetic.',
            fr: 'Projet d’expérimentation typographique où j’ai fusionné l’écriture Caroline avec la police OCR A pour créer une identité hybride, mêlant élégance historique et esthétique numérique.',
        },
        gallery: [
            {
                original: letteringBook.src,
                thumbnail: letteringBook.src,
            },
            {
                original: hybridation.src,
                thumbnail: hybridation.src,
            },
            {
                original: hybridation2.src,
                thumbnail: hybridation2.src,
            },
            {
                original: hybridation3.src,
                thumbnail: hybridation3.src,
            },
        ],
        tool: [Tool.illustrator, Tool.indesign, Tool.photoshop],
    },
    {
        name: 'Digital drawings',
        id: ProjectID.digitalDrawings,
        coverImage: {
            back: digitalDrawings,
        },
        description: {
            en: 'A series of digital illustrations created with Procreate and Photoshop, combining stylized art and vibrant colors. This project highlights my attention to detail and my personal visual style.',
            fr: 'Série de dessins numériques réalisés sur Procreate et Photoshop, mêlant illustration stylisée et couleurs vibrantes. Ce projet reflète mon sens du détail et mon univers graphique personnel.',
        },
        gallery: [
            {
                original: goodDays.src,
                thumbnail: goodDays.src,
            },
            {
                original: queenKing.src,
                thumbnail: queenKing.src,
            },
            {
                original: blackSwan.src,
                thumbnail: blackSwan.src,
            },
            {
                original: headInTheClouds.src,
                thumbnail: headInTheClouds.src,
            },
            {
                original: sunday.src,
                thumbnail: sunday.src,
            },
            {
                original: starterPack.src,
                thumbnail: starterPack.src,
            },
        ],
        link: {
            live: 'https://www.instagram.com/koum.97',
        },
        tool: [Tool.procreate, Tool.procreateDreams, Tool.photoshop],
    },
    {
        name: 'Cookish master',
        id: ProjectID.cookishMaster,
        coverImage: {
            front: cookishMaster,
            back: abstractLine2,
        },
        description: {
            en: 'Cookish Master is a mobile app offering recipes from around the world using the TheMealDB API. Users can generate a shopping list from selected recipes and schedule their meals in their phone’s calendar. The project highlights my skills in mobile development, and UI/UX.',
            fr: 'Cookish Master est une app mobile qui propose des recettes du monde grâce à l’API TheMealDB. Les utilisateurs peuvent générer une liste de courses à partir des recettes choisies et planifier leurs plats dans le calendrier de leur téléphone. Le projet met en avant mes compétences en développement mobile et en design UI/UX.',
        },
        gallery: [
            {
                original: cookish.src,
                thumbnail: cookish.src,
            },
            {
                original: cookish2.src,
                thumbnail: cookish2.src,
            },
            {
                original: cookish3.src,
                thumbnail: cookish3.src,
            },
            {
                original: cookish4.src,
                thumbnail: cookish4.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/cookish-master',
            live: '/videos/cookish-master-demo.mp4',
        },
        tool: [Tool.reactNative, Tool.firebase, Tool.figma, Tool.illustrator],
    },
    {
        name: 'Music library',
        id: ProjectID.musicLibrary,
        coverImage: {
            front: musicLibrary,
            back: abstractLine,
            frontHeight: 230,
        },

        description: {
            en: 'My Music Library project lets users explore my favorite albums and listen to music previews using the Spotify API. The app focuses on usability, intuitive design, and user experience, providing a clean interface to easily navigate through a music collection.',
            fr: 'Mon projet Music Library permet d’explorer mes albums préférés et d’écouter des extraits de musique grâce à l’API Spotify. L’application met l’accent sur l’ergonomie, le design intuitif et l’expérience utilisateur, offrant une interface claire pour naviguer facilement dans ma collection musicale.',
        },
        gallery: [
            {
                original: musicLibrary2.src,
                thumbnail: musicLibrary2.src,
            },
            {
                original: musicLibrary3.src,
                thumbnail: musicLibrary3.src,
            },
            {
                original: musicLibrary4.src,
                thumbnail: musicLibrary4.src,
            },
            {
                original: musicLibrary5.src,
                thumbnail: musicLibrary5.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/music-library',
            //live: 'https://music-library-koum.vercel.app/',
        },
        tool: [Tool.react, Tool.typescript, Tool.firebase, Tool.sass],
    },
    {
        name: "Koum's Studio",
        id: ProjectID.koumsStudio,
        coverImage: {
            back: koumsStudioCover,
        },
        description: {
            en: "Koum's Studio is a web app that lets you create and customize your own avatar. It showcases my skills in development, design, drawing, and UI/UX, offering a wide range of hairstyles, eyes, noses, and accessories to create a unique and expressive avatar.",
            fr: "Koum's Studio est une application web où tu peux créer et personnaliser ton avatar. Elle combine mes compétences en développement, design, dessin et UI/UX pour offrir un large choix de coiffures, yeux, nez et accessoires, permettant à chacun de créer un avatar unique et expressif.",
        },
        gallery: [
            {
                original: koumsStudioCover.src,
                thumbnail: koumsStudioCover.src,
            },
            {
                original: koumsStudio3.src,
                thumbnail: koumsStudio1.src,
            },
            {
                original: koumsStudio2.src,
                thumbnail: koumsStudio2.src,
            },
            {
                original: koumsStudio4.src,
                thumbnail: koumsStudio4.src,
            },
        ],
        link: {
            live: 'https://koums-studio.vercel.app/',
            github: 'https://github.com/koumba97/koums-studio',
        },
        tool: [
            Tool.react,
            Tool.typescript,
            Tool.figma,
            Tool.procreate,
            Tool.illustrator,
        ],
    },
    {
        name: 'Koum UI',
        id: ProjectID.koumUI,
        coverImage: {
            back: koumUI,
        },
        description: {
            en: 'Koum UI is a library of reusable and accessible web interface components. It highlights my skills in frontend development, design, drawing, and UI/UX, enabling the fast creation of consistent and visually appealing interfaces.',
            fr: 'Koum UI est une bibliothèque de composants d’interface web réutilisables et accessibles. Elle met en avant mes compétences en développement frontend, design, dessin et UI/UX, permettant de créer rapidement des interfaces cohérentes et esthétiques.',
        },
        gallery: [
            {
                original: koumUI1.src,
                thumbnail: koumUI1.src,
            },
            {
                original: koumUI5.src,
                thumbnail: koumUI5.src,
            },
            {
                original: koumUI2.src,
                thumbnail: koumUI2.src,
            },
            {
                original: koumUI3.src,
                thumbnail: koumUI3.src,
            },
            {
                original: koumUI4.src,
                thumbnail: koumUI4.src,
            },
        ],
        link: {
            live: 'https://koum-ui.vercel.app/',
            github: 'https://github.com/koumba97/koum-ui',
        },

        tool: [
            Tool.react,
            Tool.typescript,
            Tool.sass,
            Tool.storybook,
            Tool.figma,
        ],
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
        description: {
            en: 'During my first experience with Nomad Sculpt, I created a series of 3D figurines based on myself, inspired by Pop Mart blind boxes. Each character features stylized traits and unique expressions, combining personal creativity with digital sculpting exploration.',
            fr: 'Lors de ma première expérience sur Nomad Sculpt, j’ai réalisé une série de figurines 3D à mon effigie, inspirées des blind box Pop Mart. Chaque personnage met en avant des traits stylisés et des expressions uniques, alliant créativité personnelle et exploration de la sculpture numérique.',
        },
        gallery: [
            {
                original: koum1Gif.src,
                thumbnail: koum.src,
            },
            {
                original: koum2Gif.src,
                thumbnail: koum2.src,
            },

            {
                original: koum4Gif.src,
                thumbnail: koum4.src,
            },
            {
                original: koum5.src,
                thumbnail: koum5.src,
            },
            {
                original: sketch.src,
                thumbnail: sketch.src,
            },
        ],
        link: {
            live: '/videos/3d-modeling.mp4',
        },
        tool: [Tool.nomadSculpt, Tool.procreate],
    },
    {
        name: 'The world',
        id: ProjectID.aroundTheWorld,
        coverImage: {
            back: aroundTheWorld,
        },
        description: {
            en: 'Around the World is an interactive app that lets users discover and explore countries through maps and key information. I integrated the RestCountries API to fetch detailed data for each country and Google Maps to visualize their locations. The project showcases my skills in development, design, drawing, and UI/UX, providing a fun and educational experience.',
            fr: 'Around the World est une application interactive qui permet de découvrir et explorer des pays à travers des cartes et des informations clés. J’ai intégré l’API RestCountries pour récupérer des données détaillées sur chaque pays et Google Maps pour visualiser leur localisation. Le projet met en avant mes compétences en développement, design, dessin et UI/UX, offrant une expérience à la fois ludique et éducative.',
        },
        gallery: [
            {
                original: aroundTheWorld1.src,
                thumbnail: aroundTheWorld1.src,
            },
            {
                original: aroundTheWorld2.src,
                thumbnail: aroundTheWorld2.src,
            },
            {
                original: aroundTheWorld3.src,
                thumbnail: aroundTheWorld3.src,
            },
            {
                original: aroundTheWorld4.src,
                thumbnail: aroundTheWorld4.src,
            },
            {
                original: aroundTheWorld5.src,
                thumbnail: aroundTheWorld5.src,
            },
        ],
        link: {
            github: 'https://github.com/koumba97/around-the-world',
            live: 'https://koum-around-the-world.vercel.app/',
        },
        tool: [Tool.react, Tool.sass, Tool.typescript],
    },
];
