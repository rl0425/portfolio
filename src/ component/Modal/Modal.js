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
                url: (
                    <span><a href={"https://work.clovine.com"}>https://work.clovine.com</a> > workspace > project > task > gantt chart</span>
                ),
                date: (
                    <span>2021.12.01 - 2022.03.01</span>
                ),
                name: "간트차트 프로젝트",
                summary: (
                    <div>
                        <span>
                            해당 프로젝트는 이전 회사(Heaven Tree)에서 진행한 프로젝트입니다. <p />
                            간트 차트는 프로젝트 일정을 시각적으로 보여주는 도구 중 하나로, 많은 개발자와 사용자가 이용합니다. <p/>
                            프로젝트 일정을 시각적으로 표현하기 위해 회사는 간트 차트의 필요성을 재고하였고, 해당 파트를 맡게 된 저는 관련 시장 조사 후 DHTMLX 사의 간트 차트 라이브러리를 이용하기로 결정하였습니다.  <p/>
                            이전 회사의 솔루션 프로그램은 프로젝트를 관리하는 도구 툴로, 각종 태스크와 일정 관리가 주된 기능입니다. <p/>
                            이 프로젝트의 주요 목표는 간트 차트를 이용하여 이러한 태스크의 일정과 이벤트, 혹은 프로젝트와 사용자들 간의 관계를 시각적으로 나타내는 것이었습니다. <p />
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <div>
                            <span>
                                시중에는 아틀라시안(Atlassian)사의 Jira, 아사나(Asana), flow(flow) 등 간트차트 기능을 제공하는 회사가 다수 있었습니다. <p />
                                하지만 각 회사마다 추구하는 메인 기능이 달랐고 간트차트의 많은 기능 중 일부분만을 사용했습니다. <p />
                                회사에서는 제공받은 간트차트 라이브러리의 모든 기능들을 활용하고, 효과적인 프로젝트 관리를 위해 활용된 기능들의 연동을 목표로 지정했습니다. <p/>
                            </span>
                            <div className={classes.ganttMiddleImgSet}>
                                <p/>
                                <div className={classes.gmIsTop}>
                                    <img src={"images/projects/modalGantt1.png"}/>
                                    <img src={"images/projects/gan1.png"}/>
                                    <img src={"images/projects/gan2.png"}/>
                                </div>
                                <div className={classes.gmIsBottom}>
                                    <span style={{fontSize:"12px"}}>디자인 가이드</span><p/>
                                </div>
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
                        <img style={{width:"85px"}} src={"images/skills/node.png"} />
                        <img style={{width:"110px"}} src={"images/skills/express.png"} />
                        <img style={{width:"120px"}} src={"images/skills/mongo.png"} />
                    </div>
                ),
                complete: (
                    <div>
                        <div className={classes.hardSpan}>
                            {/*<span>Solving</span>*/}
                            <label style={{lineHeight:"28px"}}>
                                가장 어려웠던 부분은 라이브러리의 기능을 원하는 대로 자유자재로 활용하는 것이 어려웠습니다. 자사의 프로그램은 이미 새로운 간트차트의 도입을 고려하지 않은 상태에서 기존 코드가 짜여져 있었고,
                                처음 사용하는 큰 라이브러리이기 때문에 관련 문서를 이해하고 활용하는 부분도 쉽지 않았습니다 <br/>

                                또한 프로젝트의 모든 데이터를 가져오고 그 데이터의 수정 기능을 제공해야 했기 때문에, 데이터를 불러오는 과정에서 DB 쿼리 최적화 문제도 발생했습니다. 초기에는 데이터가 삽입될 경우의 수를 정확히 기획하지 않아
                                무결성이 깨진 더미 데이터의 문제도 있었습니다.<p/>

                                이러한 문제를 해결하기 위해, 프로젝트를 시작하기 전에 라이브러리의 문서를 꼼꼼하게 읽고, 사용 방법을 익히는 시간을 먼저 가졌습니다. <br/>
                                라이브러리의 내부 동작 원리를 이해하고 로딩하는 방법을 선택했으며, 버전 관리 및 자사의 프로그램과의 연동성에 주의를 기울였습니다. <br/>
                                또한, 대용량 데이터를 처리하는데 효율적인 기술인 nodeJs 를 사용하였지만, DB 쿼리문을 제대로 작성하지 않으면 성능의 큰 손실이 있음을 확인하였습니다.
                                따라서, 좀 더 효율적이고 중복되지 않는 쿼리문을 작성해서 데이터를 가공하였습니다. <p/>

                                공동 개발을 해야하는 프로젝트에서는 데이터의 무결성 유지, 보안적인 부분, 데이터의 백업 등 모든 요소를 감안하고 기획한 후 개발을 시작해야 한다는 점을 깨달은 프로젝트였습니다. <br/>
                                또한, 추후 간트차트가 다른 기능과 페이지에서도 쓰이는 일이 있었는데, 함수를 공통화 하지 않아 똑같은 코드를 새로 작성하거나 수정하는 부분이 매우 많았습니다. 이러한 경험을 통해,
                                협업에 있어 기능이나 함수들을 공통화 하는 것의 필요성을 뼈저리게 느꼈습니다. <p/>


                                현업에서 처음으로 참여한 큰 프로젝트에서는 많은 실수와 오류가 있었습니다. 이를 통해 동료들과의 협업과 의사소통의 중요성을 다시 한번 깨달았으며, <br/> 개발 실력의 부족한 부분을 인지하게 되었습니다.
                                프로젝트 완성을 위해 충분한 공수기간이 주어지지 않았지만, 열심히 노력하여 다양한 기능 구현 요구사항을 해결하였고, 결국 제 페이지와 코드가 회사의 메인 프로그램에 추가되는 결과를 얻을 수 있었습니다.
                            </label>
                            <p/>
                            <div className={classes.ganttImgSet}>
                                <img src={"/images/projects/move.gif"}/>
                                <img src={"/images/projects/view.gif"}/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if(type === "fotscore"){
            setData({
                url: (
                    <span><a href={"https://dd415g5szsg3k.cloudfront.net/"}>https://dd415g5szsg3k.cloudfront.net/</a></span>
                ),
                date: (
                    <span>2023.02.01 - 2023.02.16</span>
                ),
                name: "FOTSCORE",
                summary: (
                    <div>
                        <span>
                            평소 해외 축구를 즐겨보는데, 주말 새벽에는 경기를 보기 어렵기 때문에 경기 결과와 영상을 찾아보곤 했습니다. <p/>
                            그러나 이 과정이 매번 귀찮고 번거로웠습니다. 그래서 라이트한 해외축구 팬들을 위한 앱을 만들면 좋겠다는 아이디어가 떠올랐고, <p/>
                            그것을 리액트로 구현해보기로 결심했습니다. 해당 프로젝트는 앱으로 출시 후, 실제 사용자를 유치하는 것을 목표로 하고 있습니다. <p/>
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <span>
                            해외 축구 영상과 결과를 가져오기 위해 무료 API를 찾던 중 국내에는 제가 원하는 정보를 제공하는 API가 없었습니다. <p/>
                            그러나 해외 사이트인 ESPN 에서 요구사항에 적합하는 API를 발견했고 저작권 관련 정보를 확인한 후 개발을 시작했습니다. <p/>
                            사용자이자 개발자로써 필요한 기능이 명확했기 때문에 빠르게 프로젝트를 시작할 수 있었습니다. <p/>
                            React의 활용과 학습이 주된 목적이였기 때문에 React Native 를 사용해서 앱을 만들기보다는 React를 사용해 웹앱을 개발하기로 결정했습니다. <p/>
                            필요한 데이터는 네 개의 리그 (프리미어리그, 라리가, 세리에 A, 분데스리가) 의 일정, 결과, 팀에 대한 정보였고 <p/>
                            ESPN API 의 Document 를 조사한 후 앱 개발을 시작했습니다. <p/>
                        </span>
                        <div className={classes.middleImgSet}>
                            <p/>
                            <img style={{width:"80%"}} src={"/images/projects/fot.png"} />
                            <img style={{width:"80%"}} src={"/images/projects/fot2.png"} />
                            <span style={{fontSize:"12px"}}>api 제공 사이트/ 디자인 기획안</span>
                            <p/>
                        </div>
                        <span>
                            구현이 필요한 기능은 다음과 같았습니다.
                        </span>
                        <ul className={classes.evaluationUi}>
                            <li>어제, 오늘, 다음 날의 경기 결과와 일정이 확인 가능한 페이지</li>
                            <li>각 경기 결과의 요약, 하이라이트, 매치 스탯을 확인 가능한 링크 연결</li>
                            <li>리그별 최신 이슈와 뉴스를 확인할 수 있는 페이지</li>
                            <li>리그의 순위와 각종 정보를 확인할 수 있는 리그 테이블 페이지</li>
                            <li>각 페이지의 자연스러운 터치 및 애니메이션 효과</li>
                            <li>카테고리별 컨텐츠마다 네 개의 리그 정보 데이터 제공</li>
                        </ul>
                    </div>
                ),
                tech: (
                    <div className={classes.techBox}>
                        <img style={{width:"50px"}} src={"images/skills/js.png"} />
                        <img style={{width:"120px"}} src={"images/skills/react.png"} />
                        <img style={{width:"120px"}} src={"images/skills/redux.png"} />
                        <img style={{width:"100px"}} src={"images/skills/figma.png"} />
                    </div>
                ),
                complete: (
                    <div>
                        <span style={{lineHeight:"28px"}}>
                            리액트로 개발한 프로젝트였습니다. 기존 사용하던 Vanilla JS는 많은 차이가 있어서 처음에는 낯선 개념들이 많았습니다. <br/>
                            리액트에서는 기존의 DOM 조작 방식으로 요소를 선택하고 변경하는 것이 불가능해, 처음부터 작은 단위로 컴포넌트를 나누어 설계하고 이를 조합해야 합니다. 이 부분이 처음에는 익숙하지 않아 어려움을 겪었습니다. <p/>

                            하지만 학습을 통해 새로운 개념들을 익히면서, HTML 과 유사한 문법인 Jsx, state 와 생명주기 메서드, 상태 관리를 위한 라이브러리 등 많은 개념들을 익힐 수 있었습니다.
                            이 프로젝트에서는 컴포넌트를 분리하여 코드의 재사용성과 모듈화를 쉽게 구성하기 위해 노력했고, Redux 를 통해 상태 관리를 용이하게 했습니다.
                            처음에는 리액트가 난해하게 느껴졌지만, 완성된 코드는 기존 자바스크립트만 사용해서 개발한 코드들보다 가독성이 훨씬 좋았고, 보다 쉬운 유지보수와 함께 코드의 재사용성을 향상시켰습니다. <p/>

                            저는 이전에 바닐라 자바스크립트에서 전역변수를 이용해 쉽게 상태를 관리했었지만 리액트에서는 부모 컴포넌트에서 자식 컴포넌트로의 단방향 데이터 흐름만 존재했습니다.
                            이런 점 때문에, 부모에서 자식 컴포넌트로 데이터가 필요한 경우 문제를 겪었습니다. 작은 단위의 컴포넌트에서는 콜백함수를 이용해서 이 문제를 해결할 수 있었지만,
                            여러 곳에서 사용하는 경우 Redux를 사용해 전역 상태를 관리해야 했습니다.<p/>

                            이 프로젝트에서는 디자인, 기획, 개발까지 모두 혼자서 작업했었는데, 기능이 많지 않은 프로젝트였음에도 불구하고 생각했던 것보다 시간이 많이 걸렸습니다.
                            이러한 어려움은 분야별로 업무를 나누어서 작업하는 것이 훨씬 효율적이며 전문성을 극대화 시킬 수 있다는 점을 깨닫게 해주었습니다. <br/>
                            또한, React의 특징과 개념에 대해서 공부하고 익힐 수 있었던 알짜베기 프로젝트였습니다. <p/>
                        </span>
                        <div className={classes.fotGifSet}>
                            <img src={"images/projects/fotscore.gif"} />
                            <img src={"images/projects/fot2.gif"} />
                        </div>
                    </div>
                )
            })
        }

        if(type === "qdrop"){
            setData({
                url: (
                    <span><a href={"https://play.google.com/store/apps/details?id=com.gichan.footballScore"}>Play Store</a></span>
                ),
                date: (
                    <span>2023.03.01 - 2023.05.11</span>
                ),
                name: "Q'drop",
                summary: (
                    <div>
                        <span>
                            취업준비 과정에서 면접준비는 가장 중요한 일 중 하나입니다. <p/>
                            회사를 그만두고 면접질문에 대한 공부를 하던 중, 해당 질문들을 한 곳에서 모아볼 수 있고 또  내가 작성할 수 있는 공간의 필요성을 느꼈습니다.<p/>
                            그러나 제가 원하는 간단하게 핵심 내용만 추려진 사이트나 애플리케이션이 시중에 존재하지 않았고, <p/>
                            또한 사이드 프로젝트의 필요성도 느끼게 되었습니다. 그래서 리엑트를 공부하면서 면접 공부를 동시에 할 수 있는 프로젝트를 진행하기로 결심했습니다. <p/>
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <span>
                            간단한 면접 질문에 관한 애플리케이션이였기 때문에, 기존에 알고 지내던 한 명의 백엔드 개발자와 한 분의 디자이너와 함께 팀을 구성했습니다. <p/>
                            저희 팀은 주요 업종과 업무에 대한 면접 질문을 조사하고, 해당 질문을 카테고리별로 분류했습니다.  <p/>
                            사용자의 실제 필요에 맞는 기능만을 선택하고, 면접 질문과 관련없는 불필요한 기능은 제외했습니다. <p/>
                            초기에 필요한 데이터나 라이브러리는 없었기 때문에, 디자인이 나오는 즉시 개발 작업을 빠르게 시작할 수 있었습니다. <p/>
                            React의 활용과 학습 또한 주된 목적이라 React Native 를 사용해서 앱을 만들기보다는 React를 사용해 웹 애플리케이션을 개발하기로 결정했습니다. <p/>
                        </span>
                        <div className={classes.middleImgSet}>
                            <p/>
                            <div className={classes.qdropImgSet}>
                                <img src={"/images/projects/img_5.png"} />
                                <img src={"/images/projects/img_7.png"} />
                                <img src={"/images/projects/img_6.png"} />
                            </div>
                            <span style={{fontSize:"12px"}}>초기 디자인 레이아웃</span>
                        </div>
                        <span>
                            구현이 필요한 기능은 다음과 같았습니다.
                        </span>
                        <ul className={classes.evaluationUi}>
                            <li>각 카테고리별 글을 작성/수정/삭제 할 수 있는 페이지</li>
                            <li>Skeleton Loadings 기능</li>
                            <li>관심 카테고리를 단일/다중 선택할 수 있는 기능</li>
                            <li>인기 검색어 및 쿠키를 기반한 최근 검색어 페이지</li>
                            <li>입력 키워드별 검색 기능</li>
                            <li>각 페이지/모달의 자연스러운 터치 및 애니메이션 효과</li>
                            <li>즐겨찾는 분야 및 게시글 설정/등록 기능</li>
                            <li>게시글 좋아요 등록/취소 및 상단바 퀵 이동 기능</li>
                            <li>내가 쓴 노트 및 즐겨찾기한 노트 모아보기 페이지</li>
                            <li>이용약관 및 개인정보처리방침 확인 페이지</li>
                            <li>회원가입 및 탈퇴 페이지, 닉네임 변경 페이지</li>
                        </ul>
                    </div>
                ),
                tech: (
                    <div className={classes.techBox}>
                        <img style={{width:"50px"}} src={"images/skills/js.png"} />
                        <img style={{width:"120px"}} src={"images/skills/react.png"} />
                        <img style={{width:"120px"}} src={"images/skills/redux.png"} />
                        <img style={{width:"100px"}} src={"images/skills/figma.png"} />
                    </div>
                ),
                complete: (
                    <div>
                        <span style={{lineHeight:"28px"}}>

                            이 프로젝트는 리액트로 개발한 두 번째 프로젝트였습니다. 첫 번째 프로젝트는 백엔드 연동이 없고 기능과 데이터가 제한적이었기 때문에 비교적 간단한 프로젝트였습니다.
                            하지만 이번 프로젝트에서는 백엔드 연동과 성능 최적화에도 주력했기 때문에 더 어려움을 겪었습니다. <br/>
                            특히 상태 관리에 대한 기초 지식이 부족했습니다. 이전에는 전역 변수를 사용하고 부모에서 자식 컴포넌트로
                            데이터를 전송하는 방식으로 상태를 관리했었는데, 이 방식은 데이터 양과 깊이가 증가할수록 한계에 부딪히게 되었습니다. <p/>

                            이에 따라 상태 관리를 위한 툴을 조사한 후, 가장 널리 사용되는 Redux를 선택했습니다. MobX나 Recoil 등 다른 새로운 성능 우수한 툴도 있었지만,
                            기존에 사용되던 툴을 사용해보며 최신 툴이 왜 더 좋은지를 체감하고자 했습니다. <p/>

                            이 프로젝트에서는 여러 개의 카테고리를 자연스럽게 전환하면서 보여주는 것이 중요했습니다. <br/>
                            그러나 카테고리의 어떠한 글이라도 변경되면 관련 없는 카테고리의 게시글들이 다시 렌더링되는 문제가 발생했습니다. <br/>

                            이 문제는 Wrapper 컴포넌트나 카테고리별 컴포넌트들의 구성을 적절하게 설정하지 못해서 발생한 문제였습니다. <br/>
                            따라서 기존에 작성한 코드를 대부분 수정해야 했으며, 렌더링이 발생할 때마다 고려해야 할 변수들을 하나씩 고려하며 코드를 다시 작성했습니다. <br/>

                            또한 Redux를 사용하는 과정에서 변수를 가져올 때 리렌더링이 다시 발생하는 조건 등의 개념에 대한 이해가 충분하지 않았습니다.
                            이에 따라 추가적인 학습을 통해 렌더링을 최적화하는 것의 중요성을 깨달았습니다. <p/>

                            개인적인 개발 문제 외에도 협업 과정에서도 어려움이 있었습니다. 백엔드에서 데이터를 가져온 후 처리하는 과정에서 HTTPS, CORS 등 다양한 오류가 발생했으며, 이전에는 고려하지 않았던 다양한 문제들이 존재했습니다.
                            서버 관련 문제는 백엔드 개발자의 역할이었지만, 저도 문제의 원인과 개념을 정확히 이해하고 해결 방법을 조사해야 했습니다. <p/>

                            이전에 혼자서 개발한 "Fotscore" 앱과는 달리 이번 프로젝트는 팀 프로젝트로 시작되었으며, 그에 따른 장단점을 경험했습니다. 체계가 갖춰진 회사에서의 팀 프로젝트와는 다르게,
                            팀원들과 함께 컨텐츠, 기획, 아이디어, 디자인 등을 결정해야 했으며, 이로 인한 발생한 갈등을 해결해야 했습니다. <p/>
                            개발자의 입장뿐만 아니라 사용자, 디자이너, 기획자 등 다른 역할에서의 시각도 고려하는 경험을 얻을 수 있었던 프로젝트였습니다. <p/>


                        </span>
                        <br/>
                        <div className={classes.fotGifSet}>
                            <div className={classes.qdropLastImgSet}>
                                <img src={"images/projects/q1.png"} />
                                <img src={"images/projects/q2.png"} />
                                <img src={"images/projects/q3.png"} />
                            </div>
                            <div className={classes.qdropLastImgSet}>
                                <img src={"images/projects/q4.png"} />
                                <img src={"images/projects/q5.png"} />
                            </div>
                        </div>
                    </div>
                )
            })
        }

        if(type === "evaluation"){
            setData({
                url: (
                    <span><a href={"https://work.clovine.com"}>https://work.clovine.com</a> > workspace > project > setting > evaluation</span>
                ),
                date: (
                    <span>2022.06.13 - 2022.07.12</span>
                ),
                name: "프로젝트 평가",
                summary: (
                    <div>
                        <span>
                            해당 프로젝트는 이전 회사에서 진행한 프로젝트입니다. <p/>
                            회사의 메인 기능인 프로젝트 관리에 있어서, 프로젝트를 완료했을 경우 해당 프로젝트에 대한 평가항목이 따로 존재하지 않는 점이 문제였습니다. <p/>
                            경영진들은 이러한 기능이 다양한 고객층을 확보하는 데 필요하다고 판단했고 제가 해당 기능의 프로젝트 매니저로 지정되었습니다. <p/>
                            이 프로젝트의 주요 목표는 완료된 프로젝트의 다양한 가치를 여러 지표를 통해 평가하는 기능을 사용자들에게 제공하는 것입니다.
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <span>
                            개발 전, 프로젝트의 다양한 측면을 종합적으로 평가하기 위한 기준을 설정해야 했습니다. <p/>
                            고객들이 다양하기 때문에 특정 분야의 평가 기준만 적용하기 어려워, 종합적인 평가 항목을 도출했습니다. <p/>
                            산출된 평가항목은 다음과 같습니다.
                        </span>
                        <ul className={classes.evaluationUi}>
                            <li>프로젝트 개요에 작성된 목표 평가 - 다섯 단계로 구성된 평가 기준 및 코멘트 제공</li>
                            <li>상태별 태스크의 개수, 지연 및 초과 일정 확인 - 퍼센트 차트를 활용한 시각화</li>
                            <li>태스크의 계획 완료 일정과 실제 완료 일정 확인 - 그래프를 통한 시각화</li>
                            <li>프로젝트 참여자에 대한 가중치 설정 및 평가점수 - 프로젝트별로 다른 산정 기준 제공</li>
                        </ul>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"100%"}} src={"images/modal/evaluation2.png"}/>
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
                        <br/>
                        <span>위와 같은 기능들은 고객들의 다양한 요구사항을 충족시키기 위해 계획되었으며 효율적이고 직관적인 프로젝트 관리를 돕기 위해 선정된 기능들이였습니다.</span>
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
                            <img style={{width: "100%"}}src={"images/modal/evaluation3.png"}/>
                            <img style={{width: "100%"}} src={"images/projects/evaluation.gif"}/>
                        </div>
                    </div>
                )
            })
        }
        if(type === "summary"){
            setData({
                url: (
                    <span><a href={"https://work.clovine.com"}>https://work.clovine.com</a> > workspace > project > summary</span>
                ),
                date: (
                    <span>2022.04.21 - 2022.06.10</span>
                ),
                name: "프로젝트 개요 및 활동 로그",
                summary: (
                    <div>
                        <span>
                            해당 프로젝트는 이전 회사인 HeavenTree에서 진행한 프로젝트입니다. <p/>
                            회사의 메인 기능인 프로젝트 관리에 있어서, 프로젝트에 대한 기획, 목표 등 초기 설정을 할 수 있는 페이지가 존재하지 않는 점이 문제였습니다. <p/>
                            경영진들은 이러한 기능이 프로젝트 관리 툴에 필수로 있어야 한다고 판단하였고 저는 해당 기능의 프로젝트 매니저로 지정되었습니다. <p/>
                            또한, 프로젝트 내 사용자들의 활동 로그를 확인할 수 있는 페이지가 없어 이러한 기능 또한 동시에 구현하게 되었습니다. <p/>
                            이 프로젝트의 주요 목표는 프로젝트의 규칙, 기획, 목표 등 초기 설정을 입력할 수 있는 페이지와 프로젝트 활동 로그를 사용자들에게 제공하는 것이였습니다. <p/>
                        </span>
                    </div>
                ),
                process: (
                    <div>
                        <span>
                            먼저, 프로젝트 개요에 필요한 내용을 추려보았습니다. 프로젝트 내의 다른 요소들(마일스톤, 링크)들과 연동했을 경우의 장단점을 분석한 후
                            개요 탭에 총 5가지의 카테고리를 설정했습니다. <p/>또한, 여러 개의 컨텐츠가 있을 수 있는 카테고리(목표, 마일스톤)에서는 드래그 앤 드롭 기능을 구현했습니다. <p/>
                            활동로그도 마찬가지로, 프로그램에 등록되는 활동 로그에서 사용자들이 필요로 하는 정보만 선별하기 위해 마케팅팀과 TE 팀이 협력하여 실제 사용자들의 피드백을 반영하였습니다. <p/>
                        </span>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"100%"}} src={"/images/modal/summary1.png"}/>
                            <span>디자인 기획안 1</span>
                        </div>
                        <span>다음와 같은 기능들을 목표로 개발하였습니다.</span>
                        <ul className={classes.evaluationUi}>
                            <li>프로젝트 설명 및 목표 생성/삭제, 목표의 중요도 설정 기능 </li>
                            <li>프로젝트 마일스톤 생성 및 삭제, 마일스톤 일정 생성 및 삭제 기능</li>
                            <li>프로젝트 규칙 및 기획 생성/삭제 기능 - 글자 입력에 따른 TextArea 크기 자동 조절 기능 포함</li>
                            <li>프로젝트 마일스톤 및 프로젝트 목표의 드래그 앤 드롭 기능</li>
                            <li>프로젝트 활동 로그 생성 및 프로젝트/태스크 태그 링크 연결 - 히스토리 관리 기능 </li>
                            <li>시간대별 활동 로그 정렬 기능</li>
                        </ul>
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
                            해당 프로젝트는 사용자에게 입력받는 수많은 input 태그나 textarea의 이벤트 처리에 어려움을 겪었습니다. <br/>
                            또한, 프로젝트 개요 기능과 활동 로그를 같은 페이지에 두어 반응형 웹을 개발하는 데에 시간을 쏟았습니다. <p/>

                            이 회사에서 진행한 다른 프로젝트들보다 큰 어려움은 없었지만, 자잘한 CSS 영역에서의 완성도가 아쉬움이 남았습니다. <br/>
                            저는 웹 개발에서 CSS가 가장 어려운 부분 중 하나라고 생각합니다. 고객이나 관리자가 요구하는 레이아웃과 디자인은 매번 너무 다르기 때문에
                            정확하고 신속한 개발을 요구합니다. 특히 개발하기 까다로운 인터페이스는 초기에 정확한 구성을 생각하지 않으면 시간이 엄청나게 소요됐습니다. <p/>
                            이번 프로젝트에서 드래그 앤 드롭과 활동 로그란을 개발하면서 이러한 어려움을 더욱 느꼈습니다. 빠르고 퀄리티 높은 개발을 위해서는
                            다양한 인터페이스, 프로젝트 등 각각 다른 환경에서의 다양한 경험이 필요하다는 것을 깨달았습니다. <p/>
                            또한 수 십개의 종류가 있는 로그는 중복되는 코드가 많았고, 그런 코드를 함수화하면서
                            재사용성과 가독성을 높이기 위해서는 처음 기획이 매우 중요하며, 제대로 기획 후 구현하는 것이 필수적이라 생각되었습니다.<p/>

                            이번 프로젝트를 진행하면서 많은 경험을 쌓았습니다. 사용자 입력 처리, 반응형 웹 개발, CSS 등 다양한 분야에서의 개발 경험을 통해 더욱 성장할 수 있었습니다. <br/>
                            또한, 협업 과정에서 다양한 분야의 팀원들과 함께 공동 작업하면서 효율적인 프로젝트 기획과 협업 기술을 향상시킬 수 있었습니다.
                            기능개발을 하면서 어려운 부분이 많았지만, 그만큼 해결해 나가는 과정에서 뿌듯함을 느낄 수 있었습니다. <p/>
                        </span>
                        <br></br>
                        <div className={classes.evaluationSet}>
                            <img style={{width: "100%"}}src={"images/projects/summary.png"}/>
                            <img style={{width: "100%"}} src={"images/projects/summary.gif"}/>
                        </div>
                        <p/>
                    </div>
                )
            })
        }
        if(type === "enterprise"){
            setData({
                name: "엔터프라이즈 모델",
                date: (
                    <span>2022.04.21 - 2022.06.10</span>
                ),
                summary: (
                    <div style={{lineHeight:"28px"}}>
                        해당 프로젝트는 이전 회사인 Heaventree에서 진행한 프로젝트입니다. <br/>
                        창업진흥원에서 자사 프로그램의 엔터프라이즈 모델을 요청을 한 후에 시작된 프로젝트입니다. <p/>
                        다양한 솔루션 프로그램을 가진 회사 중에서 저희 회사가 선택됐고 그만큼 요구가 까다로웠던 프로젝트였습니다. <p/>
                        요구받은 기능 중에서 핵심 기능이 제가 이전에 개발했던 기능과 유사했고, 여러 프로젝트를 성공적으로 수행한 경험 덕분에
                        프로젝트 매니저를 맡게 되었습니다. <p/>
                        이전 자사 프로젝트와는 달리 외주인 데다가, 큰 규모의 고객층이라 경영진들과 선임 개발자들의 많은 관심과 걱정이 쏟아졌던 프로젝트였습니다.
                    </div>
                ),
                process: (
                    <div>
                        <span style={{lineHeight:"28px"}}>
                            프로젝트에 참여한 개발자는 총 3명이였고, 각각의 브랜치에 기능을 구현하고 합치는 방식이였습니다.<p/>
                            창업진흥원의 기능 요청에 따라 개발이 시작되었습니다. 대부분은 원래 하던 업무와 유사한 기능과 페이지 구현이였습니다. <p/>
                            하지만 실제 개발에 앞서 많은 조정과 회의가 필요했습니다. 서버와 데이터베이스도 새로 구축해야했고, 클라이언트들과의 잦은 미팅 또한 감수해야 했습니다. <br/>
                            코드 작성에서는 개발자들끼리 구현 해야할 기능이 겹치는 부분도 많았고 공통화된 함수의 재정리도 필요했습니다. 때문에 코드 구조와 공통화에 대한 시간도 상당히 소요되었습니다. <p/>
                            모든 준비를 끝내고 개발을 착수했음에도, 시시각각 요구사항이 변경되었고 낭비되는 시간이 많았습니다. 매번 아침마다 회의를 했고, 다양한 안건과 의견을 적절히 조율한 덕에
                            무사히 종료됐던 프로젝트였습니다.
                        </span>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"100%"}} src={"/images/projects/enterprise1.png"}/>
                        </div>
                        <span>다음은 제가 개발을 맡은 페이지 및 기능들입니다.</span>
                        <ul className={classes.ganttUl}>
                            <li>각 사업분야 항목이 리스트화된 게시판 페이지</li>
                            <li>워크스페이스의 모든 프로젝트들의 일정을 한 곳에 모은 간트차트 페이지</li>
                            <li>게시판 페이지의 사업분야별 필터와 검색 기능, 페이지네이션 기능</li>
                            <li>사업분야의 국문 책자 및 영문 책자 기능과 연동된 모달창 및 사업소개서 링크 생성 </li>
                            <li>각 워크스페이스별 색깔 지정으로 간트차트 디자인 시각화 </li>
                            <li>워크스페이스 다중 선택 기능 및 간트차트 데이터 정렬 기능</li>
                            <li>DB 테이블 설계서 기획 및 작성</li>
                            <li>모든 프로젝트들의 데이터 간략화 및 시각화</li>
                        </ul>
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
                            해당 프로젝트는 회사에서 처음으로 맡게된 엔터프라이즈 모델 개발이였습니다. <br/>
                            기존의 기획은 회사 내 요구사항에 따라 이루어졌지만. 이번에는 대부분 외부 업체들과의 컨택을 통해 이루어졌기 때문에
                            프로젝트 완료에는 훨씬 많은 기간이 소요되었습니다. 또한, 기존 1인 체제의 페이지 개발이 아닌 팀 단위의 개발이기 때문에
                            서로간의 의사소통과 업무의 분배에도 어려움을 겪었습니다. <p/>

                            이러한 문제를 해결하기 위해, 매일 아침마다 회의를 열어 각 개발 과정과 결과를 서로 공유하게 되었습니다. 겹치는 부분의 기능은
                            적절히 분배해 담당자를 지정했으며, 코드의 모듈화를 통해 불필요한 개발시간을 줄였습니다. <br/>
                            또한, 클래스 이름, 파일 이름 등 여러 기법이 존재할 수 있는
                            부분들도 서로 공통화를 통해 코드의 가독성을 높였습니다. 제게 필요한 기능들도 팀원의 코드를 래퍼런스로 참고했고,
                            저와는 다르게 구현한 코드에서 좀 더 넒은 아이디어와 관점을 생각해볼 수 있었습니다. <p/>

                            기존의 개발환경과는 다른 프로젝트에서의 경험은 저에게 개발자로서 새로운 어려움이었습니다. <br/>
                            새로운 요구사항과 환경에서의 프로젝트를 성공적으로 완료하기 위해서는 적극적인 의사소통과 팀원 간의 협업이 필수였습니다. <br/>
                            이를 통해 제가 기존에 가지고 있던 개발 능력을 한 단계 높일 수 있었고, 코드의 가독성과 유지보수성을 고려하는 중요성도 깨달을 수 있었습니다. <br/>
                            또한, 다른 개발자들과의 협업을 통해 새로운 아이디어와 시각을 얻을 수 있었고, 이를 통해 더 나은 코드를 작성할 수 있게 되었습니다.<br/>
                        </span>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"100%"}} src={"/images/projects/kised_main.png"}/>
                            <img style={{width:"100%"}} src={"/images/projects/kised_gantt.png"}/>
                            <img style={{width:"100%"}} src={"/images/projects/kised_list.png"}/>
                            <img style={{width:"100%"}} src={"/images/projects/kised_gonzi.png"}/>
                        </div>
                    </div>
                )
            })
        }
        if(type === "DEATS"){
            setData({
                date: (
                    <span>2023.05.12 - ing</span>
                ),
                name: "DEATS",
                summary: (
                    <div>
                        <span style={{lineHeight:"28px"}}>
                            저희 팀은 아동급식드림카드를 사용하는 아이들을 위한 서비스를 개발하기 위한 아이디어 회의를 진행했습니다. <p/>
                            이 프로젝트는 결식 아동들을 위한 급식/부식을 무상으로 제공해주는 복지서비스인 "아동급식드림카드"를 사용할 수 있는 가게에 대한 정보와 리뷰를 제공하고, <br/>
                            사용자가 쉽게 가게를 찾아갈 수 있는 MAP 서비스를 연동하여 기존의 복지카드를 사용하는 아이들을 도와주는 것을 목표로 하고 있습니다. <p/>
                            현재 아동급식드림카드를 사용할 수 있는 식당과 편의점이 한정되어 있으며, 그마저도 해당 가게들의 위치를 찾아보고 카드 사용여부를 직접 확인해야 하는 번거로움이 있습니다. <p/>
                            서울은 그나마 위치 정보가 친절하게 제공되는 사이트라도 있지만, 대구는 그런 서비스 조차 없는 상황입니다. <p/>
                            저희 팀은 아동급식드림카드를 사용할 수 있는 가게들의 정보와 리뷰를 제공하고, <br/>
                            사용자들이 쉽게 찾아갈 수 있는 MAP 서비스를 개발하여 이 문제를 해결하고자 합니다. <p/>


                            {/*새로운 기술스택과 서비스를 개발하기 위해 진행중인 프로젝트들입니다. <p/>*/}
                            {/*두 개 정도의 프로젝트를 팀 규모로 진행 중이며 저는 프론트엔드를 담당하고 있습니다. <p/>*/}
                            {/*기존에 회사에 다닐때는 시간적 여유가 부족해서 아이디어만 생각해놓고 있었는데, 이번 기회에 <p/>*/}
                            {/*새로운 기술과 팀원들과 함께 만들고 싶어했던 서비스를 개발하게 되었습니다.*/}
                        </span>
                        {/*<div className={classes.middleImgSet}>*/}
                        {/*    <img style={{width:"50%"}}  src={"/images/modal/ing1.png"}/>*/}
                        {/*    <span>기획안</span>*/}
                        {/*</div>*/}
                    </div>
                ),
                process: (
                    <div>
                        <span style={{lineHeight:"28px"}}>

                            상당히 규모가 큰 프로젝트이라 많은 팀원들이 필요했기 때문에 디자이너 2명과, 프론트엔드 2명, 백엔드 1명으로 팀을 구성했습니다. <p/>
                            기존의 아동급식드림카드가 어떻게 사용자들에게 정보를 제공하는지를 먼저 파악했습니다. 서비스 자체는 대구권에서 전무하다고 볼 수 있었고,
                            비슷한 아이디어가 서울에서는 애플리케이션까지 개발된 상황이였습니다. <p/> 따라서 저희는 정보를 제공해줄 API를 찾아보았고,
                            대구시 홈페이지에서 데이터를 제공해주는 것을 확인했습니다. 그 후에 데이터를 어떻게 사용자들에게 더 친숙하게 보여줘야할지를 생각했습니다.<p/>
                            회의 끝에, 기존의 배달 서비스와 유사하게 정보를 제공한 후에 주변 가게에 대한 정보를 검색할 수 있게끔 했습니다.<br/>
                            정보를 제공하는 서비스를 개발하더라도 그 가게에 직접 찾아가야 했기 때문에 지도 서비스는 필수적이였습니다.
                            따라서 Naver Map Api를 가져와 서비스에 덧붙였습니다. <br/>
                        </span>
                        <br/>
                        <div className={classes.middleImgSet}>
                            <img style={{width:"100%"}} src={"/images/projects/d1.png"}/>
                            <img style={{width:"100%"}} src={"/images/projects/d2.png"}/>
                            <img style={{width:"100%"}} src={"/images/projects/d3.png"}/>
                        </div>
                    </div>
                ),
                complete: (
                    <div>
                        <span> 현재 진행 중인 프로젝트입니다.</span>
                    </div>
                ),
                tech: (
                    <div className={classes.techBox}>
                        <img style={{width:"50px"}} src={"images/skills/js.png"} />
                        <img style={{width:"120px"}} src={"images/skills/react.png"} />
                        <img style={{width:"120px"}} src={"images/skills/redux.png"} />
                        <img style={{width:"100px"}} src={"images/skills/figma.png"} />
                        <img style={{width:"70px"}} src={"images/skills/mysql.svg"} />
                        <img style={{width:"120px"}} src={"images/skills/spring.png"} />
                    </div>
                )
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
                    {data.complete ? <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/fireworks.png"}/><span>Summary</span></div>
                        <div className={classes.categoryData}>{data.complete}</div>
                    </div> : ""}
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/tech.png"}/><span>Technology Stack(s)</span></div>
                        <div className={classes.categoryData}>{data.tech}</div>
                    </div>
                    {data.url ? <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/neural.png"} /><span>URL</span></div>
                        <div className={classes.categoryData}>{data.url}</div>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Modal
