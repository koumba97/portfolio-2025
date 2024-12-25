import AboutMe from "@/components/index-sections/about-me/about-me";
import Hero from "@/components/index-sections/hero/hero";
import Projects from "@/components/index-sections/projects/projects";

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <AboutMe />
        </>
    );
}
