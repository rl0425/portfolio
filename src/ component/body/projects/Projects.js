import classes from "./Projects.module.css"

function Projects(){
    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.title}><span>Projects</span></div>
                <div className={classes.detail}><span>* 카드 클릭 시 프로젝트 상세 내용으로 이동합니다.</span></div>
            </div>
            <div className={classes.body}>
                <div className={classes.singleCard}>
                    <div className={classes.ganttCard}>
                        <div className={classes.cardBackground}>
                            <span>Gantt 프로젝트</span>
                        </div>
                    </div>
                </div>
                <div className={classes.multiCard}>
                    <div className={classes.areaLeft}>
                        <div className={classes.fotcard}>
                            <div className={classes.fotcardBackground}>
                                <span>FOTSCORE</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.areaRight}>
                        <div className={classes.card}></div>
                    </div>
                </div>
                <div className={classes.singleCard}><div className={classes.card}></div></div>
            </div>
        </div>
    )
}

export default Projects
