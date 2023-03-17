import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";

export default function APropos(){

    function showCardHidden(){

    }
    return (
            <div className={`${style.apropos} p-30`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <div className="aproposContent">
                    <div className="aproposCard">
                        <div className="aproposCardShow">Fiabilité</div>
                        <div className="aproposCardHidden">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos é"</div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow"></div>
                        <div className="aproposCardHidden"></div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow"></div>
                        <div className="aproposCardHidden"></div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow"></div>
                        <div className="aproposCardHidden"></div>
                    </div>
                </div>
            </div>
    )
}