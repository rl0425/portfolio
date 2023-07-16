
import classes from "./TitleSec.module.css"
import {useState} from "react";

function TitleSec(){
    const [ex, setEx] = useState(false)
    const [ex2, setEx2] = useState(false)
    const [ex3, setEx3] = useState(false)
    const [ex4, setEx4] = useState(false)

    setTimeout(() =>{
        setEx(true)
    }, 500)
    setTimeout(() =>{
        setEx3(true)
    }, 650)
    setTimeout(() =>{
        setEx2(true)
    }, 650)

    setTimeout(() =>{
        setEx4(true)
    }, 200)

    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <img />
            </div>
            <div className={classes.rightBox}>
                <div className={classes.rbContents}>
                    <div className={classes.rbtTitle}>
                        <span>Contact.</span>
                    </div>
                    <div className={classes.rbtBody}>
                        <span><label>Email.</label> qkrrlcks45@daum.net</span>
                        <span><label>Phone.</label> 010-3099-4181</span>
                        <span><label>Education.</label> Yeungnam university - Computer Science</span>
                    </div>
                </div>
                <div className={classes.rbContents}>
                    <div className={classes.rbtTitle}>
                        <span>Channel.</span>
                    </div>
                    <div className={classes.rbtBody}>
                        <span><label>Blog.</label> <a href={"https://velog.io/@rl0425"}>https://velog.io/@rl0425</a></span>
                        <span><label>GitHub.</label> <a href={"https://github.com/rl0425"}>https://github.com/rl0425</a></span>
                    </div>
                </div>
                {/*<img src={"/images/profile/black6.png"}/>*/}
            </div>
        </div>
    )
}

export default TitleSec
