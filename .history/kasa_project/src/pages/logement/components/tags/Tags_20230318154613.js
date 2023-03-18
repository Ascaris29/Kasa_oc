import style from "./Tags.module.scss";
import { data } from "../../../../data/Data";


export default function Tags({text, key}){
    return (
        <div className={`${style.Tags} d-flex`}>
           {text}
        </div>
    )
}