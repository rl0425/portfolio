import classes from "./Skills.module.css"
import {useState} from "react";

function Skills(){
    const [ex, setEx] = useState(false)

    setTimeout(() =>{
        setEx(true)
    }, 200)

    return (
        <div className={classes.box}>
            <div className={ex ? classes.smallBox : classes.smallUnBox}>
                <div className={classes.frontSpan}><span>FrontEnd & Environment</span></div>
                <div className={classes.frontImg}>
                    <img style={{width:"50px"}} src={"images/skills/html2.png"} />
                    <img style={{width:"50px"}} src={"images/skills/css2.png"} />
                    <img style={{width:"50px"}} src={"images/skills/js.png"} />
                    <img style={{width:"120px"}} src={"images/skills/jquary.png"} />
                    <img style={{width:"120px"}} src={"images/skills/react.png"} />
                    <img style={{width:"120px"}} src={"images/skills/redux.png"} />
                    <img style={{width:"85px"}}src={"images/skills/node.png"} />
                    <img style={{width:"110px"}} src={"images/skills/express.png"} />
                    <img style={{width:"120px"}}src={"images/skills/mongo.png"} />
                </div>
            </div>
            <div className={ex ? classes.smallBox : classes.smallUnBox}>
                <div className={classes.versionSpan}><span>Version Control & Communication</span></div>
                <div className={classes.versionImg}>
                    <img style={{width:"80px"}} src={"images/skills/git.png"} />
                    <img style={{width:"110px"}} src={"images/skills/github.png"} />
                    <img style={{width:"120px"}} src={"images/skills/sourcetree.png"} />
                    <img style={{width:"100px"}} src={"images/skills/zeplin.png"} />
                    <img style={{width:"105px"}} src={"images/skills/figma.png"} />
                </div>
            </div>
        </div>
    )
}

export default Skills
