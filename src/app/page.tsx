import HomeSection from "./components/HomeSection";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Certifications from "./components/Certifications";
import GetToKnowMe from "./components/GetToKnowMe"; // Renamed
// import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <div>
            <HomeSection />
            <Projects />
            {/* <Skills /> */}
            {/* <Certifications /> */}
            <GetToKnowMe />
            {/* <Recommendations /> */}
            <Contact />
        </div>
    );
}
