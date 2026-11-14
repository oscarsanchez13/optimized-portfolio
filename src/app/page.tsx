import HomeSection from "./components/HomeSection";
import Impact from "./components/Impact";
import Disciplines from "./components/Disciplines";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <div>
            <HomeSection />
            <Impact />
            <Disciplines />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Recommendations />
            <Contact />
        </div>
    );
}
