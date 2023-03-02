import classes from "./Skills.module.css"

function Skills(){
    return (
        <div className={classes.box}>
            <div className={classes.st}>
                <div className={classes.imgBox}>
                    <img style={{width:"60px"}} src={"/images/skills/html5.png"}/>
                    <img style={{width:"60px"}} src={"/images/skills/css3.png"}/>
                    <img style={{width:"50px", margin:"0 4px 0 4px"}} src={"/images/skills/js.png"}/>
                    <img style={{width:"120px"}} src={"/images/skills/jquary.png"}/>
                    <img style={{width:"140px"}} src={"/images/skills/react.png"}/>
                    <img style={{width:"120px"}} src={"/images/skills/redux.png"}/>
                    <img style={{width:"70px"}} src={"/images/skills/node.png"}/>
                    <img style={{width:"130px"}} src={"/images/skills/express.png"}/>
                    <img style={{width:"120px"}} src={"/images/skills/mongo.png"}/>
                </div>
                <div className={classes.kind}><span>Frontend & Environment</span></div>
            </div>
            <div className={classes.nd}>
                <div className={classes.imgBox}>
                    <img src={"/images/skills/git.png"}/>
                    <img src={"/images/skills/github.png"}/>
                    <img src={"/images/skills/sourcetree.png"}/>
                    <img src={"/images/skills/zeplin.png"}/>
                    <img src={"/images/skills/figma.png"}/>
                </div>
                <div className={classes.kind}><span>Version Control & Communication</span></div>
            </div>
        </div>
    )
}

export default Skills
