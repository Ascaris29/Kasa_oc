import style from "./FicheLogement.module.scss";
import image from "../../assets/images/Background1.png"
import CardDescription from "../a_propos/components/carddescription/CardDescription";
import Tags from "./components/tags/Tags";
import Caroussel from "./components/caroussel/Caroussel";
import Ratings from "./components/Ratings/Ratings";
import { data } from "../../data/Data";
import { useParams } from "react-router-dom";

export default function FicheLogement(){

    const url = useParams();
    console.log(url)
    return (
        <>
            if(data === data.id){

            }
            
            })}
        </>
    )
}