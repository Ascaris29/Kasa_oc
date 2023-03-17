import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";
import { useState } from "react";

export default function APropos(){

    const {classDisplay, setClassDisplay} = useState("hidden");

    function handleShowCardHidden(){
        setClassDisplay(!classDisplay);
    }
    return (
            <div className={`${style.apropos} p-30`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <div className={`${style.aproposContent} d-flex flex-column`}>

                    <div className={`${style.aproposCard} d-flex flex-column`}>
                        <div className={`${style.aproposCardTitle} d-flex justify-between`}>Fiabilité <i class="fa-solid fa-chevron-up" onClick=></i></div>
                        <div className={`${ "hidden" ? "style.aproposCardHidden" : "style.aproposCardShow"}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCardTitle} d-flex justify-between`}>Respect<i class="fa-solid fa-chevron-up"></i></div>
                        <div className={`${style.aproposCardHidden}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
                    </div>
                    <div className={`${style.aproposCard}`}>
                        <div className={`${style.aproposCardTitle} d-flex justify-between`}>Service<i class="fa-solid fa-chevron-up"></i></div>
                        <div className={`${style.aproposCardHidden}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                    </div>
                    <div className={`${style.aproposCard} d-flex flex-column`}>
                        <div className={`${style.aproposCardTitle} d-flex justify-between`}>Sécurité<i class="fa-solid fa-chevron-up"></i></div>
                        <div className={`${style.aproposCardHidden}`}>La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</div>
                    </div>
                </div>
            </div>
    )
}