import { useState } from "react";
import style from "./Caroussel.module.scss";


export default function Caroussel({img}){

    //importer les images de l'api
    const arrayImage = img;
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const arraySize = arrayImage.length;
    const indexShow = index + 1 ;

    //incrémenter l'index de 1 au clic
    function handleClickCarousselPrev(){
        if(index > 0 && index < arrayImage.length){
            setLoading(true)
            let i = index - 1;
            setIndex(i);
        }else{
            setLoading(true)
            setIndex(arrayImage.length -1);
        }
    }

    //décrémenter l'index de -1
    function handleClickCarousselAfter(){
        if(index < arrayImage.length -1 ){
            setLoading(true)
            let i = index + 1;
            setIndex(i);
        }else{
            setLoading(true)
            setIndex(0);
        }   
    }

  
    return (
        <>
            {/* Boucle sur le tableau d'image et récupère l'image et son index */}
            { arrayImage.map((item, i) => i === index && ( 
                <img src={item} alt="" className={`${style.carousselImage} ${loading ? "loader" : null}`} key={item}/> 
            )
            )}
            {/* s'il n'y a qu'une image, ne pas afficher les fleches */}
            <p className={`${style.indexShow}`}>{`${indexShow} / ${arraySize}`}</p>
            <i className={arraySize !== 1 ? `${style.chevronLeft} fa-solid fa-chevron-left` : `${style.chevronLeft}`} onClick={handleClickCarousselPrev}></i>
            <i className={arraySize !== 1 ? `${style.chevronRight} fa-solid fa-chevron-right` : `${style.chevronRight}`} onClick={handleClickCarousselAfter}></i> 
        </>
    )

}