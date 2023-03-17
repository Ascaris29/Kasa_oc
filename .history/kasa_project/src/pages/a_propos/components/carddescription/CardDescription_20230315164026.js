import style from "../CardDescription.module.scss";
import { useState } from "react";

export default function CardDescription({title, text, className}){

    const [isHidden, setIsHidden] = useState(false);
   
    function handleShowCardHidden(){
        setIsHidden(!isHidden);
    }
    return (
            <div className={`${style.cardDescriptionCard}`}>
                <h3 className={`${style.cardDescriptionTitle} d-flex justify-between {`className}`}>{title}<i className={`${style.cardDescriptionIcon} fa-solid fa-chevron-up`} onClick={handleShowCardHidden}></i></h3>
                <p className={isHidden ? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>{text}</p>
            </div>
    )
}



