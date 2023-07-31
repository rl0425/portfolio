import classes from "./About.module.css"
import {useState} from "react";
function About(){



    return (
        <div className={classes.box}>
            {/*<div className={classes.content}>*/}
            <div className={classes.content}>
                <div className={classes.rightCont}>
                    <div className={classes.title} style={{color:"#0098fe"}}>
                        <p>Introduce.</p>
                        <div className={classes.description}>
                            <p>
                                1년 반 차 주니어 개발자로 스타트업에서 웹 서비스를 기획/개발/배포하였습니다. 주로 Front-end 개발을 담당했으며 필요에 따라 PM 역할을 겸하였습니다.
                                작은 규모의 팀에서 FE 개발자로 40억 투자를 유치하고, 140곳이 넘는 고객사를 확보하는 회사로 성장할 때까지의 필요한 개발 역량에 이바지했던 경험이 있습니다.
                            </p>
                            <p>
                                반복되는 일을 자동화하고 효율적으로 개선하는 일을 좋아합니다. 팀 전체 구성원들의 단순하거나 반복되는 업무 시간을 최소화하기 위해
                                코드 공통화와 기술문서를 개선하고 개발한 경험이 있습니다. 또한, 지속적인 발전은 혼자가 아닌 팀 단위의 큰 규모의 개발에서 이뤄진다고
                                생각하기에 다양한 직무의 팀 구성원들과 적극적으로 소통하며 협업해왔습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
