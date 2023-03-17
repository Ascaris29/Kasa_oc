import style from "./FicheLogement.module.scss";

export default function FicheLogement(){
    return <div className={`${style.fichelogement}`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src="" alt="" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <div className="d-flex align-center flex-row justify-between">
                <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
                <div className="d-flex align-items">
                    <p>Alexandre Dumas</p>
                    <img src="" alt="" />
                </div>
            </div>
            <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
            <div className="d-flex">
                <div className={`${style.fichelogementTagName}`}>
                    <span></span>
                    <span></span><span></span>
                </div>
                <span className="stars">★★★★★</span>
            </div>
        </div>
    </div>
}