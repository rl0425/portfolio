import classes from "./Modal.module.css"
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {modalActions} from "../../store/modalSlice";

function Modal(){
    const dispatch = useDispatch()
    const [time, setTime] = useState(false)
    const type = useSelector((state) => state.modal.kind)
    const [data, setData] = useState({
        url:null,
        date:null,
        name:null,
        summary:null,
        process:null,
        tech:null,
        complete:null
    })

    const exitBtn = () => {
        dispatch(modalActions.changeState({
            open:false,
            kind:null
        }))
    }

    setTimeout(() => {
        setTime(true)
    }, 100)

    useEffect(() =>{
        if(type === "gantt"){
            setData({
                url: "https://work.clovine.com",
                date: (
                    <span>2021.12.01 - 2022.03.01</span>
                ),
                name: "간트차트 프로젝트",
                summary: (
                    <div>
                        <span>
                            해당 프로젝트는 이전 회사(Heaven Tree)에서 진행한 프로젝트입니다. <p />
                            간트 차트는 프로젝트 일정을 시각적으로 보여주는 도구 중 하나로, 많은 개발자와 사용자가 이용합니다. <p/>
                            프로젝트 일정을 시각적으로 표현하기 위해 회사는 간트 차트의 필요성을 확인하였고, 해당 파트를 맡게 된 저는 관련 시장 조사 후 DHTMLX 사의 간트 차트 라이브러리를 이용하기로 결정하였습니다.  <p/>
                            이전 회사의 솔루션 프로그램은 프로젝트를 관리하는 도구로, 각종 태스크와 일정 관리가 주된 기능입니다. <p/>
                            이 프로젝트의 주요 목표는 간트 차트를 이용하여 이러한 태스크의 일정과 이벤트, 혹은 프로젝트와 사용자들 간의 관계를 시각적으로 나타내는 것이었습니다. <p />
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <div>
                            <span>

                                {/*시장에는 Atlassian의 Jira, Asana, Flow와 같이 Gantt 차트 기능을 제공하는 많은 회사가 있었지만 <p/> 모두 다른 주요 기능에 집중하고*/}
                                {/*Gantt 차트의 많은 기능 중 일부만 사용했습니다. 이에 반해 우리 회사는 제공되는 Gantt 차트 라이브러리의 모든 기능을 활용하고 <p/>*/}
                                {/*효과적인 프로젝트 관리를 위해 이를 완벽하게 통합하는 것을 목표로 했습니다.*/}
                                시중에는 아틀라시안(Atlassian)사의 Jira, 아사나(Asana), flow(flow) 등 간트차트 기능을 제공하는 회사가 다수 있었습니다. <p />
                                하지만 각 회사마다 추구하는 메인 기능이 달랐고 간트차트의 많은 기능 중 일부분만을 사용했습니다. <p />
                                이전 회사에서는 제공받은 간트차트 라이브러리의 모든 기능들을 활용하고, 효과적인 프로젝트 관리를 위해 모든 기능들의 연동을 목표로 지정했습니다. <p/>
                            </span>
                            <div className={classes.middleImgSet}>
                                <img style={{width:"60%", marginRight:"40px", opacity:"0.8"}} src={"images/projects/modalGantt1.png"}/>
                                <span>초창기 기획안</span>
                            </div>
                            <div>
                                <span>따라서 다음과 같은 기능들의 제공을 목표로 했습니다.</span>
                                <ul className={classes.ganttUl}>
                                    <li>원하는 태스크나 프로젝트의 위치에서 태스크 생성 및 삭제, 생성된 태스크의 일정 생성 및 삭제</li>
                                    <li>선택된 지점(태스크, 프로젝트)에서 마일스톤 생성 및 삭제, 생성된 마일스톤 수정 및 삭제 기능</li>
                                    <li>태스크나 프로젝트 사이의 링크 및 종속성 연결 기능</li>
                                    <li>원하는 태스크나 프로젝트에 현재 참여된 사용자 추가 기능</li>
                                    <li>태스크를 한 눈에 볼 수 있는 Task View 및  맴버별로 각 태스크를 확인할 수 있는 Member View 제공</li>
                                    <li>간트차트를 PDF, PNG, Excel 파일로 추출할 수 있는 기능</li>
                                    <li>태스크의 일정 딜레이 기능 및 크리티컬 패스 확인 기능</li>
                                    <li>Day, Month, Qtr, Semi-Ann 등 날짜 별 View 변경 기능, 전체 화면 및 그리드 영역 설정과 정렬 기능 제공</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ),
                tech: (
                    <div className={classes.techBox}>
                        <img style={{width:"50px"}} src={"images/skills/html2.png"} />
                        <img style={{width:"50px"}} src={"images/skills/css2.png"} />
                        <img style={{width:"50px"}} src={"images/skills/js.png"} />
                        <img style={{width:"120px"}} src={"images/skills/jquary.png"} />
                        <img style={{width:"85px"}}src={"images/skills/node.png"} />
                        <img style={{width:"110px"}} src={"images/skills/express.png"} />
                        <img style={{width:"120px"}}src={"images/skills/mongo.png"} />
                    </div>
                ),
                complete: (
                    <div>
                        <div className={classes.hardSpan}>
                            {/*<span>Solving</span>*/}
                            <label style={{lineHeight:"28px"}}>
                                &nbsp; 가장 어려웠던 부분은 라이브러리의 기능을 원하는 대로 자유자재로 활용하는 것이 어려웠습니다. 자사의 프로그램은 이미 간트차트의 도입을 고려하지 않은 상태에서 코드가 짜여져 있었고, <br/>
                                처음 사용하는 큰 라이브러리이기 때문에 관련 문서를 이해하고 활용하는 부분도 쉽지 않았습니다 <br/>

                                또한 프로젝트의 모든 데이터를 가져오고 수정 기능을 제공해야 했기 때문에, 데이터를 불러오는 과정에서 DB 쿼리 최적화 문제도 발생했습니다. <br/> 데이터가 삽입될 경우의 수를 정확히 기획하지 않아
                                무결성이 깨진 더미 데이터의 문제도 있었습니다.<p/>

                                이러한 문제를 해결하기 위해, 프로젝트를 시작하기 전에 라이브러리의 문서를 꼼꼼하게 읽고, 사용 방법을 익히는 시간을 먼저 가졌습니다. <br/>
                                라이브러리의 내부 동작 원리를 이해하고 로딩하는 방법을 선택했으며, 버전 관리 및 자사의 프로그램과의 연동성에 주의를 기울였습니다. <br/>
                                또한, 대용량 데이터를 처리하는데 효율적인 기술인 nodeJs 를 사용하였지만, DB 쿼리문을 제대로 작성하지 않으면 성능의 큰 손실이 있음을 확인하였습니다. <br/>
                                따라서, 좀 더 효율적이고 중복되지 않는 쿼리문을 작성해서 데이터를 가공하였습니다. <p/>

                                공동 개발을 해야하는 프로젝트에서는 데이터의 무결성 유지, 보안적인 부분, 데이터의 백업 등 모든 요소를 감안하고 기획한 후 개발을 시작해야 한다는 점을 깨달은 프로젝트였습니다. <br/>
                                또한, 추후 간트차트가 다른 기능과 페이지에서도 쓰이는 일이 있었는데, 함수를 공통화 하지 않아 똑같은 코드를 새로 작성하거나 수정하는 부분이 매우 많았습니다. <br/> 이러한 경험을 통해,
                                협업에 있어 기능이나 함수들을 공통화 하는 것의 필요성을 뼈저리게 느꼈습니다. <p/>


                                현업에서 처음으로 참여한 큰 프로젝트에서는 많은 실수와 오류가 있었습니다. 이를 통해 동료들과의 협업과 의사소통의 중요성을 다시 한번 깨달았으며, <br/> 개발 실력의 부족한 부분을 인지하게 되었습니다.
                                프로젝트 완성을 위해 충분한 공수기간이 주어지지 않았지만, 열심히 노력하여 다양한 기능 구현 요구사항을 해결하였고, <br/>결국 제 페이지와 코드가 회사의 메인 프로그램에 추가되는 결과를 얻을 수 있었습니다.

                            </label>
                            <div className={classes.ganttImgSet}>
                                <img src={"/images/projects/ganttMain.png"}/>
                                <img src={"/images/projects/view.gif"}/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if(type === "fotscore"){
            setData({
                url: "https://work.clovine.com",
                name: "FOTSCORE",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
        if(type === "evaluation"){
            setData({
                url: "https://work.clovine.com",
                date: (
                    <span>2022.06.13 - 2022.07.12</span>
                ),
                name: "프로젝트 평가",
                summary: (
                    <div>
                        <span>
                            해당 프로젝트는 이전 회사인 HeavenTree에서 진행한 프로젝트입니다. <p/>
                            회사의 메인 기능인 프로젝트 관리에 있어서, 프로젝트를 완료했을 경우 해당 프로젝트에 대한 평가항목이 따로 존재하지 않는 점이 문제였습니다. <p/>
                            경영진들은 이러한 기능이 다양한 고객층을 확보하는 데 필요하다고 판단하였고, 따라서 저는 해당 기능의 프로젝트 매니저로 지정되었습니다. <p/>
                            이 프로젝트의 주요 목표는 완료된 프로젝트의 다양한 가치를 여러 지표를 통해 평가하는 기능을 사용자들에게 제공하는 것입니다.
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <span>
                            개발 전, 프로젝트의 다양한 측면을 종합적으로 평가하기 위한 기준을 설정해야 했습니다. <p/>
                            고객들이 다양하기 때문에 특정 분야의 평가 기준만 적용하기 어려워, 종합적인 평가 항목을 도출했습니다. <p/>
                            이러한 항목은 다음과 같습니다.
                        </span>
                        <ul className={classes.evaluationUi}>
                            <li>프로젝트 개요에 작성된 목표 평가 - 다섯 단계로 구성된 평가 기준 및 코멘트 제공</li>
                            <li>상태별 태스크의 개수, 지연 및 초과 일정 확인 - 퍼센트 차트를 활용한 시각화</li>
                            <li>태스크의 계획 완료 일정과 실제 완료 일정 확인 - 그래프를 통한 시각화</li>
                            <li>프로젝트 참여자에 대한 가중치 설정 및 평가점수 - 프로젝트별로 다른 산정 기준 제공</li>
                        </ul>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"50%"}} src={"images/modal/evaluation2.png"}/>
                            <span>초창기 기획안</span>
                        </div>
                        <span>따라서 아래와 같은 기능들을 제공하는 것을 목표로 했습니다.</span>
                        <ul className={classes.evaluationUi}>
                            <li>카테고리별(Goals, Task, Task Chart, Member Evaluation) 댓글 기능</li>
                            <li>개요에 작성된 목표(Goals)에 대한 평가 및 댓글 기능</li>
                            <li>각 상태별 태스크의 개수를 완료된 태스크와 비교한 막대 그래프</li>
                            <li>태스크들의 예정 완료 일정과 실제 완료 일정을 데이터로 사용하여 소멸 차트 생성</li>
                            <li>프로젝트 참가자들에 대한 가중치 설정 및 4가지 산정 기준 제공</li>
                            <li>참여자들이 담당하고 있는 태스크 및 총 지연일과 단축일 정보를 보여주는 테이블(표) 생성</li>
                            <li>다른 페이지에 참여 프로젝트 리스트와 프로젝트 포인트 총점기능 제공</li>
                        </ul>
                        <span>위와 같은 기능들은 고객들의 다양한 요구사항을 충족시키기 위해 개발되었으며, 효율적이고 직관적인 프로젝트 관리를 돕기 위한 항목이였습니다.</span>
                    </div>
                ),
                tech: (
                    <div className={classes.techBox}>
                        <img style={{width:"50px"}} src={"images/skills/html2.png"} />
                        <img style={{width:"50px"}} src={"images/skills/css2.png"} />
                        <img style={{width:"50px"}} src={"images/skills/js.png"} />
                        <img style={{width:"120px"}} src={"images/skills/jquary.png"} />
                        <img style={{width:"85px"}}src={"images/skills/node.png"} />
                        <img style={{width:"110px"}} src={"images/skills/express.png"} />
                        <img style={{width:"120px"}}src={"images/skills/mongo.png"} />
                    </div>
                ),
                complete: (
                    <div>
                        <span style={{lineHeight:"28px"}}>
                            해당 프로젝트는 각 항목 평가를 위해 필요한 데이터를 모두 가져와야 했기 때문에 기존 프로젝트보다 쿼리문이 복잡했습니다. <br/>
                            또한 태스크 일정 평가를 위한 소멸차트를 작성하기 위해 라이브러리를 사용했습니다. 기능 요구 사항에서 보다 복잡한 차트의 설정이 필요했기 때문에 <br/>
                            차트 라이브러리의 문서를 이해하고 활용하는 데에 다소의 시간이 소요됐습니다. <p />

                            다양한 산업군에서 사용될 수 있는 평가 시스템을 개발하는 것이 목표였습니다. 하지만 이를 위한 평가 기준을 세우는 것이 매우 어려웠습니다. <br/>
                            초기 기획 회의에서 이러한 안건에 대해 논의를 하였으나, 의견이 매우 다양하고 정확한 래퍼런스 또한 존재하지 않아서 막연한 느낌으로 프로젝트를 시작하게 되었습니다. <br/>
                            이러한 상황에서 프로젝트를 진행하다보니 중간중간 스프린트나 디자인을 끝마칠때마다 새로운 문제점이 발생하였고, 결국 기획안을 다시 한번 정립하는 시간을 가졌습니다. <br/>
                            초기에 기획을 정확히 세우지 않아서 날린 시간과 노력이 너무 아까웠고, 이 부분에서 프로젝트의 기획적인 부분의 중요성을 다시 한 번 깨달았습니다. <p />

                            또한 해당 프로젝트에서는 각 항목의 자연스러운 흐름을 연결하기 위해 CSS 애니메이션을 보다 깊게 공부하였습니다. <br/>
                            이를 통해 사용자 경험을 개선하고 더욱 자연스러운 인터페이스를 제공하였습니다. 하지만 프로젝트 완료 후 테스트를 진행하면서 <br/>
                            사용자들이 해당 기능을 쉽게 이해하지 못하는 문제가 발생하였습니다. 이를 해결하기 위해 막바지에 새로운 스프린트를 생성하고 <br/>
                            자잘한 요소들을 수정하는 시간이 필요하였습니다. 이를 통해 새로운 기능과 페이지를 제공하기 전에는 사전 테스트가 반드시 필요하며, <br/>
                            사용자의 관점을 최우선으로 생각하는 접근이 필요하다는 점을 깨달았습니다. <p/>

                            위 프로젝트에서 데이터 처리와 라이브러리 활용, 그리고 사용자 인터페이스 개선에 많은 경험을 쌓았습니다. <br/>
                            이러한 경험이 제가 지니고 있는 프론트엔드 기술과 디자인 감각을 보다 높은 수준으로 발전시켜주었습니다. <p/>

                        </span>
                        <div className={classes.evaluationSet}>
                            <img style={{width: "42%"}}src={"images/modal/evaluation3.png"}/>
                            <img style={{width: "50%"}} src={"images/projects/evaluation.gif"}/>
                        </div>
                    </div>
                )
            })
        }
        if(type === "summary"){
            setData({
                url: "https://work.clovine.com",
                name: "프로젝트 개요",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
        if(type === "enterprise"){
            setData({
                url: "https://work.clovine.com",
                name: "엔터프라이즈 모델",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
        if(type === "ing"){
            setData({
                // url: "https://work.clovine.com",
                name: "진행중인 프로젝트",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
    }, [])

    return (
        <div className={time ? classes.background : `${classes.background} ${classes.noOpacity}`}>
            <div className={classes.box}>
                <div className={classes.head}>
                    <div className={classes.title}>{data.name}</div>
                    <div onClick={exitBtn} className={classes.exit}><img src={"images/modal/reject.png"}/></div>
                    {/*<div className={classes.type}></div>*/}
                </div>
                <div className={classes.body}>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/calendar.png"} /><span>Project Duration</span></div>
                        <div className={classes.categoryData}>{data.date}</div>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/placeholder1.png"}/><span>Background</span></div>
                        <div className={classes.categoryData}>{data.summary}</div>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/desktop.png"}/><span>Develop Process</span></div>
                        <div className={classes.categoryData}>{data.process}</div>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/fireworks.png"}/><span>Summary</span></div>
                        <div className={classes.categoryData}>{data.complete}</div>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/tech.png"}/><span>Technology Stack(s)</span></div>
                        <div className={classes.categoryData}>{data.tech}</div>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/neural.png"} /><span>URL</span></div>
                        <div className={classes.categoryData}>{data.url}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
