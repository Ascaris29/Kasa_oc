import style from "./FicheLogement.module.scss";
import image from "../../assets/images/Background1.png"
import CardDescription from "../a_propos/components/carddescription/CardDescription";
import Tags from "./components/tags/Tags";
import Caroussel from "./components/caroussel/Caroussel";
import Ratings from "./components/Ratings/Ratings";
import { data } from "../../data/Data";
import { useParams } from "react-router-dom";

export default function FicheLogement(){

    const url = useParams();
    console.log(url)
    return (
        <>
            { data.map((data) => {
                url === data.id && 
                <div className={`${style.fichelogement} flex-fill d-flex flex-column`}>
                <div className={`${style.fichelogementBackground} d-flex`}>
                    <Caroussel />
                </div>
                <div className={`${style.fichelogementContent}`}>
                    <div className={`${style.fichelogementDescription}`}>
                        <div className="en-tete d-flex flex-column">
                            <h1 className={`${style.fichelogementTitle}`}>{data.title}</h1>
                            <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
                            <div className={`${style.fichelogementTagName} d-flex`}>
                                <Tags text="Cosy"/>
                                <Tags text="Canal"/>
                                <Tags text="Paris 10"/>
                            </div>
                        </div>
                            <div className={`${style.fichelogementEnTete}`}>
                                <div className={`${style.fichelogementIdentity} d-flex align-center`}>
                                    <p>Alexandre Dumas</p>
                                    <img className={`${style.fichelogementPhotoIdentite}`} src={ image } alt="photographie de l'utilisateur" />
                                </div>
                                <Ratings note="3"/>
                            </div>
                    </div>
                </div>
                <div className={`${style.fichelogementBlocs} d-flex`}>
                        <CardDescription className={`${style.fichelogementCard}`} title="Description" text={data.description}/>
                        <CardDescription className={`${style.fichelogementCard}`} title="Équipements" text="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres" />
                </div>
            </div>
            })}
        </>
    )
}