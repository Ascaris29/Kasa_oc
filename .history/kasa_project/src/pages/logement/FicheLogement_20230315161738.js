import style from "./FicheLogement.module.scss";
import image from "../../assets/images/Background1.png"
import CardDescription from "../a_propos/components/carddescription/CardDescription";

export default function FicheLogement(){
    return <div className={`${style.fichelogement} flex-fill`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src={image} alt="photo" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <div className="d-flex align-center flex-row justify-between">
                <div className="en-tete">
                    <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
                    <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
                </div>
                    <div className="identité d-flex align-items">
                    <p>Alexandre Dumas</p>
                    <img className={`${style.fichelogementPhotoIdentite}`} src={ image } alt="photographie de l'utilisateur" />
                </div>
            </div>
            <div className="d-flex align-center justify-between">
                <div className={`${style.fichelogementTagName} d-flex`}>
                    <p>Cosy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                <span className="stars">★★★★★</span>
            </div>
            <div className={`${style.fichelogementBlocs} d-flex`}>
                <CardDescription />
            </div>
        </div>
    </div>
}