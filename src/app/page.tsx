import HomeSection from "./components/HomeSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import AboutMe from "./components/AboutMe";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <div>
            <HomeSection />
            <Projects />
            <Skills />
            <Certifications />
            <AboutMe />
            <Recommendations />
            <Contact />
        </div>
    );
}
