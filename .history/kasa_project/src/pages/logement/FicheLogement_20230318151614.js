import style from "./FicheLogement.module.scss";
import CardDescription from "../a_propos/components/carddescription/CardDescription";
import Tags from "./components/tags/Tags";
import Caroussel from "./components/caroussel/Caroussel";
import Ratings from "./components/Ratings/Ratings";
import { data } from "../../data/Data";
import { useParams } from "react-router-dom";

export default function FicheLogement(){

    const { idUrl } = useParams();
 
    const donnée = data.find(i => i.id === idUrl);
    const arrayEquipments = donnée.equipments;



    
  
 
    return (
        <>
            <div className={`${style.fichelogement} flex-fill d-flex flex-column`}>
                <div className={`${style.fichelogementBackground} d-flex`}>
                    <Caroussel img={donnée.pictures}/>
                </div>
                <div className={`${style.fichelogementContent}`}>
                    <div className={`${style.fichelogementDescription}`}>
                        <div className="en-tete d-flex flex-column">
                            <h1 className={`${style.fichelogementTitle}`}>{donnée.title}</h1>
                            <p className={`${style.fichelogementSousTitle}`}>{donnée.location}</p>
                            
                                <Tags text={donnée.tags}/>
                            
                        </div>
                            <div className={`${style.fichelogementEnTete}`}>
                                <div className={`${style.fichelogementIdentity} d-flex align-center`}>
                                    <p>{donnée.host['name']}</p>
                                    <img className={`${style.fichelogementPhotoIdentite}`} src={ donnée.host['picture'] } alt="photographie de l'utilisateur" />
                                </div>
                                <Ratings note={donnée.rating}/>
                            </div>
                    </div>
                </div>
                <div className={`${style.fichelogementBlocs} d-flex`}>
                        <CardDescription key={donnée.description} classNameBloc={`${style.fichelogementCard}`} title="Description" text={donnée.description}/>
                        <CardDescription key={donnée.equipments} classNameBloc={`${style.fichelogementCard}`} title="Équipements" text={ arrayEquipments.map(i => <br{`- ${i}`}</>)} />
                </div>
            </div>
        </>
        
    )
}