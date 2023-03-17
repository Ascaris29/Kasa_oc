import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";
import CardLogement from "./components/CardLogement";
import { UrlApiContext } from "../../";
import { useContext, useState } from "react";

export default function Homepage(){





    async function fetchApi(){
        const [data , setData] = useState([]);
        const UrlApi = useContext(UrlApiContext);
        try{
            const response = await fetch(UrlApi);
            if(response.ok){
                const data = await response.json();
                setData(data)
                console.log(data);
            }
        }catch(e){
            console.log("erreur");
        }
        return [data];
    }
    fetchApi()
    return (
        <main className={`flex-fill p-30 ${style.homepage}`}>
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="photographie d'une montagne et de la mer"/>
                <p className={`${style.homepageTxtImg}`}>Chez vous, partout et ailleurs</p>
            </div>
            <div className={`${style.homepageGallery} m-t-30`}>
            <div className={`${style.homepageCard}`}>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
                <CardLogement className="" title="Titre de la location"/>
            </div>
            </div>
        </main>
    )
}