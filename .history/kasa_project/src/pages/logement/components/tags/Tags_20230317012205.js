import style from "./Tags.module.scss";
import { data } from "../../../../data/Data";


export default function Tags({text}){
    return (
        <div className={`${style.Tags} d-flex`}>
            <p className={`${style.tag}`}>{text}</p>
        </div>
    )
}