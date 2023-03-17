import style from "./FicheLogement.module.scss";

export default function FicheLogement(){
    return <div className={`${style.fichelogement}`}>
        <div className={`${style.fichelogementBackground}`}>
            <img src="" alt="" />
        </div>
        <div className={`${style.fichelogementContent}`}>
            <div className="">
                <h1 className={`${style.fichelogementTitle}`}>Cozy loft on the Canal saint-Martin</h1>
                <div>
                    <p>Alexandre Dumas</p>
                    <span></span>
                </div>
            </div>
            <p className={`${style.fichelogementSousTitle}`}>Paris, Île de France</p>
            <div className={`${style.fichelogementTagName}`}>

            </div>
        </div>
    </div>
}