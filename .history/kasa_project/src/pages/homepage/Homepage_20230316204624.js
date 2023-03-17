import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";
import CardLogement from "./components/CardLogement";
import { UrlApiContext } from "../../context/UrlApiContext";
import { useContext, useState } from "react";

export default function Homepage(){

    const UrlApi = useContext(UrlApiContext);
    // console.log(UrlApi)




    async function FetchApi(){
        // const [data , setData] = useState([]);
       
        try{
            const response = await fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.jsonpi", {
                method : "GET",
                headers: {
                    "Content-type" : "application"
                }
            });
            if(response.ok){
                const data = await response.json();
                // setData(data)
                console.log(data);
            }
        }catch(e){
            console.log("erreur");
        }
        // return [data];
    }
    FetchApi()
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