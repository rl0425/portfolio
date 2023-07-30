import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Career from "./Career/Career";
import Sites from "./Sites/Sites";
import classes from "./Body.module.css"
import TitleSec from "./Title/TitleSec";
import {useEffect} from "react";
import {modalActions} from "../../store/modalSlice";

function Body(){
    return (
        <div className={classes.box} style={{position:"relative", marginBottom:"80px"}}>
            <TitleSec />
            <About />
            <Career />
            <Projects />
            <Skills />
            <Sites />
        </div>
    )
}

export default Body
