import classes from "./About.module.css"
function About(){
    return (
        <div className={classes.box}>
            <div className={classes.title}>
                <span>About Me</span>
            </div>
            <div className={classes.content}>
                <div className={classes.leftCont}>
                    <img src={"/images/aboutImg.png"}/>
                </div>
                <div className={classes.rightCont}>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/name.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>이름</span>
                            <label>박기찬</label>
                        </div>
                    </div>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/birth.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>생년월일</span>
                            <label>1997.04.25</label>
                        </div>
                    </div>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/call.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>연락처</span>
                            <label>010-3099-4181</label>
                        </div>
                    </div>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/address.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>주소지</span>
                            <label>대구 북구</label>
                        </div>
                    </div>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/email.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>이메일</span>
                            <label>qkrrlcks45@daum.net</label>
                        </div>
                    </div>
                    <div className={classes.detailBox}>
                        <img src={"/images/about/study.png"} className={classes.detailImg}/>
                        <div className={classes.detailFontBox}>
                            <span>학력</span>
                            <label>영남대학교 컴퓨터공학</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About