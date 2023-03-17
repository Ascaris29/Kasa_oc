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
                <div className={`${style.aproposContent} d-flex flex-column`}>

                    <div className={`${style.aproposCard} d-flex flex-column`}>
                        <div className={`${style.aproposCardTitle}`}>Fiabilité</div>
                        <div className={`${style.aproposCardHidden}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCardTitle}`}>Respect</div>
                        <div className={`${style.aproposCardHidden}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCardTitle}`}>Service</div>
                        <div className={`${style.aproposCardHidden}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCardTitle}`}></div>
                        <div className={`${style.aproposCardHidden}`}></div>
                    </div>
                </div>
            </div>
    )
}