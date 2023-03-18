import style from "./Tags.module.scss";


export default function Tags({text}){
    return (
        <div className={`${style.Tags} d-flex`}>
           <p>{text}</p>
        </div>
    )
}