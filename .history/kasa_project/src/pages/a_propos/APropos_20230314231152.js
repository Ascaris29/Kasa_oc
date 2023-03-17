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
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCard}`}>Fiabilité</div>
                        <div className={`${style.aproposCard}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCard}`}>Respect</div>
                        <div className={`${style.aproposCard}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCard}`}>Service</div>
                        <div className={`${style.aproposCard}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCard}`}>La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</div>
                        <div className={`${style.aproposCard}`}></div>
                    </div>
                </div>
            </div>
    )
}