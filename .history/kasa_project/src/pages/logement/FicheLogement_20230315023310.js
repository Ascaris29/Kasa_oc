import style from "./FicheLogement.module.scss";
import image from "../../assets/images/Background.png"

export default function FicheLogement(){
    return <div className={`${style.fichelogement} flex-fill`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src="" alt="" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <div className="d-flex align-center flex-row justify-between">
                <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
                <div className="d-flex align-items">
                    <p>Alexandre Dumas</p>
                    <img src={image} alt="" />
                </div>
            </div>
            <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
            <div className="d-flex align-center justify-between">
                <div className={`${style.fichelogementTagName} d-flex`}>
                    <p>Cosy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                <span className="stars">★★★★★</span>
            </div>
            <div className={`${style.fichelogementBlocs} d-flex`}>
                <div className="bloc 1">
                    <div className="blocTitle">
                        <h3>Description</h3>
                    </div>
                    <div className="blocDescription">
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                    </div>
                </div>
                <div className="bloc 2">
                    <div className="blocTitle">
                        <h3>Équipements</h3>
                    </div>
                    <div className="blocDescription">
                        <p>Climatisation
                        Wi-Fi
                        Cuisine
                        Espace de travail
                        Fer à repasser
                        Sèche-cheveux
                        Cintres</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}