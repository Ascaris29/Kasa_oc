import style from "./Tags.module.scss";
import { data } from "../../../../data/Data";


export default function Tags(){
    return (
        <div className={`${style.Tag} d-flex`}>
            <p>{data.}</p>
        </div>
    )
}