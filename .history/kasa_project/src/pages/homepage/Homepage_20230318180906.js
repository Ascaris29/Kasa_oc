import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";
import CardLogement from "./components/CardLogement";
import { useContext, useState } from "react";
import { UrlApiContext } from "../../context/UrlApiContext";
import UseFetchApi from "../../Hooks/UseFetchApi";



export default function Homepage(){

    const URL_API = useContext(UrlApiContext);
    
    const [data, setData] = UseFetchApi(URL_API);

    return (
        <main className={`flex-fill p-30 ${style.homepage}`}>
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="photographie d'une montagne et de la mer"/>
                <p className={`${style.homepageTxtImg}`}>Chez vous, partout et ailleurs</p>
            </div>
            <div className={`${style.homepageGallery} m-t-30`}>
            <div className={`${style.homepageCard}`}>

                { data.map((data) => {
                    return <CardLogement className="" title={data.title} cover={data.cover} id={data.id}/>
                })}
            </div>
            </div>
        </main>
    )
}