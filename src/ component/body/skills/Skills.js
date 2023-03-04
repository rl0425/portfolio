import classes from "./Skills.module.css"

function Skills(){
    return (
        <div className={classes.box}>
            <div className={classes.smallBox}>
                <div className={classes.frontSpan}><span>FrontEnd & Environment</span></div>
                <div className={classes.frontImg}><img src={"images/Group 31.png"}/></div>
            </div>
            <div className={classes.smallBox}>
                <div className={classes.versionSpan}><span>Version Control & Communication</span></div>
                <div className={classes.versionImg}><img src={"images/Group 39.png"}/></div>
            </div>
        </div>
    )
}

export default Skills
