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
            <div className="d-flex align-center justify-between">
                <div className={`${style.fichelogementTagName} d-flex`}>
                    <p>Cosy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                <span className="stars">★★★★★</span>
            </div>
            <div className={`${style.fichelogementBlocs}`}></div>
        </div>
    </div>
}