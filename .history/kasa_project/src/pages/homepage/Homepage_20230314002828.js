import style from "./Homepage.module.scss";
import image from "../../assets/images/background_homepage.png";

export default function Homepage(){
    return (
        <main className={`flex-fill p-30 homepage}>
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="" />
            </div>
        </main>
    )
}