enum Lang {
    ENGLISH= 'en',
    FRENCH = 'fr',
}
type LocalLang = {
    [key: string]: {
        [Lang.ENGLISH]: string;
        [Lang.FRENCH]: string;
    };
};
  
  
export const Locals: LocalLang = {
    //LANG
    en: {
        en: "English",
        fr: "Anglais",
    },
    fr: {
        en: "French",
        fr: "Français",
    },
    //MENU ITEMS
    home: {
        en: "Home",
        fr: "Accueil"
    },
    aboutMe: {
        en: "About me",
        fr: "À propos"
    },
    experience: {
        en: "Experience",
        fr: "Experiences"
    },
    skills: {
        en: "Skills",
        fr: "Compétences"
    },

    //PAGE PROJET
    showMore: {
        en: "Show more",
        fr: "Voir plus"
    },
    seeCode: {
        en: "See the code",
        fr: "Voir le code"
    },
    seeProject: {
        en: "See the project",
        fr: "Voir le projet"
    },
    tool: {
        en: "Tool",
        fr: "Outil"
    },
    tools: {
        en: "Tools",
        fr: "Outils"
    },

    //PAGE ABOUT ME
    aboutMeRoleIntro:  {
        en: "I'm Koumba and I'm a",
        fr: "Je m'appelle Koumba et je suis une"
    },
    uiUxDesigner: {
        en: "UI/UX Designer",
        fr: "UI/UX Designer"
    },
    digitalArtist: {
        en: "Digital Artiste",
        fr: "Artiste digital"
    },
    graphicDesigner: {
        en: "Graphic Designer",
        fr: "Designer Graphique"
    },
    frontendEngineer: {
        en: "Frontend Engineer",
        fr: "Ingénieur Frontend"
    },
}
  