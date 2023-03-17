import style from "./Tags.module.scss";
import { data } from "../../../../data/Data";


export default function Tags({text}){
    return (
        <div className={`${style.Tags} d-flex`}>
            <span className={`${style.tag}`}>{text}</span>
        </div>
    )
}