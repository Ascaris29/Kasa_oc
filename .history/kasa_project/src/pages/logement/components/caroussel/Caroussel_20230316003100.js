import { useState } from "react";
import img1 from "../../../../assets/images/pexels-photo-950058.webp";
import img2 from "../../../../assets/images/pexels-photo-1013427.jpeg";

export default function Caroussel(){

    //importer les images de l'api
    const arrayImage = [
        img1,
        img2

    ];

    const [showImage, setShowImage] = useState();



}