
export default function Ratings({note}){
    switch(note){
        case (note === 1) : 
        return (
                <span className={`${style.fichelogementStars}`}>★ ★ ★ ★ ★</span>
            )  
            ;
        case(note === 2) : 
            return (
                <p className={`${style.fichelogementStars}`}><span className={`${style.starsColored}`} ★ </span> ★ ★ ★ ★</p>
            )
        default : 
            return null
    }
}