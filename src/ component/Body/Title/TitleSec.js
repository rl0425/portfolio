import classes from "./TitleSec.module.css"
import {useState} from "react";

function TitleSec(){
    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <img />
            </div>
            <div className={classes.rightBox}>
                <div className={classes.rbContents}>
                    <div className={classes.rbtTitle}>
                        <p>Contact.</p>
                    </div>
                    <div className={classes.rbtBody}>
                        <p><label>Email.</label> qkrrlcks45@daum.net</p>
                        <p><label>Phone.</label> 010-3099-4181</p>
                        <p><label>Education.</label> Yeungnam university - Computer Science</p>
                    </div>
                </div>
                <div className={classes.rbContents}>
                    <div className={classes.rbtTitle}>
                        <p>Channel.</p>
                    </div>
                    <div className={classes.rbtBody}>
                        <p><label>Blog.</label> <a href={"https://velog.io/@rl0425"}>https://velog.io/@rl0425</a></p>
                        <p><label>GitHub.</label> <a href={"https://github.com/rl0425"}>https://github.com/rl0425</a></p>
                        <p><label>PDF.</label> <a href={"https://portfolio-gichan.s3.ap-northeast-2.amazonaws.com/pdf%2B(6).pdf"}>portfolio.pdf</a></p>
                    </div>
                </div>
                {/*<img src={"/images/profile/black6.png"}/>*/}
            </div>
        </div>
    )
}

export default TitleSec
