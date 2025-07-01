import htmlLogo from "@/assets/images/logo/html.png";
import cssLogo from "@/assets/images/logo/css.png";
import sassLogo from "@/assets/images/logo/sass.png";
import jsLogo from "@/assets/images/logo/javascript.png";
import tsLogo from "@/assets/images/logo/typescript.png";
import tailwindLogo from "@/assets/images/logo/tailwind.png";
import reactLogo from "@/assets/images/logo/react.png";
import reactNativeLogo from "@/assets/images/logo/react-native.png";
import vueLogo from "@/assets/images/logo/vue.png";
import laravelLogo from "@/assets/images/logo/laravel.png";
import nodeLogo from "@/assets/images/logo/node.png";
import cypressLogo from "@/assets/images/logo/cypress.png";
import symfonyLogo from "@/assets/images/logo/symfony.png";
import storybookLogo from "@/assets/images/logo/storybook.png";
import firebaseLogo from "@/assets/images/logo/firebase.png";
import angularLogo from "@/assets/images/logo/angular.png";

import photoshopLogo from "@/assets/images/logo/photoshop.png";
import inDesignLogo from "@/assets/images/logo/css.png";
import illustratorLogo from "@/assets/images/logo/illustrator.png";
import afterEffectsLogo from "@/assets/images/logo/javascript.png";
import adobeXDLogo from "@/assets/images/logo/typescript.png";
import quarkExpressLogo from "@/assets/images/logo/tailwind.png";
import wordpressLogo from "@/assets/images/logo/react.png";
import sitecoreLogo from "@/assets/images/logo/vue.png";
import figmaLogo from "@/assets/images/logo/figma.png";
import canvaLogo from "@/assets/images/logo/node.png";
import microsoftOfficeSuiteLogo from "@/assets/images/logo/symfony.png";
import procreateLogo from "@/assets/images/logo/procreate.png";
import procreateDreamsLogo from "@/assets/images/logo/procreate-dreams.png";
import nomadSculptLogo from "@/assets/images/logo/nomadsculpt.jpeg";
//import cypressLogo from "@/assets/images/logo/cypress.png";
//import angularLogo from "@/assets/images/logo/angular.png";


import { StaticImageData } from "next/image";
export interface ToolInterface {
    name: string;
    image: StaticImageData;
    full?: boolean;
}

export const Tool: Record<string, ToolInterface> = {
    //PROGRAMMING
    html: {
        name: 'HTML',
        image: htmlLogo,
    },
    css: {
        name: 'CSS',
        image: cssLogo,
    },
    sass: {
        name: 'Sass',
        image: sassLogo,
    },
    javascript: {
        name: 'JavaScript',
        image: jsLogo,
        full: true,
    },
    typescript: {
        name: 'TypeScript',
        image: tsLogo,
        full: true,
    },
    tailwind: {
        name: 'Tailwind',
        image: tailwindLogo,
    },
    react: {
        name: 'React',
        image: reactLogo,
    },
    reactNative: {
        name: 'React Native',
        image: reactNativeLogo,
    },
    vue: {
        name: 'Vue',
        image: vueLogo,
    },
    angular: {
        name: 'Angular',
        image: angularLogo,
    },
    laravel: {
        name: 'Laravel',
        image: laravelLogo,
    },
    symfony: {
        name: 'Symfony',
        image: symfonyLogo,
    },
    node: {
        name: 'Node JS',
        image: nodeLogo,
    },
    cypress: {
        name: 'Cypress',
        image: cypressLogo,
    },
    firebase: {
        name: 'Firebase',
        image: firebaseLogo,
    },
    storybook: {
        name: 'Storybook',
        image: storybookLogo,
    },

    //DESIGN
    photoshop: {
        name: 'Photoshop',
        image: photoshopLogo
    },
    indesign: {
        name: 'InDesign',
        image: inDesignLogo
    },
    illustrator: {
        name: 'Illustrator',
        image: illustratorLogo
    },
    afterEffects: {
        name: 'After Effects',
        image: afterEffectsLogo
    },
    adobeXD: {
        name: 'Adobe Xd',
        image: adobeXDLogo
    },
    quarkExpress: {
        name: 'Quark Express',
        image: quarkExpressLogo
    },
    wordpress: {
        name: 'Wordpress',
        image: wordpressLogo
    },
    sitecore: {
        name: 'Sitecore',
        image: sitecoreLogo
    },
    figma: {
        name: 'Figma',
        image: figmaLogo
    },
    canva: {
        name: 'Canva',
        image: canvaLogo
    },
    procreate: {
        name: 'Procreate',
        image: procreateLogo
    },
    procreateDreams: {
        name: 'Procreate Dreams',
        image: procreateDreamsLogo
    },
    nomadSculpt: {
        name: 'Nomad Sculpt',
        image: nomadSculptLogo
    },
    microsoftOfficeSuite: {
        name: 'Microsoft Office Suite',
        image: microsoftOfficeSuiteLogo
    },


}