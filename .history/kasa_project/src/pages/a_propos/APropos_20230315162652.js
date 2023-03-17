import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";
import CardDescription from "./components/carddescription/CardDescription";

export default function APropos(){
    return (
            <div className={`${style.apropos} p-30`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <div className={`${style.aproposCards}`}>


                </div>
                t une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."/>    
            </div>
    )
}