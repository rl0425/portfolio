import classes from "./Career.module.css"

function Career(){
    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <span>CAREER</span>
            </div>
            <div className={classes.body}>
                <div className={classes.left}>
                    <img src={"images/projects/heaventree.png"}/>
                </div>
                <div className={classes.right}>
                    <div className={classes.spanBox}>
                        <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>
                            <span style={{fontSize:"18px"}}>(주)헤븐트리</span>
                            <span style={{color: "#dadada"}}>프로젝트 관리 솔루션에서 포트폴리오까지 통합적인 관리를 할 수 있는 프로그램 '클로바인(Clovine)'을 개발하는 IT 솔루션 기업입니다.</span>
                        </div>
                    </div>
                    <div className={classes.spanBox}>
                        <div>
                            <div className={classes.career}>
                                <span style={{color:"#ababab"}} >2021년 7월 ~ 2022년 12월 : 프론트엔드 개발</span>
                                <div className={classes.careerImg}>
                                    <img style={{width:"40px"}} src={"images/skills/html.png"} />
                                    <img style={{width:"35px"}} src={"images/skills/css.png"} />
                                    <img style={{width:"30px"}} src={"images/skills/js.png"} />
                                    <img style={{width:"80px"}} src={"images/skills/jquary.png"} />
                                    <img style={{width:"45px"}}src={"images/skills/node.png"} />
                                    <img style={{width:"65px"}} src={"images/skills/express.png"} />
                                    <img style={{width:"80px"}}src={"images/skills/mongo.png"} />
                                    <img style={{width:"90px"}}src={"images/skills/sourcetree.png"} />
                                </div>

                                <li>프로젝트들의 전체적인 일정 및 관리가 가능한 간트차트 페이지 기획 및 개발</li>
                                <li>자사 페이지별 기능들의 전체적인 종합 개선 스크럼 발의 및 리펙터링</li>
                                <li>워크스페이스 프로그램의 탑 바 및 헤더라인 수정 기획 및 개발</li>
                                <li>북미 및 기타 글로벌 서비스를 위한 언어팩 작업</li>
                                <li>생성한 프로젝트의 기본적인 설정 및 참여자 설정이 가능한 페이지 개발</li>
                                <li>프로젝트 생성 및 수정이 가능한 자체 모달 생성</li>
                                <li>전체적인 프로젝트의 설명, 요약, 목표 설정이 가능한 개요 페이지 개발</li>
                                <li>완료된 프로젝트의 종료기준을 산정하여 평가 가능한 프로젝트 평가 페이지 기획 및 개발</li>
                                <li>간트차트 백엔드 리펙터링</li>
                                <li>모바일 환경에서 프로젝트 생성 및 수정가능한 페이지 개발</li>
                                <li>자사 기능들에 대한 데이터베이스 테이블 정의서 작성 및 수정</li>
                                <li>엔터프라이즈 관련 전체 기업의 목록 및 상세내용이 확인 가능한 페이지 기획 및 개발</li>
                                <li>엔터프라이즈 전용 전체 일정이 확인 가능한 간트차트 기획 및 개발</li>
                                <li>자사 기능들에 대한 전체 CSS 공통화 문서 작성</li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
