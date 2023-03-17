import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";

export default function APropos(){
    return (
            <div className={`${style.apropos}`}>
                <div className={`${style.aproposBackground} p-30`}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
            </div>
    )
}