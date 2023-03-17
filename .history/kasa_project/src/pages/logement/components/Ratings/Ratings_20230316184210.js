import style from "./Ratings.module.scss";

export default function Ratings({note}){
    console.log(note)
    switch(note){
        case ("1") : 
        return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★</span> ★ ★ ★ ★</p>
            )  
            ;
        case("2") : 
            return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}> ★ ★ </span> ★ ★ ★</p>
            )
        case ("3") : 
                return (
                    <div>
                        <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ </span> ★ ★</p>
                    </div>
                    
                )
        case ("4") :
                return (
                    <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★</span> ★ </p>
                )
        case ("5") :
                return (
                    <div>
                        <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★ ★ </span></p>
                    </div>
                )
        default : 
            return null
    }
}