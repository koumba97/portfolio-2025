// src/context/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "fr";

const LanguageContext = createContext<{
    lang: Lang;
    setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
