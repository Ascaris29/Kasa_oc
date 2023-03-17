import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";
import { useState } from "react";

export default function APropos(){

    const [isHidden, setIsHidden] = useState(false);
   

    function handleShowCardHidden(){
        setIsHidden(!isHidden);
    }
    
    return (
            <div className={`${style.apropos} p-30`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <C
            </div>
    )
}