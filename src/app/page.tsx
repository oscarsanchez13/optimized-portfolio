import HomeSection from "./components/HomeSection";
import Impact from "./components/Impact";
import Disciplines from "./components/Disciplines";
import Ventures from "./components/Ventures";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import dynamic from "next/dynamic";

// Below-the-fold and heavier (Swiper, EmailJS): split into their own chunks.
// Still server-rendered, so the content is in the HTML.
const Recommendations = dynamic(() => import("./components/Recommendations"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
    return (
        <div>
            <HomeSection />
            <Impact />
            <Disciplines />
            <Ventures />
            <Projects />
            <Experience />
            <Certifications />
            <Skills />
            <Recommendations />
            <Contact />
        </div>
    );
}
