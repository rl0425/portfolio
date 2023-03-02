import classes from "./Title.module.css"
function Title(){
    return (
        <div className={classes.box}>
            <div className={classes.explainBox}>
                <span>안녕하세요 !</span>
                <span>시니어 개발자가 되기 위해 최선을 다하는</span>
                <div  className={classes.highlight}><span>프론트엔드 웹 개발자 박기찬</span><label>입니다.</label></div>
            </div>
        </div>
    )
}

export default Title
