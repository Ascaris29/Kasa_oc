import style from "./Tags.module.scss";
import { data } from "../../../../data/Data";


export default function Tags({text}){
    return (
        <div className={`${style.Tag} d-flex`}>
            <p className="">{text}</p>
        </div>
    )
}