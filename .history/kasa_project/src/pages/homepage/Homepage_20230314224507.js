import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";
import Card from "./components/Card";

export default function Homepage(){
    return (
        <main className={`flex-fill p-30 ${style.homepage}`}>
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="image d'une montagne" />
                <p className={`${style.homepageTxtImg}`}>Chez vous, partout et ailleurs</p>
            </div>
            <div className={`${style.homepageGallery} m-t-30`}>
                <Card />
            </div>
        </main>
    )
}