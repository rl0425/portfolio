import classes from "./Projects.module.css"
import {useState} from "react";

function Projects(){
    const [cardHover, setCardHover] = useState([false, false, false, false, false, false])

    const updateItem = (index, newValue) => {
        setCardHover(prev => {
            const newItems = [...prev]
            newItems[index] = newValue
            return newItems
        })
    }

    const mouseoverGantt = () =>{ updateItem(0, true) }
    const mouseoutGantt = () =>{ updateItem(0, false) }
    const mouseoverFot = () =>{ updateItem(1, true) }
    const mouseoutFot = () =>{ updateItem(1, false) }
    const mouseoverEval = () =>{ updateItem(2, true) }
    const mouseoutEval = () =>{ updateItem(2, false) }
    const mouseoverSummary = () =>{ updateItem(3, true) }
    const mouseoutSummary = () =>{ updateItem(3, false) }
    const mouseoverEnter = () =>{ updateItem(4, true) }
    const mouseoutEnter = () =>{ updateItem(4, false) }
    const mouseoverNow = () =>{ updateItem(5, true) }
    const mouseoutNow = () =>{ updateItem(5, false) }


    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.title}><span>Projects</span></div>
                <div className={classes.detail}><span>* 카드 클릭 시 프로젝트 상세 내용으로 이동합니다.</span></div>
            </div>
            <div className={classes.body}>
                <div className={classes.singleCard}>
                    <div onMouseOver={mouseoverGantt} onMouseLeave={mouseoutGantt} className={classes.ganttCard}>
                        <img src={"/images/projects/ganttMain.gif"} />
                        <div className={cardHover[0] ? classes.cardBackground : `${classes.cardBackground} ${classes.noCard}`}>
                            <span>간트차트 프로젝트</span>
                        </div>
                    </div>
                </div>
                <div className={classes.multiCard}>
                    <div className={classes.areaLeft}>
                        <div onMouseOver={mouseoverFot} onMouseLeave={mouseoutFot} className={classes.fotcard}>
                            <img src={"/images/projects/fotscore.gif"} />
                            <div className={cardHover[1] ? classes.fotcardBackground : `${classes.fotcardBackground} ${classes.noCard}`}>
                                <span>FOTSCORE</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.areaRight}>
                        <div onMouseOver={mouseoverEval} onMouseLeave={mouseoutEval} className={classes.evaluationCard}>
                            <img src={"images/projects/evaluation.gif"}/>
                            <div className={cardHover[2] ? classes.evaluationCardBackground : `${classes.evaluationCardBackground} ${classes.noCard}`}>
                                <span>프로젝트 평가 기능</span>
                            </div>
                        </div>
                        <div onMouseOver={mouseoverSummary} onMouseLeave={mouseoutSummary} className={classes.evaluationCard}>
                            <img src={"images/projects/summary.gif"}/>
                            <div className={cardHover[3] ? classes.evaluationCardBackground : `${classes.evaluationCardBackground} ${classes.noCard}`}>
                                <span>프로젝트 정의 기능</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.fotCardList}>
                    <div onMouseOver={mouseoverEnter} onMouseLeave={mouseoutEnter} className={classes.fotCard}>
                        <img src={"images/projects/kised_gantt.png"}/>
                        <div className={cardHover[4] ? classes.fotCardBackground : `${classes.fotCardBackground} ${classes.noCard}`}>
                            <span>엔터프라이즈 모델 구축</span>
                        </div>
                    </div>
                    <div onMouseOver={mouseoverNow} onMouseLeave={mouseoutNow} className={classes.fotCard}>
                        <img src={"images/projects/next.png"}/>
                        <div className={cardHover[5] ? classes.fotCardBackground : `${classes.fotCardBackground} ${classes.noCard}`}>
                            <span>진행중인 프로젝트들</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
