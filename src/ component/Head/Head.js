import classes from "./Head.module.css"
function Head(){
    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <span>PGC's Portfolio</span>
            </div>
            {/*<div className={classes.rightBox}>*/}
            {/*    <div><span>Home</span></div>*/}
            {/*    <div><span>Skill</span></div>*/}
            {/*    <div><span>Project</span></div>*/}
            {/*    <div><span>Career</span></div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Head
