
export default function Ratings({note}){
    switch(note){
        case (note == 1) : 
        return <div>
                <span className={`${style.fichelogementStars}`}>★ ★ ★ ★ ★</span>
            ;
        case(note == 2) : 
            return 
        default : 
            return null
    }
}