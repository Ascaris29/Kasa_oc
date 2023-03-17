import style from "./Ratings.module.scss";

export default function Ratings({note}){
    switch(note){
        case (note === 1) : 
        return (
                <span className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★</span> ★ ★ ★ ★</span>
            )  
            ;
        case(note === 2) : 
            return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}> ★ ★ </span> ★ ★ ★</p>
            )
        case (note === 3) : 
                return (
                    <span className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ </span> ★ ★</span>
                )
        default : 
            return null
    }
}