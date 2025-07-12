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
    projects: {
        en: "Projects",
        fr: "Projets"
    },
    learnMore: {
        en: "Learn more",
        fr: "En savoir plus"
    },
    getInTouch: {
        en: "Get in touch",
        fr: "Rester en contact"
    },

    interests: {
        en: "Interets",
        fr: "Centres d'intérêt"
    },

    rollerskate: {
        en: "Rollerskate",
        fr: "Roller"
    },

    museum: {
        en: "Museum",
        fr: "Musée"
    },

    baking: {
        en: "Baking",
        fr: "Pâtisserie"
    },

    designDrawing: {
        en: "Design/Drawing",
        fr: "Design/Dessin"
    },

    softSkills: {
        en: "Soft skills",
        fr: "Qualités"
    },

    creative: {
        en: "Creative",
        fr: "Créative"
    },

    fastLeaner: {
        en: "Fast learner",
        fr: "Apprend vite"
    },

    stressManagement: {
        en: "Stress management",
        fr: "Gestion du stress"
    },

    autonomy: {
        en: "Autonomy",
        fr: "Autonomie"
    },

    multitasking: {
        en: "Multitasking",
        fr: "Multitâche"
    },

    criticalThinking: {
        en: "criticalThinking",
        fr: "Esprit critique"
    },
    problemSolving: {
        en: "Problem solving",
        fr: "Résolution de problèmes"
    },
    prioritizeIssues: {
        en: "Prioritize issues",
        fr: "Priorisation des enjeux"
    },
    attentionToDetail: {
        en: "Attention to detail",
        fr: "Rigueur"
    },
    teamSpirit: {
        en: "Team spirit",
        fr: "Esprit d'équipe"
    },
    adaptability: {
        en: "Adaptability",
        fr: "Capacité d’adaptation"
    },
    positiveAttitude: {
        en: "Attitude positive",
        fr: "Positive attitude"
    },

    //EXPERIENCE PAGE
    education: {
        en: "Education",
        fr: "Scolarité"
    },
}
  