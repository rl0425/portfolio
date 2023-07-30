import classes from "./Title.module.css"
import {useState} from "react";

function Title(){
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
                <div className={classes.detailBox}>
                    <div className={ex3 ? classes.borderBox : classes.nonBorderBox}>

                    </div>
                    <div className={classes.explainBox}>
                        <div className={ex ? classes.nonDisplay : classes.displayBox}>
                            <span>사용자와 가장 가까운 개발자가 되고싶은</span>
                        </div>
                        <div className={ex2 ? classes.nonDisplay : `${classes.highlight} ${classes.displayBox}`}>
                            <span style={{color:"rgb(15, 195, 250"}}>프론트엔드 웹 개발자 박기찬</span><label>입니다.</label>
                        </div>
                    </div>
                </div>
                <div className={ex4 ? classes.kindBox : classes.nonKindBox}>
                    <div className={classes.kindExplain}>
                        <span style={{fontWeight:"bold"}}>️📪 주소지</span>
                        <label>대구 북구</label>
                    </div>
                    <div className={classes.kindExplain} style={{paddingLeft:"60px", minWidth:"167px"}}>
                        <span style={{fontWeight:"bold"}}>✉️ Email</span>
                        <label>qkrrlcks45@daum.net</label>
                    </div>
                    <div className={classes.kindExplain} style={{paddingLeft:"60px", minWidth:"120px", borderRight:"none"}}>
                        <span style={{fontWeight:"bold"}}>📱 연락처</span>
                        <label>010-3099-4181</label>
                    </div>
                </div>
            </div>
            <div className={classes.rightBox}>
                {/*<img src={"/images/profile/black6.png"}/>*/}
            </div>
        </div>
    )
}

export default Title
