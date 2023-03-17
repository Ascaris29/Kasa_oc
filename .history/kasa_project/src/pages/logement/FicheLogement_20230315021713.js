import style from "./FicheLogement.module.scss";

export default function FicheLogement(){
    return <div className={`${style.fichelogement}`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src="" alt="" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <h1 className={`${style.fichelogementContent}`}>Cozy loft on the Canal saint-Martin</h1>
        </div>
    </div>
}