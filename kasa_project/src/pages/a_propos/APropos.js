import style from "./APropos.module.scss";
import image from "../../assets/images/background_apropos.png";
import CardDescription from "../../components/carddescription/CardDescription";

export default function APropos(){
    return (
            <div className={`${style.apropos}`}>
                <div className={`${style.aproposBackground} `}>
                    <img src={image} alt="photographie d'une montagne et d'un lac"/>
                </div>
                <div className={`${style.aproposCards}`}>
                    <CardDescription title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." key={"1"}/>
                    <CardDescription title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entrainera une exclusion de notre plateforme." key={"2"}/>
                    <CardDescription title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." key={"3"}/>
                    <CardDescription title="Responsabilité" text="La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes." key={"4"}/> 
                </div>
            </div>
    )
}