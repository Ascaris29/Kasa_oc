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

    console.log(arrayImage);


    const [showImage, setShowImage] = useState(0);

    return (
        <div></div>
    )



}