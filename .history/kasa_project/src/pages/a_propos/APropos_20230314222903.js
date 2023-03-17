import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";

export default function APropos(){
    return (
            <div className={`${style.apropos}`}>
                <div className={`${style.aproposBackground}`}>
                    <img src={image} alt="" />
                </div>
            </div>
    )
}