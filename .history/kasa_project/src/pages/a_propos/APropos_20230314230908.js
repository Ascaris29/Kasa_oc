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
                        <div className="aproposCardHidden">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow">Respect</div>
                        <div className="aproposCardHidden">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow">Service</div>
                        <div className="aproposCardHidden">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                    </div>
                    <div className="aproposCard">
                        <div className="aproposCardShow">La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi </div>
                        <div className="aproposCardHidden"></div>
                    </div>
                </div>
            </div>
    )
}