import style from "./Ratings.module.scss";

export default function Ratings({note}){
    console.log(typeof note)
    switch(note){
        case (note === "1") : 
        return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★</span> ★ ★ ★ ★</p>
            )  
            ;
        case(note === "2") : 
            return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}> ★ ★ </span> ★ ★ ★</p>
            )
        case (note === "3") : 
                return (
                    <div>
                        <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ </span> ★ ★</p>
                    </div>
                    
                )
        case (note === "4") :
                return (
                    <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★</span> ★ </p>
                )
        case (note === "5") :
                return (
                    <div>

                        <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`}>★ ★ ★ ★ ★ </span></p>
                    </div>
                )
        default : 
            return null
    }
}