import style from "./CardDescription.module.scss";
import { useState } from "react";

export default function CardDescription({title, text, className}){

    const [isHidden, setIsHidden] = useState(false);
    const [isLi , setIsLi] = useState(false);
   
    function handleShowCardHidden(){
        setIsHidden(!isHidden);
    }
console.log(text)
    return (
            <div className={`${style.cardDescriptionCard} ${className}`}>
                <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`} onClick={handleShowCardHidden}>{title}<i className={ isHidden ? `${style.cardDescriptionIcon} fa-solid fa-chevron-down` : " fa-solid fa-chevron-up"} onClick={handleShowCardHidden}></i></h3>
                <div className={isHidden ? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>{text}</div>
            </div>
    )
}



