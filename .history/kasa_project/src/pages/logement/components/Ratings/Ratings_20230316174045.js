import style from "./Ratings.module.scss";

export default function Ratings({note}){
    console.log(note)
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
        case (note === 4) :
                return (
                    <span className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★</span> ★ </span>
                )
        case (note === 5) :
                return (
                    <span className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★ ★ </span></span>
                )
        default : 
            return null
    }
}