import style from "./Tags.module.scss";


export default function Tags({text}){
    return (
        <p className={`${style.Tags} d-flex`}>
           {text}
        </div>
    )
}