import style from "./FicheLogement.module.scss";

export default function FicheLogement(){
    return <div className={`${style.fichelogement}`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src="" alt="" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
            <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
            
        </div>
    </div>
}