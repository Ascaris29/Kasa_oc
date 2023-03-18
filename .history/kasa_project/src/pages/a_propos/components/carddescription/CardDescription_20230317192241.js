import style from "./CardDescription.module.scss";
import { useState } from "react";

export default function CardDescription({title, text, classNameBloc, classNameDesc}){

    const [isHidden, setIsHidden] = useState(false);
    const [isLi , setIsLi] = useState(false);
   
    function handleShowCardHidden(){
        setIsHidden(!isHidden);
    }

    return (
            <div className={`${style.cardDescriptionCard} ${classNameBloc}`}>
                <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`} onClick={handleShowCardHidden}>{title}<i className={ isHidden ? `${style.cardDescriptionIcon} fa-solid fa-chevron-down` : " fa-solid fa-chevron-up"} onClick={handleShowCardHidden}></i></h3>
                <div className={isHidden ? `${style.cardDescriptionHidden}` :`${style.cardDescriptionShow}` ${c}}>{text}</div>
            </div>
    )
}



