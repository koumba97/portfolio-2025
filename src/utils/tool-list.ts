import htmlLogo from '@/assets/images/logo/html.png';
import cssLogo from '@/assets/images/logo/css.png';
import sassLogo from '@/assets/images/logo/sass.png';
import jsLogo from '@/assets/images/logo/javascript.png';
import tsLogo from '@/assets/images/logo/typescript.png';
import tailwindLogo from '@/assets/images/logo/tailwind.png';
import reactLogo from '@/assets/images/logo/react.png';
import reactNativeLogo from '@/assets/images/logo/react-native.png';
import vueLogo from '@/assets/images/logo/vue.png';
import laravelLogo from '@/assets/images/logo/laravel.png';
import nodeLogo from '@/assets/images/logo/node.png';
import cypressLogo from '@/assets/images/logo/cypress.png';
import symfonyLogo from '@/assets/images/logo/symfony.png';
import storybookLogo from '@/assets/images/logo/storybook.png';
import firebaseLogo from '@/assets/images/logo/firebase.png';
import angularLogo from '@/assets/images/logo/angular.png';

import photoshopLogo from '@/assets/images/logo/photoshop.png';
import inDesignLogo from '@/assets/images/logo/css.png';
import illustratorLogo from '@/assets/images/logo/illustrator.png';
import afterEffectsLogo from '@/assets/images/logo/javascript.png';
import adobeXDLogo from '@/assets/images/logo/typescript.png';
import quarkExpressLogo from '@/assets/images/logo/tailwind.png';
import wordpressLogo from '@/assets/images/logo/react.png';
import sitecoreLogo from '@/assets/images/logo/vue.png';
import figmaLogo from '@/assets/images/logo/figma.png';
import canvaLogo from '@/assets/images/logo/node.png';
import microsoftOfficeSuiteLogo from '@/assets/images/logo/symfony.png';
import procreateLogo from '@/assets/images/logo/procreate.png';
import procreateDreamsLogo from '@/assets/images/logo/procreate-dreams.png';
import nomadSculptLogo from '@/assets/images/logo/nomadsculpt.jpeg';
//import cypressLogo from "@/assets/images/logo/cypress.png";
//import angularLogo from "@/assets/images/logo/angular.png";

import { StaticImageData } from 'next/image';
export interface ToolInterface {
    name: string;
    image: StaticImageData;
    link: string;
    full?: boolean;
}

export const Tool: Record<string, ToolInterface> = {
    //PROGRAMMING
    html: {
        name: 'HTML',
        image: htmlLogo,
        link: 'https://www.w3schools.com/html/default.asp',
    },
    css: {
        name: 'CSS',
        image: cssLogo,
        link: 'https://www.w3schools.com/css/',
    },
    sass: {
        name: 'Sass',
        image: sassLogo,
        link: 'https://sass-lang.com/',
    },
    javascript: {
        name: 'JavaScript',
        image: jsLogo,
        full: true,
        link: 'https://www.w3schools.com/js/',
    },
    typescript: {
        name: 'TypeScript',
        image: tsLogo,
        full: true,
        link: 'https://www.typescriptlang.org/',
    },
    tailwind: {
        name: 'Tailwind',
        image: tailwindLogo,
        link: 'https://tailwindcss.com/',
    },
    react: {
        name: 'React',
        image: reactLogo,
        link: 'https://react.dev/',
    },
    reactNative: {
        name: 'React Native',
        image: reactNativeLogo,
        link: 'https://reactnative.dev/',
    },
    vue: {
        name: 'Vue',
        image: vueLogo,
        link: 'https://vuejs.org/',
    },
    angular: {
        name: 'Angular',
        image: angularLogo,
        link: 'https://angular.dev/',
    },
    laravel: {
        name: 'Laravel',
        image: laravelLogo,
        link: 'https://laravel.com/',
    },
    symfony: {
        name: 'Symfony',
        image: symfonyLogo,
        link: 'https://symfony.com/',
    },
    node: {
        name: 'Node JS',
        image: nodeLogo,
        link: 'https://nodejs.org/en',
    },
    cypress: {
        name: 'Cypress',
        image: cypressLogo,
        link: 'https://www.cypress.io/',
    },
    firebase: {
        name: 'Firebase',
        image: firebaseLogo,
        link: 'https://firebase.google.com/',
    },
    storybook: {
        name: 'Storybook',
        image: storybookLogo,
        link: 'https://storybook.js.org/',
    },

    //DESIGN
    photoshop: {
        name: 'Photoshop',
        image: photoshopLogo,
        link: 'https://www.adobe.com/products/photoshop.html',
    },
    indesign: {
        name: 'InDesign',
        image: inDesignLogo,
        link: 'https://www.adobe.com/products/indesign.html',
    },
    illustrator: {
        name: 'Illustrator',
        image: illustratorLogo,
        link: 'https://www.adobe.com/products/illustrator.html',
    },
    afterEffects: {
        name: 'After Effects',
        image: afterEffectsLogo,
        link: 'https://www.adobe.com/products/aftereffects.html',
    },
    adobeXD: {
        name: 'Adobe Xd',
        image: adobeXDLogo,
        link: 'https://www.adobe.com/products/xd.html',
    },
    quarkExpress: {
        name: 'Quark Express',
        image: quarkExpressLogo,
        link: 'https://www.quark.com/products/quarkxpress',
    },
    wordpress: {
        name: 'Wordpress',
        image: wordpressLogo,
        link: 'https://wordpress.com/fr/',
    },
    sitecore: {
        name: 'Sitecore',
        image: sitecoreLogo,
        link: 'https://www.sitecore.com/',
    },
    figma: {
        name: 'Figma',
        image: figmaLogo,
        link: 'https://www.figma.com/',
    },
    canva: {
        name: 'Canva',
        image: canvaLogo,
        link: 'https://www.canva.com/',
    },
    procreate: {
        name: 'Procreate',
        image: procreateLogo,
        link: 'https://procreate.com/',
    },
    procreateDreams: {
        name: 'Procreate Dreams',
        image: procreateDreamsLogo,
        link: 'https://procreate.com/dreams',
    },
    nomadSculpt: {
        name: 'Nomad Sculpt',
        image: nomadSculptLogo,
        link: 'https://nomadsculpt.com/',
    },
    microsoftOfficeSuite: {
        name: 'Microsoft Office Suite',
        image: microsoftOfficeSuiteLogo,
        link: 'https://www.office.com/',
    },
};
