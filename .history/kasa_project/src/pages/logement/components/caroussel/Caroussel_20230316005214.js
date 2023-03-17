import { useState } from "react";
import img1 from "../../../../assets/images/pexels-photo-950058.webp";
import img2 from "../../../../assets/images/pexels-photo-1013427.jpeg";
import img3 from "../../../../assets/images/pexels-photo-1612351.jpeg";

export default function Caroussel(){

    //importer les images de l'api
    const arrayImage = [
        img1,
        img2,
        img3
    ];

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
        if(index < arrayImage.length){
            let i = index + 1;
            setIndex(i);
        }else{
            s
        }
    }

    

    return (
        <div>
            { arrayImage.map((item, i) => 
                i === index ? ( <img src={item} alt="" /> ) : null
            )}
            <button onClick={handleClickCarousselPrev}> avant </button>
            <button onClick={handleClickCarousselAfter}> après </button>
            
        </div>
    )



}