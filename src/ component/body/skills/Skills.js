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
                    <img style={{width:"67px"}} src={"images/skills/html.png"} />
                    <img style={{width:"59px"}} src={"images/skills/css.png"} />
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
                <div className={classes.versionImg}><img src={"images/Group 39.png"}/></div>
            </div>
        </div>
    )
}

export default Skills
