import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";
import CardLogement from "./components/CardLogement";
import data from "../../";




export default function Homepage(){
    console.log(data)
    return (
        <main className={`flex-fill p-30 ${style.homepage}`}>
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="photographie d'une montagne et de la mer"/>
                <p className={`${style.homepageTxtImg}`}>Chez vous, partout et ailleurs</p>
            </div>
            <div className={`${style.homepageGallery} m-t-30`}>
            <div className={`${style.homepageCard}`}>
                { data.map((data) => {
                    return <CardLogement className="" title={data.title}/>
                })}
                
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