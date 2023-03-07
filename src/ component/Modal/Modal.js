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
        name:null,
        summary:null,
        process:null,
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
                name: "간트차트 프로젝트",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
        if(type === "fotscore"){
            setData({
                // url: "https://work.clovine.com",
                name: "FOTSCORE",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
            })
        }
        if(type === "evaluation"){
            setData({
                url: "https://work.clovine.com",
                name: "프로젝트 평가",
                summary: "샬라샬라",
                process: "샬라샬라",
                complete: "샬라샬라"
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
                        <div className={classes.categoryTitle}><img src={"images/modal/neural.png"} /><span>URL</span></div>
                        <label>{data.url}</label>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/placeholder1.png"}/><span>Summary</span></div>
                        <label>{data.summary}</label>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/desktop.png"}/><span>개발 과정</span></div>
                        <label>{data.process}</label>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.categoryTitle}><img src={"images/modal/fireworks.png"}/><span>개발 완료</span></div>
                        <label>{data.complete}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
