import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Career from "./career/Career";
import Sites from "./Sites/Sites";
import Title from "./title/Title";

function Body(){
    return (
        <div style={{position:"relative"}}>
            <Title />
            <About />
            <Skills />
            <Projects />
            <Career />
            <Sites />
        </div>
    )
}

export default Body