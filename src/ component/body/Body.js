import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Career from "./career/Career";
import Sites from "./sites/Sites";
import classes from "./Body.module.css"
import TitleSec from "./title/TitleSec";
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
