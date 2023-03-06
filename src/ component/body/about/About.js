import classes from "./About.module.css"
import {useState} from "react";
function About(){

    const [ex, setEx] = useState(false)
    const [ex2, setEx2] = useState(false)
    const [ex3, setEx3] = useState(false)

    setTimeout(() =>{
        setEx(true)
    }, 200)

    setTimeout(() =>{
        setEx2(true)
    }, 400)

    setTimeout(() =>{
        setEx3(true)
    }, 600)

    return (
        <div className={classes.box}>
            {/*<div className={classes.content}>*/}
            <div className={ex ? classes.content : classes.unContent}>
                <div className={classes.leftCont}>
                    <img src={"/images/aboutImg.png"}/>
                </div>
                <div className={classes.rightCont}>
                    <div className={classes.title} style={{color:"#0FC3FA"}}>
                        <span>About & Skills</span>
                        <div className={classes.description}>
                            <span>안녕하세요! 대구에 살고 있는 27살 박기찬입니다. <p/></span>
                            <span>영남대학교 컴퓨터공학과를 졸업하고 웹 개발 분야에서 1년 반 정도의 경력을 쌓았습니다. <p/></span>
                            <span>웹 개발, UI/UX에 대한 열정을 가지고 있으며 다양한 웹 기술에 대한 깊은 이해와 경험을 갖춰가고 있습니다.</span>
                        </div>
                        <div className={classes.kindBox}>
                            <div>
                                <span style={{fontWeight:"bold", color:"#ffffff"}}>생년월일</span>
                                <label style={{fontWeight:"400"}}>1997.04.25</label>
                            </div>
                            <div style={{paddingLeft:"80px", borderRight:"none"}}>
                                <span style={{fontWeight:"bold", color:"#ffffff"}}>학력</span>
                                <label style={{fontWeight:"400"}}>영남대학교 컴퓨터공학</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
