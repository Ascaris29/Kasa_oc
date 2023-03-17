import style from "./FicheLogement.module.scss";
import image from "../../assets/images/Background1.png"
import CardDescription from "../a_propos/components/carddescription/CardDescription";

export default function FicheLogement(){
    return <div className={`${style.fichelogement} flex-fill`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src={image} alt="photo" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <div className={`${style.fichelogementDescription}`}>
                <div className="en-tete">
                    <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
                    <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
                    <div className={`${style.fichelogementTagName} d-flex`}>
                        <p>Cosy</p>
                        <p>Canal</p>
                        <p>Paris 10</p>
                    </div>
                    </div>
                    <div className={`${style.fichelogementEnTete} d-flex align-center`}>
                        <p>Alexandre Dumas</p>
                        <img className={`${style.fichelogementPhotoIdentite}`} src={ image } alt="photographie de l'utilisateur" />
                        <span className="stars">★★★★★</span>
                    </div>
            </div>
            </div>
            <div className={`${style.fichelogementBlocs} d-flex`}>
                <CardDescription className={`${style.fichelogementCard}`} title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
                <CardDescription className={`${style.fichelogementCard}`} title="Équipements" text="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres" />
            </div>
        </div>
    </div>
}