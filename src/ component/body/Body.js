import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Career from "./career/Career";
import Sites from "./sites/Sites";
import Title from "./title/Title";
import classes from "./Body.module.css"

function Body(){
    return (
        <div className={classes.box} style={{position:"relative", marginBottom:"80px"}}>
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
