import style from "./FicheLogement.module.scss";
import CardDescription from "../a_propos/components/carddescription/CardDescription";
import Tags from "./components/tags/Tags";
import Caroussel from "./components/caroussel/Caroussel";
import Ratings from "./components/Ratings/Ratings";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UrlApiContext } from "../../context/UrlApiContext";
import UseFetchApi from "../../Hooks/UseFetchApi";


export default function FicheLogement(){

    const { idUrl } = useParams();
    const[data, setData] = u
 
    // const donnée = data.find(i => i.id === idUrl);
    // const arrayEquipments = donnée.equipments;
    // const arrayTags = donnée.tags;


    
  
 
    //return (
    //     <>
    //         <div className={`${style.fichelogement} `}>
    //             <div className={`${style.fichelogementBackground} d-flex`}>
    //                 <Caroussel img={donnée.pictures}/>
    //             </div>
    //             <div className={`${style.fichelogementContent}`}>
    //                 <div className={`${style.fichelogementDescription}`}>
    //                     <div className="en-tete d-flex flex-column">
    //                         <h1 className={`${style.fichelogementTitle}`}>{donnée.title}</h1>
    //                         <p className={`${style.fichelogementSousTitle}`}>{donnée.location}</p>
    //                         <div className={`${style.fichelogementTags}`}>
    //                             {arrayTags.map(i => {return <Tags text={i} key={i}/>})}
    //                         </div>    
    //                     </div>
    //                         <div className={`${style.fichelogementEnTete}`}>
    //                             <div className={`${style.fichelogementIdentity} d-flex align-center`}>
    //                                 <p>{donnée.host['name']}</p>
    //                                 <img className={`${style.fichelogementPhotoIdentite}`} src={ donnée.host['picture'] } alt="photographie de l'utilisateur" />
    //                             </div>
    //                             <Ratings note={donnée.rating}/>
    //                         </div>
    //                 </div>
    //             </div>
    //             <div className={`${style.fichelogementBlocs} d-flex`}>
    //                     <CardDescription classNameCard={`${style.fichelogementCard}`} title="Description" text={donnée.description}/>
    //                     <CardDescription classNameCard={`${style.fichelogementCard}`} title="Équipements" text={arrayEquipments.map(i => { return <p>{i}</p>})}/>
    //             </div>
    //         </div>
    //     </>
        
    // )
}