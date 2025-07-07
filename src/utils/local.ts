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
  
  
  const Locals: LocalLang = {
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
}
  