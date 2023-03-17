import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";

export default function APropos(){
    return (
            <div className={`${style.apropos} p-30`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <div className="aproposContent">
                    <div className="aproposCard">
                        <div className="aproposCardShow"></div>
                    </div>
                    <div className="aproposCard"></div>
                    <div className="aproposCard"></div>
                    <div className="aproposCard"></div>
                </div>
            </div>
    )
}