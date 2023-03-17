import { useState } from "react";
import style from "./Caroussel.module.scss";


export default function Caroussel({img}){

    //importer les images de l'api
    const arrayImage = [img];
    console.log(arrayImage)

    const [index, setIndex] = useState(0);

    //console.log(arrayImage);
    function handleClickCarousselPrev(){
        if(index > 0 && index < arrayImage.length){
            let i = index - 1;
            setIndex(i);
        }else{
            setIndex(arrayImage.length -1);
        }
    }

    function handleClickCarousselAfter(){
        if(index < arrayImage.length -1 ){
            let i = index + 1;
            setIndex(i);
        }else{
            setIndex(0);
        }   
    }

    //a voir avec julien
    if(index === arrayImage.length){
        setIndex(0)
    }

    return (
        <>
            { arrayImage.map((item, i) => i === index && ( 
                <img src={item} alt="" className={`${style.carousselImage}`} key={item}/> 
            )
            )}
            <i className={`${style.chevronLeft} fa-solid fa-chevron-left`} onClick={handleClickCarousselPrev}></i>
            <i className={`${style.chevronRight} fa-solid fa-chevron-right`} onClick={handleClickCarousselAfter}></i> 
        </>
    )



}