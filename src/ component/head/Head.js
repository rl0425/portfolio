import classes from "./Head.module.css"
function Head(){
    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <span>PGC'S</span>
                <span>Portfolio</span>
            </div>
            <div className={classes.rightBox}>
                <div><span>Home</span></div>
                <div><span>About</span></div>
                <div><span>Skills</span></div>
                <div><span>Projects</span></div>
                <div><span>Career</span></div>
                <div><span>Sites</span></div>
            </div>
        </div>
    )
}

export default Head