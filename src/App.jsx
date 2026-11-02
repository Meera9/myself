import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import Services from "./components/services/Services";
import useHashScroll from "./hooks/useHashScroll.js";

function App() {
    useHashScroll();

    return (
        <div className="bg-slate-950 text-white overflow-x-hidden">

            <Navbar/>

            <main className="pt-20">
                <Hero/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Services/>
                <Contact/>
            </main>

            <Footer/>

        </div>
    );
}

export default App;