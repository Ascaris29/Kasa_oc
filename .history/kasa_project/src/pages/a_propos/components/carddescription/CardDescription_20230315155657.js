import style from "../CardDescription.module.scss";
import { useState } from "react";

export default function CardDescription(title, text){

    const [isHidden, setIsHidden] = useState(false);
   
    function handleShowCardHidden(){
        setIsHidden(!isHidden);
    }
    return (
        <div className={`${style.cardDescriptionContent} d-flex flex-column justify-between`}>
        <div className={`${style.cardDescriptionCard}`}>
            <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`}>{title}<i className={`${style.cardDescriptionIcon} fa-solid fa-chevron-up`} onClick={handleShowCardHidden}></i></h3>
            <p className={isHidden ? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
        <div className={`${style.cardDescriptionCard}`}>
            <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`}>{title}<i className={`${style.cardDescriptionIcon} fa-solid fa-chevron-up`} onClick={handleShowCardHidden}></i></h3>
            <p className={isHidden ? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
        </div>
        <div className={`${style.cardDescriptionCard}`}>
            <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`}>{title}<i className={`${style.cardDescriptionIcon} fa-solid fa-chevron-up`} onClick={handleShowCardHidden}></i></h3>
            <p className={ isHidden? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </div>
        <div className={`${style.cardDescriptionCard}`}>
            <h3 className={`${style.cardDescriptionTitle} d-flex justify-between`}>{title}<i className={`${style.cardDescriptionIcon} fa-solid fa-chevron-up`} onClick={handleShowCardHidden}></i></h3>
            <p className={ isHidden? `${style.cardDescriptionHidden}` : `${style.cardDescriptionShow}`}>La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</p>
        </div>
    </div>
    )

   
}



