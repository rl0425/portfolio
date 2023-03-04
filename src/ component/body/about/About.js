import classes from "./About.module.css"
function About(){
    return (
        <div className={classes.box}>
            <div className={classes.content}>
                <div className={classes.leftCont}>
                    <img src={"/images/aboutImg.png"}/>
                </div>
                <div className={classes.rightCont}>
                    <div className={classes.title} style={{color:"#0098fe"}}>
                        <span>About & Skills</span>
                        <div className={classes.description}>
                            <span>안녕하세요! 대구에 살고 있는 27살 박기찬입니다. <p/> </span>
                            <span>영남대학교 컴퓨터공학과를 22년에 졸업해 웹 개발 분야에서 <br/> 1년 반 정도의 경력을 쌓았습니다. <p/></span>
                            <span>웹 개발, UI/UX에 대한 열정을 가지고 있으며 다양한 웹 기술에 대한 <br/> 깊은 이해와 경험을 갖추기 위해 최선을 다하고 있습니다.</span>
                        </div>
                        <div className={classes.kindBox}>
                            <div>
                                <span style={{color:"rgb(173 170 170)"}}>생년월일</span>
                                <label>1997.04.25</label>
                            </div>
                            <div style={{paddingLeft:"80px", borderRight:"none"}}>
                                <span style={{color:"rgb(173 170 170)"}}>학력</span>
                                <label>영남대학교 컴퓨터공학</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
