import { useState } from "react";
import style from "./Caroussel.module.scss";


export default function Caroussel({img}){

    //importer les images de l'api
    const arrayImage = img;

    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const arraySize = arrayImage.length;
    const indexShow = index + 1 ;

    //console.log(arrayImage);
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
            { arrayImage.map((item, i) => i === index && ( 
                <img src={item} alt="" className={`${style.carousselImage} ${loading ? "loader" : null}`} key={item}/> 
            )
            )}
            <p className={`${style.indexShow}`}>{`${indexShow} / ${arraySize}`}</p>
            <i className={`${style.chevronLeft} fa-solid fa-chevron-left`} onClick={handleClickCarousselPrev}></i>
            <i className={`${style.chevronRight} fa-solid fa-chevron-right`} onClick={handleClickCarousselAfter}></i> 
        </>
    )



}