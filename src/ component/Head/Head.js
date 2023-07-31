import classes from "./Head.module.css"
function Head(){
    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <p>PGC's Portfolio</p>
            </div>
            {/*<div className={classes.rightBox}>*/}
            {/*    <div><p>Home</p></div>*/}
            {/*    <div><p>Skill</p></div>*/}
            {/*    <div><p>Project</p></div>*/}
            {/*    <div><p>Career</p></div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Head
