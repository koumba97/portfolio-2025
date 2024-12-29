import htmlLogo from "@/assets/images/logo/html.png";
import cssLogo from "@/assets/images/logo/css.png";
import sassLogo from "@/assets/images/logo/sass.png";
import jsLogo from "@/assets/images/logo/javascript.png";
import tsLogo from "@/assets/images/logo/typescript.png";
import tailwindLogo from "@/assets/images/logo/tailwind.png";
import reactLogo from "@/assets/images/logo/react.png";
import vueLogo from "@/assets/images/logo/vue.png";
import laravelLogo from "@/assets/images/logo/laravel.png";
import nodeLogo from "@/assets/images/logo/node.png";
import cypressLogo from "@/assets/images/logo/cypress.png";
import symfonyLogo from "@/assets/images/logo/symfony.png";
import storybookLogo from "@/assets/images/logo/storybook.png";
import angularLogo from "@/assets/images/logo/angular.png";


import { StaticImageData } from "next/image";
export interface ToolInterface {
    name: string;
    image: StaticImageData;
    full?: boolean;
}

export const Tool: Record<string, ToolInterface> = {
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
        image: reactLogo,
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
    storybook: {
        name: 'Storybook',
        image: storybookLogo,
    },
}