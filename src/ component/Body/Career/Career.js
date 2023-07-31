import classes from "./Career.module.css"

function Career(){
    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <p>CAREER</p>
            </div>
            <div className={classes.body}>
                <div className={classes.left}>
                    <img src={"images/projects/heaventree.png"}/>
                </div>
                <div className={classes.right}>
                    <div className={classes.spanBox}>
                        <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>
                            <p style={{fontSize:"18px"}}>(주)헤븐트리</p>
                            <p style={{color: "#dadada"}}>프로젝트 포트폴리오 관리(PPM) 서비스의 FE 개발자로서 신규 프로젝트 개발 및 유치 보수를 담당했습니다. </p>
                        </div>
                    </div>
                    <div className={classes.spanBox}>
                        <div>
                            <div className={classes.career}>
                                <p style={{color:"#ababab"}} >2021년 7월 ~ 2022년 12월 : 프론트엔드 개발</p>
                                {/*<div className={classes.careerImg}>*/}
                                {/*    <img style={{width:"40px"}} src={"images/skills/html.png"} />*/}
                                {/*    <img style={{width:"35px"}} src={"images/skills/css.png"} />*/}
                                {/*    <img style={{width:"30px"}} src={"images/skills/js.png"} />*/}
                                {/*    <img style={{width:"80px"}} src={"images/skills/jquary.png"} />*/}
                                {/*    <img style={{width:"45px"}}src={"images/skills/node.png"} />*/}
                                {/*    <img style={{width:"65px"}} src={"images/skills/express.png"} />*/}
                                {/*    <img style={{width:"80px"}}src={"images/skills/mongo.png"} />*/}
                                {/*    <img style={{width:"90px"}}src={"images/skills/sourcetree.png"} />*/}
                                {/*</div>*/}
                                <li>PPM 제품 기능사용을 위한 웹페이지 및 기능을 JS와 nodeJS로 개발했으며 빠른 이슈 대응과 기획, 아이디어 단계에 참여하며 신기능 개발</li>
                                <li>NodeJs, Express를 사용한 REST API 통신을 했으며, MongoDB 데이터 모델링 및 DB 테이블 명세서 작성</li>
                                <li>북미 및 기타 글로벌 서비스를 위한 언어팩 작업에 참여</li>
                                <li>유료 라이브러리 및 오픈 라이브러리, 각종 api를 페이지에 적용해 기능성 및 안정성 확보</li>
                                {/*<li>프로젝트들의 전체적인 일정 및 관리가 가능한 간트차트 페이지 기획 및 개발</li>*/}
                                {/*<li>자사 페이지별 기능들의 전체적인 종합 개선 스크럼 발의 및 리펙터링</li>*/}
                                {/*<li>워크스페이스 프로그램의 탑 바 및 헤더라인 수정 기획 및 개발</li>*/}
                                {/*<li>생성한 프로젝트의 기본적인 설정 및 참여자 설정이 가능한 페이지 개발</li>*/}
                                {/*<li>전체적인 프로젝트의 설명, 요약, 목표 설정이 가능한 개요 페이지 개발</li>*/}
                                {/*<li>완료된 프로젝트의 종료기준을 산정하여 평가 가능한 프로젝트 평가 페이지 기획 및 개발</li>*/}
                                {/*<li>간트차트 백엔드 리펙터링</li>*/}
                                {/*<li>모바일 환경에서 프로젝트 생성 및 수정가능한 페이지 개발</li>*/}
                                {/*<li>엔터프라이즈 관련 전체 기업의 목록 및 상세내용이 확인 가능한 페이지 기획 및 개발</li>*/}
                                {/*<li>엔터프라이즈 전용 전체 일정이 확인 가능한 간트차트 기획 및 개발</li>*/}
                                {/*<li>자사 기능들에 대한 전체 CSS 공통화 문서 작성</li>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
