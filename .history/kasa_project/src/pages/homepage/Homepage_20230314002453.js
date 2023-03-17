import style from "./Homepage.module.scss";
import image from "../../"

export default function Homepage(){
    return (
        <main className="flex-fill p-30">
            <div className={`${style.homepageImg}`}>
                <img src={image} alt="" />
            </div>
        </main>
    )
}