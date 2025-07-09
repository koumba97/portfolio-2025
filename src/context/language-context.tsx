import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

type Lang = "en" | "fr";

const LanguageContext = createContext<{
    lang: Lang;
    setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const defaultLang = localStorage.getItem("koum-portfolio-lang")
        ? (localStorage.getItem("koum-portfolio-lang") as Lang)
        : "en";
    const [lang, setLang] = useState<Lang>(defaultLang);

    useEffect(() => {
        localStorage.setItem("koum-portfolio-lang", lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
