
export default function Ratings({note}){
    switch(note){
        case (note == 1) : 
        return 
                <span className={`${style.fichelogementStars}`}>★ ★ ★ ★ ★</span>
            ;
        case(note == 2) : 
            return 
        default : 
            return null
    }
}